export type ProductType = 'workflow' | 'agent' | 'asset' | 'service' | 'tool';
export type PricingModel = 'free' | 'one_time' | 'subscription' | 'custom_quote';
export type TierLevel = 'free' | 'starter' | 'professional' | 'enterprise';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete';
export type OrderStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type AffiliateStatus = 'pending' | 'approved' | 'suspended' | 'rejected';
export type CommissionStatus = 'pending' | 'approved' | 'paid' | 'rejected' | 'reversed';

export interface PricingTier {
  id: string;
  name: string;
  slug: TierLevel;
  priceMonthly: number;
  priceYearly: number;
  features: {
    workflowDeployments: number | 'unlimited';
    agentInstances: number | 'unlimited';
    assetDownloads: number | 'unlimited';
    toolUsesPerMonth: number | 'unlimited';
    apiCalls: number | 'unlimited';
    support: string;
    advancedFeatures?: string[];
  };
  isActive: boolean;
  sortOrder: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  icon?: string;
  sortOrder: number;
}

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  categoryId?: string;
  category?: ProductCategory;
  pricingModel: PricingModel;
  price: number;
  tierRequired: TierLevel;
  metadata: Record<string, any>;
  features: string[];
  integrations: string[];
  screenshots: string[];
  demoUrl?: string;
  documentationUrl?: string;
  installCount: number;
  ratingAverage: number;
  ratingCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  tierId: string;
  tier?: PricingTier;
  status: SubscriptionStatus;
  billingCycle: 'monthly' | 'yearly';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId?: string;
  stripeCustomerId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  productId?: string;
  product?: Product;
  amount: number;
  status: OrderStatus;
  paymentMethod?: string;
  stripePaymentIntentId?: string;
  receiptUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProduct {
  id: string;
  userId: string;
  productId: string;
  product?: Product;
  source: 'subscription' | 'purchase' | 'trial' | 'admin_grant';
  activatedAt: string;
  expiresAt?: string;
  usageCount: number;
  lastUsedAt?: string;
  deploymentConfig: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface AffiliateProgram {
  id: string;
  productId?: string;
  product?: Product;
  commissionType: 'percentage' | 'fixed' | 'tiered';
  commissionValue: number;
  commissionDuration: number;
  cookieDuration: number;
  isActive: boolean;
  terms?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Affiliate {
  id: string;
  userId: string;
  status: AffiliateStatus;
  referralCode: string;
  companyName?: string;
  website?: string;
  promotionalMethods: string[];
  stripeAccountId?: string;
  paymentMethod: Record<string, any>;
  totalEarnings: number;
  totalConversions: number;
  appliedAt: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AffiliateLink {
  id: string;
  affiliateId: string;
  productId?: string;
  product?: Product;
  linkCode: string;
  destinationUrl: string;
  campaignName?: string;
  clickCount: number;
  conversionCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AffiliateCommission {
  id: string;
  direction: 'incoming' | 'outgoing';
  affiliateId?: string;
  affiliate?: Affiliate;
  partnerId?: string;
  orderId?: string;
  order?: Order;
  subscriptionId?: string;
  subscription?: Subscription;
  amount: number;
  status: CommissionStatus;
  paidAt?: string;
  stripeTransferId?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
  moderationStatus: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface ProductBundle {
  id: string;
  name: string;
  slug: string;
  description?: string;
  productIds: string[];
  products?: Product[];
  regularPrice: number;
  bundlePrice: number;
  discountPercentage: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UsageLimit {
  id: string;
  userId: string;
  limitType: 'workflow_deployments' | 'agent_instances' | 'asset_downloads' | 'tool_uses' | 'api_calls';
  limitValue: number;
  currentValue: number;
  resetAt: string;
  tierSlug: TierLevel;
}

export interface Integration {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: string;
  iconUrl?: string;
  authType: 'oauth2' | 'api_key' | 'webhook' | 'none';
  documentationUrl?: string;
  setupGuide?: string;
  isActive: boolean;
}

export interface UserIntegration {
  id: string;
  userId: string;
  integrationId: string;
  integration?: Integration;
  credentials: Record<string, any>;
  status: 'connected' | 'disconnected' | 'error' | 'pending';
  lastSyncAt?: string;
  errorMessage?: string;
  createdAt: string;
  updatedAt: string;
}
