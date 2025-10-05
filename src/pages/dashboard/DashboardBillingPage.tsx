import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Download, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { Badge } from "../../components/ui/Badge";

const currentPlan = {
  name: "Professional",
  price: 49,
  period: "month",
  features: [
    "Unlimited workflows",
    "Advanced AI agents", 
    "Priority support",
    "Custom integrations",
    "Analytics dashboard",
    "Team collaboration"
  ],
  usage: {
    workflows: { used: 12, limit: "unlimited" },
    agents: { used: 3, limit: "unlimited" },
    executions: { used: 15420, limit: 50000 }
  }
};

const invoices = [
  {
    id: "inv_001",
    date: "Dec 1, 2024",
    amount: 49,
    status: "paid",
    description: "Professional Plan - December 2024"
  },
  {
    id: "inv_002", 
    date: "Nov 1, 2024",
    amount: 49,
    status: "paid",
    description: "Professional Plan - November 2024"
  },
  {
    id: "inv_003",
    date: "Oct 1, 2024", 
    amount: 49,
    status: "paid",
    description: "Professional Plan - October 2024"
  }
];

const paymentMethod = {
  type: "Visa",
  last4: "4242",
  expiry: "12/25",
  name: "Sarah Chen"
};

export default function DashboardBillingPage() {
  return (
    <div className="pt-20 min-h-screen bg-monks-light-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-monks-black mb-2">Billing & Usage</h1>
          <p className="text-monks-gray">Manage your subscription and view usage details</p>
        </div>

        <div className="space-y-8">
          {/* Current Plan */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-monks-black">Current Plan</h2>
              <Badge variant="accent">Active</Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-monks-black">${currentPlan.price}</div>
                  <div className="text-monks-gray">/{currentPlan.period}</div>
                </div>
                <h3 className="text-xl font-semibold text-monks-black">{currentPlan.name} Plan</h3>
                
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-monks-gray">
                      <div className="w-1.5 h-1.5 bg-monks-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-monks-black">Usage This Month</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-monks-gray">Workflows:</span>
                    <span className="text-monks-black">{currentPlan.usage.workflows.used} / {currentPlan.usage.workflows.limit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-monks-gray">AI Agents:</span>
                    <span className="text-monks-black">{currentPlan.usage.agents.used} / {currentPlan.usage.agents.limit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-monks-gray">Executions:</span>
                    <span className="text-monks-black">{currentPlan.usage.executions.used.toLocaleString()} / {currentPlan.usage.executions.limit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link
                to="/pricing"
                className="bg-monks-accent text-white px-6 py-3 rounded-full font-medium hover:bg-monks-hover transition-all duration-300"
              >
                Upgrade Plan
              </Link>
              <button className="border border-monks-gray text-monks-gray px-6 py-3 rounded-full font-medium hover:border-monks-black hover:text-monks-black transition-all duration-300">
                Change Plan
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-monks-black mb-6">Payment Method</h2>
            
            <div className="flex items-center justify-between p-6 bg-monks-light-gray rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-monks-accent/10 rounded-2xl flex items-center justify-center">
                  <CreditCard size={20} className="text-monks-accent" />
                </div>
                <div>
                  <div className="font-medium text-monks-black">
                    {paymentMethod.type} •••• {paymentMethod.last4}
                  </div>
                  <div className="text-sm text-monks-gray">
                    Expires {paymentMethod.expiry} • {paymentMethod.name}
                  </div>
                </div>
              </div>
              <button className="border border-monks-gray text-monks-gray px-4 py-2 rounded-full font-medium hover:border-monks-black hover:text-monks-black transition-all duration-300">
                Update
              </button>
            </div>
          </div>

          {/* Billing History */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-monks-black">Billing History</h2>
              <button className="text-monks-accent hover:text-monks-black transition-colors duration-300 font-medium">
                Download All
              </button>
            </div>
            
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-6 bg-monks-light-gray rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-monks-accent/10 rounded-full flex items-center justify-center">
                      <Calendar size={16} className="text-monks-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-monks-black">{invoice.description}</div>
                      <div className="text-sm text-monks-gray">{invoice.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-semibold text-monks-black">${invoice.amount}</div>
                      <Badge variant="success" size="sm">
                        {invoice.status}
                      </Badge>
                    </div>
                    <button className="p-2 text-monks-gray hover:text-monks-black transition-colors duration-300">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Analytics */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-monks-black mb-6">Usage Analytics</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 bg-monks-light-gray rounded-2xl">
                <TrendingUp size={24} className="text-monks-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-monks-black">15,420</div>
                <div className="text-sm text-monks-gray">Workflow Executions</div>
              </div>
              
              <div className="text-center p-6 bg-monks-light-gray rounded-2xl">
                <DollarSign size={24} className="text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-monks-black">$2,450</div>
                <div className="text-sm text-monks-gray">Cost Savings</div>
              </div>
              
              <div className="text-center p-6 bg-monks-light-gray rounded-2xl">
                <Calendar size={24} className="text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-monks-black">156</div>
                <div className="text-sm text-monks-gray">Hours Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}