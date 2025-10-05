import { supabase } from '../lib/supabase';
import type { Subscription, PricingTier, UsageLimit } from '../types/platform.types';

export const subscriptionService = {
  async getPricingTiers() {
    const { data, error } = await supabase
      .from('pricing_tiers')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data as PricingTier[];
  },

  async getTierBySlug(slug: string) {
    const { data, error } = await supabase
      .from('pricing_tiers')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .maybeSingle();

    if (error) throw error;
    return data as PricingTier | null;
  },

  async getCurrentSubscription(userId: string) {
    const { data, error } = await supabase
      .from('subscriptions')
      .select(`
        *,
        tier:pricing_tiers(*)
      `)
      .eq('user_id', userId)
      .eq('status', 'active')
      .maybeSingle();

    if (error) throw error;
    return data as (Subscription & { tier: PricingTier }) | null;
  },

  async getUsageLimits(userId: string) {
    const { data, error } = await supabase
      .from('usage_limits')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data as UsageLimit[];
  },

  async checkUsageLimit(userId: string, limitType: UsageLimit['limitType']) {
    const { data, error } = await supabase
      .from('usage_limits')
      .select('*')
      .eq('user_id', userId)
      .eq('limit_type', limitType)
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return { canProceed: true, limit: null };
    }

    const canProceed = data.current_value < data.limit_value;
    return { canProceed, limit: data as UsageLimit };
  },

  async incrementUsage(userId: string, limitType: UsageLimit['limitType']) {
    const { error } = await supabase.rpc('increment_usage_limit', {
      p_user_id: userId,
      p_limit_type: limitType
    });

    if (error) throw error;
  },

  async createSubscription(userId: string, tierId: string, billingCycle: 'monthly' | 'yearly') {
    const tier = await supabase
      .from('pricing_tiers')
      .select('*')
      .eq('id', tierId)
      .maybeSingle();

    if (!tier.data) throw new Error('Tier not found');

    const currentPeriodStart = new Date();
    const currentPeriodEnd = new Date();

    if (billingCycle === 'monthly') {
      currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1);
    } else {
      currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1);
    }

    const { data, error } = await supabase
      .from('subscriptions')
      .insert({
        user_id: userId,
        tier_id: tierId,
        billing_cycle: billingCycle,
        current_period_start: currentPeriodStart.toISOString(),
        current_period_end: currentPeriodEnd.toISOString(),
        status: 'active'
      })
      .select()
      .single();

    if (error) throw error;
    return data as Subscription;
  },

  async cancelSubscription(subscriptionId: string, cancelAtPeriodEnd = true) {
    const { data, error } = await supabase
      .from('subscriptions')
      .update({
        cancel_at_period_end: cancelAtPeriodEnd,
        status: cancelAtPeriodEnd ? 'active' : 'canceled'
      })
      .eq('id', subscriptionId)
      .select()
      .single();

    if (error) throw error;
    return data as Subscription;
  },

  async upgradeSubscription(subscriptionId: string, newTierId: string) {
    const { data, error } = await supabase
      .from('subscriptions')
      .update({
        tier_id: newTierId,
        cancel_at_period_end: false
      })
      .eq('id', subscriptionId)
      .select()
      .single();

    if (error) throw error;
    return data as Subscription;
  },

  async getUserTier(userId: string) {
    const subscription = await this.getCurrentSubscription(userId);

    if (!subscription || !subscription.tier) {
      const freeTier = await this.getTierBySlug('free');
      return freeTier;
    }

    return subscription.tier;
  },

  async canAccessProduct(userId: string, productTierRequired: string) {
    const userTier = await this.getUserTier(userId);

    if (!userTier) return false;

    const tierHierarchy = ['free', 'starter', 'professional', 'enterprise'];
    const userTierIndex = tierHierarchy.indexOf(userTier.slug);
    const requiredTierIndex = tierHierarchy.indexOf(productTierRequired);

    return userTierIndex >= requiredTierIndex;
  }
};
