const steps = [
  {
    number: "01",
    title: "Verify Your University Email",
    description: "Sign up with your .edu email address to join our verified student community"
  },
  {
    number: "02", 
    title: "Create Your Profile",
    description: "Tell us about yourself, your lifestyle, and what you're looking for in housing"
  },
  {
    number: "03",
    title: "Find Your Match",
    description: "Our smart algorithm connects you with compatible roommates and housing options"
  },
  {
    number: "04",
    title: "Connect Safely",
    description: "Message potential matches through our secure platform and arrange meetups"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-dark-text font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
            How It Works
          </h2>
          <p className="text-lg text-dark-text-muted max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
            Getting started is simple and secure. Here&apos;s how you can find your perfect housing match in just a few steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-hearth rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-hearth/20">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-nunito)' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                {step.title}
              </h3>
              <p className="text-dark-text-muted" style={{ fontFamily: 'var(--font-lora)' }}>
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-dark-border transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
