import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Your App Name',
  description: 'Simple and transparent pricing plans for every need',
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '$9',
    interval: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '5GB storage',
      'Basic support',
      'Core features',
    ],
    buttonText: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    interval: '/month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '50GB storage',
      'Priority support',
      'Advanced features',
      'Team collaboration',
      'Custom integrations',
    ],
    buttonText: 'Get Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    interval: '/month',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom features',
      'SLA guarantee',
      'Advanced security',
      'API access',
    ],
    buttonText: 'Contact Sales',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                plan.highlighted
                  ? 'bg-gray-900 text-white ring-gray-900'
                  : 'bg-white text-gray-900'
              }`}
            >
              <h3 className="text-lg font-semibold leading-8">{plan.name}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-400">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm font-semibold leading-6">{plan.interval}</span>
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${
                        plan.highlighted ? 'text-white' : 'text-indigo-600'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}