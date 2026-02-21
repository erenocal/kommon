const verificationSteps = [
  {
    step: "1",
    title: "Sign Up with .edu Email",
    description: "Create your account using your university-issued email address",
    icon: "mail",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600"
  },
  {
    step: "2", 
    title: "Verify Your Identity",
    description: "Click the verification link sent to your university email",
    icon: "shield-check",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600"
  },
  {
    step: "3",
    title: "Access Verified Community",
    description: "Connect with other verified students in a safe, trusted environment",
    icon: "users",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600"
  }
]

const targetUniversities = [
  "Columbia University",
  "New York University", 
  "Fordham University",
  "The New School",
  "Pace University",
  "CUNY Schools",
  "Barnard College",
  "Manhattan College"
]

export function UniversityPartnersSection() {
  return (
    <section id="universities" className="py-20 px-4 bg-gradient-to-b from-dark to-dark-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--dark-text) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto relative z-10">
        {/* How Verification Works */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-hearth uppercase tracking-wider px-4 py-2 bg-hearth/10 rounded-full" style={{ fontFamily: 'var(--font-nunito)' }}>
              Safety First
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark-text font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
            How .edu Verification Works
          </h2>
          <p className="text-lg md:text-xl text-dark-text-muted max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lora)' }}>
            Every user is verified through their university email, creating a trusted community of real students
          </p>
        </div>

        {/* Verification Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {verificationSteps.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 bg-dark-elevated rounded-2xl border border-dark-border hover:border-hearth/50 shadow-sm hover:shadow-xl hover:shadow-hearth/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-hearth text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md" style={{ fontFamily: 'var(--font-nunito)' }}>
                {item.step}
              </div>

              {/* Icon Circle */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md mt-4`}>
                <svg className={`w-8 h-8 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon === "mail" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )}
                  {item.icon === "shield-check" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  )}
                  {item.icon === "users" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  )}
                </svg>
              </div>

              <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-hearth transition-colors duration-300" style={{ fontFamily: 'var(--font-nunito)' }}>
                {item.title}
              </h3>
              <p className="text-dark-text-muted leading-relaxed" style={{ fontFamily: 'var(--font-lora)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Universities */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl text-dark-text font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
            Built for NYC University Students
          </h3>
          <p className="text-dark-text-muted mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
            Designed specifically for students at New York City&apos;s leading universities
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {targetUniversities.map((university, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-dark-elevated border border-dark-border rounded-full text-dark-text-muted hover:border-hearth hover:text-hearth transition-all duration-200 hover:shadow-md"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {university}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
