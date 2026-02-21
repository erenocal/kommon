'use client'

import { CheckCircle, Sparkles } from 'lucide-react'

const mockListings = [
  {
    title: "Spacious Room in Williamsburg",
    rent: "$1,200",
    brokerFee: "$0",
    savings: "$1,800",
    features: ["No broker fee", "Verified student", "Move-in ready"]
  },
  {
    title: "Cozy Studio in East Village", 
    rent: "$1,400",
    brokerFee: "$0",
    savings: "$2,520",
    features: ["Direct from tenant", "Flexible lease", "Furnished"]
  }
]

export function BenefitHighlight2() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#0F1419' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #E8EAED 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full" style={{ fontFamily: 'var(--font-nunito)', color: '#C86A50', backgroundColor: 'rgba(200, 106, 80, 0.1)' }}>
              No Broker Fees
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
            Don&apos;t Get Scammed by Brokers
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
            Connect directly with verified students and landlords. Skip the middleman and save thousands in broker fees.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mockListings.map((listing, index) => (
            <div
              key={index}
              className="group relative rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(200, 106, 80, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(200, 106, 80, 0.1), 0 10px 10px -5px rgba(200, 106, 80, 0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#2D3540'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Savings Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderWidth: '1px', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                <Sparkles className="w-4 h-4" style={{ color: '#4ade80' }} />
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#4ade80' }}>
                  Save {listing.savings}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                  {listing.title}
                </h3>

                {/* Rent Info */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#C86A50' }}>
                    {listing.rent}
                  </span>
                  <span className="text-sm" style={{ color: '#9BA1A6' }}>/month</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {listing.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4ade80' }} />
                      <span className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full font-bold py-3 px-4 rounded-xl transition-all duration-200" style={{ fontFamily: 'var(--font-nunito)', backgroundColor: '#C86A50', color: '#F7F5F2' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B55F46'
                    e.currentTarget.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#C86A50'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
