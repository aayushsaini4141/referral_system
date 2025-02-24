import React from 'react';
import { ArrowRight, Award, BadgeCheck, Ban as Bank, Clock, DollarSign, HandCoins, LineChart, Share2, Shield } from 'lucide-react';

const tiers = [
  { name: 'Bronze', upgrades: '1-10', commission: '10%', icon: <Award className="w-8 h-8 text-amber-600" /> },
  { name: 'Silver', upgrades: '11-25', commission: '12%', icon: <Award className="w-8 h-8 text-gray-400" /> },
  { name: 'Gold', upgrades: '26-50', commission: '15%', icon: <Award className="w-8 h-8 text-yellow-400" /> },
  { name: 'Platinum', upgrades: '51-100', commission: '18%', icon: <Award className="w-8 h-8 text-blue-500" /> },
  { name: 'Diamond', upgrades: '100+', commission: '20%', icon: <Award className="w-8 h-8 text-purple-500" /> },
];

const benefits = [
  { title: 'Up to 20% Commission', description: 'Earn big on every successful upgrade', icon: <DollarSign /> },
  { title: 'No Minimum Payout', description: 'Get paid every Monday', icon: <Clock /> },
  { title: 'No KYC Required', description: 'Start earning instantly', icon: <Shield /> },
  { title: 'Exclusive Badges', description: 'Get recognized for your achievements', icon: <BadgeCheck /> },
  { title: 'Easy Tracking Dashboard', description: 'Monitor your referrals & earnings', icon: <LineChart /> },
];


const LandingPage = ({ onNext }: { onNext: () => void }) => {

    onNext(); 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#EC0B43] to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Ooulet Partner Program – Earn Big with Every Referral!
              </h1>
              <p className="text-xl mb-8 text-rose-100">
                Refer. Earn. Grow. No Limits!
              </p>
              <button className="bg-white text-[#EC0B43] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800"
                alt="Partner Success"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-[#EC0B43]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Step 1: Refer Businesses</h3>
              <p className="text-gray-600">Share your unique referral link with potential businesses</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandCoins className="w-8 h-8 text-[#EC0B43]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Step 2: Earn Commissions</h3>
              <p className="text-gray-600">Get rewarded for every successful upgrade</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bank className="w-8 h-8 text-[#EC0B43]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Step 3: Weekly Payouts</h3>
              <p className="text-gray-600">Receive payments directly to your bank account every Monday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Commission Structure</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  {tier.icon}
                  <span className="text-2xl font-bold text-[#EC0B43]">{tier.commission}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-gray-600">{tier.upgrades} Upgrades</p>
                <div className="mt-4 bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-[#EC0B43] h-2 rounded-full"
                    style={{ width: `${(index + 1) * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join the Ooulet Partner Program?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start space-x-4 p-6 bg-rose-50 rounded-lg"
              >
                <div className="text-[#EC0B43]">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#EC0B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Earning?</h2>
          <p className="text-xl mb-12 text-rose-100">
            Join thousands of successful partners and start earning weekly commissions today!
          </p>
          <button className="bg-white text-[#EC0B43] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
            Start Earning Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage  ;