import { KommonCard, KommonCardContent } from '@/components/ui/kommon-card'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    university: "Stanford University",
    year: "Junior",
    text: "Kommon helped me find the perfect roommate who shares my study habits and values. The university verification made me feel safe from day one.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    university: "UC Berkeley",
    year: "Senior",
    text: "As an international student, I was nervous about finding housing. Kommon's community-first approach made the process so much easier and safer.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    university: "NYU",
    year: "Graduate Student",
    text: "The compatibility matching is incredible. I found roommates who actually understand my schedule and lifestyle. It's like having a built-in support system.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-dark-text font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
            What Students Are Saying
          </h2>
          <p className="text-lg text-dark-text-muted max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
            Join thousands of verified students who have found their perfect housing match
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <KommonCard key={testimonial.id} className="h-full bg-dark-elevated border-dark-border">
              <KommonCardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-sunlight fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-text-muted mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-dark-border pt-4">
                  <p className="font-semibold text-dark-text" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-dark-text-muted" style={{ fontFamily: 'var(--font-lora)' }}>
                    {testimonial.year} • {testimonial.university}
                  </p>
                </div>
              </KommonCardContent>
            </KommonCard>
          ))}
        </div>
      </div>
    </section>
  )
}
