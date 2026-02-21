import { ShieldCheck, Clock, Users } from 'lucide-react'

const keyBenefits = [
  {
    icon: ShieldCheck,
    title: "University Partnerships",
    description: "Verified by university partnerships to ensure authenticity and safety"
  },
  {
    icon: Clock, 
    title: "24/7 Safety Support",
    description: "Round-the-clock safety support and community standards for peace of mind"
  },
  {
    icon: Users,
    title: "Direct Student Connections", 
    description: "Connect directly with verified student hosts in your university community"
  }
]

export function TrustIndicatorsSection() {
  return (
    <section id="features" className="py-16 px-4 bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-dark-text font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
            Why Choose Kommon?
          </h2>
          <p className="text-lg text-dark-text-muted max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
            Built for students, by international students, with the features that matter most for safe housing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {keyBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hearth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-hearth" />
                </div>
                <h3 className="text-lg font-semibold text-dark-text mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                  {benefit.title}
                </h3>
                <p className="text-dark-text-muted" style={{ fontFamily: 'var(--font-lora)' }}>
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
