'use client'

import { Video, CheckCircle, Calendar, Shield, Mic, Video as VideoIcon, PhoneOff } from 'lucide-react'

export function BenefitHighlight3() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1A1F26, #0F1419)' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #E8EAED 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-hearth uppercase tracking-wider px-4 py-2 bg-hearth/10 rounded-full" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Remote Viewing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                Lock Down That Apartment Before You Move
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                Don&apos;t get stuck in expensive temporary housing. Video chat with potential roommates and landlords to secure your perfect place before you even arrive on campus.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: '#242A33', borderWidth: '1px', borderColor: '#2D3540' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 106, 80, 0.3)'
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(200, 106, 80, 0.1), 0 2px 4px -1px rgba(200, 106, 80, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D3540'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))' }}>
                  <Video className="w-6 h-6" style={{ color: '#60a5fa' }} />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg transition-colors duration-300" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Virtual Tours & Meetings
                  </h3>
                  <p className="leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Get a real feel for the space and meet your potential roommates through video calls
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: '#242A33', borderWidth: '1px', borderColor: '#2D3540' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 106, 80, 0.3)'
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(200, 106, 80, 0.1), 0 2px 4px -1px rgba(200, 106, 80, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D3540'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))' }}>
                  <Shield className="w-6 h-6" style={{ color: '#4ade80' }} />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg transition-colors duration-300" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Secure Before Arrival
                  </h3>
                  <p className="leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Sign leases and make arrangements remotely with verified student hosts
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: '#242A33', borderWidth: '1px', borderColor: '#2D3540' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 106, 80, 0.3)'
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(200, 106, 80, 0.1), 0 2px 4px -1px rgba(200, 106, 80, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D3540'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1))' }}>
                  <Calendar className="w-6 h-6" style={{ color: '#c084fc' }} />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg transition-colors duration-300" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Avoid Temporary Housing
                  </h3>
                  <p className="leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Skip expensive hotels and short-term rentals by having your place ready day one
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Chat Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-hearth/10 to-sage/10 rounded-2xl p-8 shadow-lg">
              {/* Mock Video Chat Interface */}
              <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: '#242A33', borderWidth: '1px', borderColor: '#2D3540' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5" style={{ color: '#C86A50' }} />
                    <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>Video Call</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                </div>
                
                {/* Mock Video Frames */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl aspect-square flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(120, 80, 60, 0.3) 0%, rgba(80, 60, 50, 0.2) 100%)' }}>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, rgba(200, 106, 80, 0.4), rgba(200, 106, 80, 0.2))' }}>
                        <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#C86A50' }}>Y</span>
                      </div>
                      <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>You</p>
                      <p className="text-xs" style={{ color: '#9BA1A6' }}>Incoming Student</p>
                    </div>
                  </div>
                  <div className="rounded-xl aspect-square flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(100, 110, 100, 0.3) 0%, rgba(70, 80, 70, 0.2) 100%)' }}>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, rgba(163, 177, 162, 0.4), rgba(163, 177, 162, 0.2))' }}>
                        <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#A3B1A2' }}>S</span>
                      </div>
                      <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>Sarah</p>
                      <p className="text-xs" style={{ color: '#9BA1A6' }}>Current Tenant</p>
                    </div>
                  </div>
                </div>
                
                {/* Mock Chat Message */}
                <div className="rounded-xl p-4 text-left mb-6" style={{ background: 'linear-gradient(to right, rgba(200, 106, 80, 0.1), rgba(163, 177, 162, 0.1))', borderWidth: '1px', borderColor: 'rgba(200, 106, 80, 0.2)' }}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                    <div>
                      <p className="text-sm mb-2 leading-relaxed" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                        &quot;The room gets great natural light and the building is super safe! I&apos;ve been here for 2 years.&quot;
                      </p>
                      <p className="text-xs font-medium" style={{ color: '#9BA1A6' }}>Sarah Chen • Columbia University</p>
                    </div>
                  </div>
                </div>
                
                {/* Mock Call Controls */}
                <div className="flex justify-center gap-4">
                  <button className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm" style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(163, 177, 162, 0.2)'
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1A1F26'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <Mic className="w-5 h-5" style={{ color: '#9BA1A6' }} />
                  </button>
                  <button className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm" style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(163, 177, 162, 0.2)'
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1A1F26'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <VideoIcon className="w-5 h-5" style={{ color: '#9BA1A6' }} />
                  </button>
                  <button className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: '1px', borderColor: 'rgba(239, 68, 68, 0.2)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)'
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <PhoneOff className="w-5 h-5" style={{ color: '#ef4444' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
