import { useState } from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingData: PricingTier[] = [
  {
    name: 'Starter',
    price: 'CHF 990',
    description: 'Ideal für kleine Teams und erste KI-Projekte',
    features: [
      'Coremlis Platform (Basic)',
      '1 SwiftSuite Modul nach Wahl',
      'Community Support',
      '5 User-Lizenzen',
      'Schweizer Cloud-Hosting',
    ],
    cta: 'Jetzt starten'
  },
  {
    name: 'Business',
    price: 'CHF 2\'490',
    description: 'Perfekt für wachsende Unternehmen',
    features: [
      'Coremlis Platform (Pro)',
      'Alle SwiftSuite Module',
      'Priority Support',
      '20 User-Lizenzen',
      'On-Premise oder Cloud',
      'Individuelles Training',
      'MLOps & Monitoring'
    ],
    cta: 'Demo buchen',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Auf Anfrage',
    description: 'Massgeschneiderte Lösungen für Grossunternehmen',
    features: [
      'Coremlis Platform (Enterprise)',
      'Unbegrenzte User-Lizenzen',
      'Dedicated Support',
      'Custom Development',
      'Multi-Cloud & Hybrid',
      'SLA Garantie',
      'Compliance & Audit'
    ],
    cta: 'Kontaktieren'
  }
];

export default function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-gray-100 rounded-lg p-1 inline-flex">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`${
              billingPeriod === 'monthly'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500'
            } relative px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary`}
          >
            Monatlich
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`${
              billingPeriod === 'yearly'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500'
            } relative px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary`}
          >
            Jährlich <span className="text-accent">(-20%)</span>
          </button>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {pricingData.map((tier) => (
          <div key={tier.name} className={`relative rounded-2xl ${
            tier.popular 
              ? 'bg-primary text-white shadow-xl scale-105 z-10' 
              : 'bg-white text-gray-900 shadow-lg'
          }`}>
            {tier.popular && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="inline-flex rounded-full bg-accent px-4 py-1 text-sm font-semibold text-white">
                  Beliebt
                </span>
              </div>
            )}
            <div className="p-8">
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className={`mt-4 text-sm ${tier.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                {tier.description}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Auf Anfrage' && (
                  <span className={`text-sm ${tier.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                    /{billingPeriod === 'monthly' ? 'Monat' : 'Jahr'}
                  </span>
                )}
              </p>
              <ul className={`mt-8 space-y-4 text-sm ${tier.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className={`h-5 w-5 ${tier.popular ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/contact"
                  className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-medium ${
                    tier.popular
                      ? 'bg-white text-primary hover:bg-gray-50'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 