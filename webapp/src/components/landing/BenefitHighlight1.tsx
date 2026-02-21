'use client'

import { DollarSign, MapPin, Star } from 'lucide-react'

const mockStudentProfiles = [
  {
    name: "Sarah Chen",
    year: "Junior",
    university: "Columbia University",
    major: "Computer Science",
    rating: 4.9,
    initial: "S",
    color: "from-blue-500/10 to-blue-600/10",
    textColor: "text-blue-600",
    rent: "$1,300/month",
    location: "Upper West Side"
  },
  {
    name: "Marcus Johnson", 
    year: "Senior",
    university: "NYU",
    major: "Business",
    rating: 4.8,
    initial: "M",
    color: "from-purple-500/10 to-purple-600/10",
    textColor: "text-purple-600",
    rent: "$1,200/month",
    location: "East Village"
  },
  {
    name: "Emma Rodriguez",
    year: "Sophomore", 
    university: "Fordham University",
    major: "Psychology",
    rating: 5.0,
    initial: "E",
    color: "from-pink-500/10 to-pink-600/10",
    textColor: "text-pink-600",
    rent: "$950/month", 
    location: "Bronx"
  }
]

export function BenefitHighlight1() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#1A1F26' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #E8EAED 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-hearth uppercase tracking-wider px-4 py-2 bg-hearth/10 rounded-full" style={{ fontFamily: 'var(--font-nunito)' }}>
              Affordable Housing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
            Find Affordable Housing Through People Who&apos;ve Been There
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
            Connect with verified students who understand the local market and can help you find quality housing at student-friendly prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockStudentProfiles.map((student, index) => (
            <div
              key={index}
              className="group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ backgroundColor: '#242A33', borderWidth: '1px', borderColor: '#2D3540' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 106, 80, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(200, 106, 80, 0.1), 0 10px 10px -5px rgba(200, 106, 80, 0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2D3540'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-hearth/0 to-sage/0 group-hover:from-hearth/5 group-hover:to-sage/5 transition-all duration-300"></div>
              
              <div className="relative z-10 p-6">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${student.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <span className={`${student.textColor} font-bold text-xl`} style={{ fontFamily: 'var(--font-nunito)' }}>
                      {student.initial}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate group-hover:text-hearth transition-colors duration-300" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                      {student.name}
                    </h3>
                    <p className="text-sm truncate" style={{ color: '#9BA1A6' }}>{student.year} • {student.major}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)' }}>
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-bold" style={{ color: '#eab308' }}>{student.rating}</span>
                  </div>
                </div>

                {/* University Badge */}
                <div className="bg-gradient-to-r from-hearth/10 to-sage/10 rounded-xl p-3 mb-4 border border-hearth/20">
                  <p className="text-sm font-bold text-hearth text-center" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {student.university}
                  </p>
                </div>

                {/* Listing Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}>
                    <div className="flex items-center gap-2" style={{ color: '#9BA1A6' }}>
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-medium">Rent</span>
                    </div>
                    <span className="font-bold text-hearth text-lg">{student.rent}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}>
                    <div className="flex items-center gap-2" style={{ color: '#9BA1A6' }}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#E8EAED' }}>{student.location}</span>
                  </div>
                </div>

                {/* Message Button */}
                <button className="w-full bg-hearth hover:bg-hearth/90 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-hearth/20 hover:scale-[1.02]" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Message {student.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
