import React from "react";
import { Link2, TrendingUp, DollarSign, Target } from "lucide-react";

export default function AffiliatePage() {
  const features = [
    {
      title: "Smart Links",
      description: "Intelligent link rotation and optimization",
      icon: Link2
    },
    {
      title: "Creative Rotation",
      description: "A/B test creatives automatically",
      icon: Target
    },
    {
      title: "Real-time Analytics",
      description: "Live EPC and CVR tracking",
      icon: TrendingUp
    },
    {
      title: "Revenue Optimization",
      description: "Maximize your earnings potential",
      icon: DollarSign
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Affiliate Hub</h1>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            Promote the best brands and maximize your affiliate revenue with 
            intelligent optimization and real-time analytics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-slate/80 rounded-xl2 p-6 border border-white/5 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-violet rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-mist">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate/80 rounded-xl2 p-8 border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Top Performing Offers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>SaaS Platform</span>
                <span className="text-emerald font-semibold">$250 EPC</span>
              </div>
              <div className="flex justify-between items-center">
                <span>E-commerce Tool</span>
                <span className="text-emerald font-semibold">$180 EPC</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Marketing Suite</span>
                <span className="text-emerald font-semibold">$320 EPC</span>
              </div>
            </div>
          </div>

          <div className="bg-slate/80 rounded-xl2 p-8 border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Your Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Revenue</span>
                <span className="text-gold font-semibold">$12,450</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Conversion Rate</span>
                <span className="text-indigo font-semibold">3.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Campaigns</span>
                <span className="text-violet font-semibold">8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo to-violet rounded-xl2 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Promoting Today</h2>
          <p className="text-lg mb-6">Join our affiliate program and start earning commissions</p>
          <button className="bg-ink px-8 py-3 rounded-xl font-semibold hover:bg-slate transition-colors">
            Open Affiliate Hub
          </button>
        </div>
      </div>
    </div>
  );
}