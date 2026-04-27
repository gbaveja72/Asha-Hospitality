import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, Linkedin, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function PageHero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-[var(--page-gutter)]"
      style={{
        backgroundColor: 'var(--color-navy)',
        height: '40vh',
        minHeight: '320px',
      }}
    >
      <div className="section-max">
        <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>CONTACT</p>
        <h1
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Let's Discuss Your Property
        </h1>
        <p
          className="font-body font-light mt-[var(--space-sm)] max-w-[560px] mx-auto"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Schedule a confidential consultation to explore how Asha Hospitality can optimize your revenue performance.
        </p>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    brand: '',
    market: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would go here
    alert('Thank you for your inquiry. We will contact you shortly.')
  }

  const inputClasses = "w-full px-4 py-3 rounded-[var(--radius-sm)] font-body text-[0.9375rem] outline-none transition-all duration-300 bg-transparent"
  const labelClasses = "block font-body text-[0.75rem] uppercase tracking-[0.06em] mb-[0.375rem]"

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)] grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[var(--space-xl)]">
        {/* Form */}
        <div
          className="p-[var(--space-xl)] rounded-[var(--radius-lg)]"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-[var(--space-md)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-md)]">
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Company / Property</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your property name"
                  required
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-md)]">
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Hotel Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <option value="">Select brand</option>
                  <option value="hilton">Hilton</option>
                  <option value="marriott">Marriott</option>
                  <option value="ihg">IHG</option>
                  <option value="hyatt">Hyatt</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Market / Location</label>
                <input
                  type="text"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-md)]">
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={inputClasses}
                  style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-silver)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses} style={{ color: 'var(--color-slate)' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your property and revenue goals..."
                rows={4}
                className={inputClasses}
                style={{ border: '1px solid var(--color-silver)', color: 'var(--color-navy)', resize: 'vertical' }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-silver)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              style={{ padding: '1rem', fontSize: '0.875rem', letterSpacing: '0.02em' }}
            >
              Schedule a Confidential Consultation
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-[var(--space-lg)]">
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                lineHeight: 1.3,
                color: 'var(--color-navy)',
              }}
            >
              Direct Contact
            </h3>
            <div className="mt-[var(--space-md)] space-y-3">
              <a
                href="tel:3255751954"
                className="flex items-center gap-3 font-body text-[1.125rem] transition-colors duration-300"
                style={{ color: 'var(--color-navy)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-navy)' }}
              >
                <Phone size={20} />
                325-575-1954
              </a>
              <a
                href="mailto:naidorita@gmail.com"
                className="flex items-center gap-3 font-body text-[1.125rem] transition-colors duration-300"
                style={{ color: 'var(--color-navy)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-navy)' }}
              >
                <Mail size={20} />
                naidorita@gmail.com
              </a>
            </div>
            <p className="font-body font-light text-[0.9375rem] mt-[var(--space-sm)]" style={{ color: 'var(--color-slate)' }}>
              Monday–Friday, 9:00 AM – 6:00 PM CST
            </p>
          </div>

          <div>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                lineHeight: 1.3,
                color: 'var(--color-navy)',
              }}
            >
              Location
            </h3>
            <p className="font-body font-light text-[0.9375rem] mt-[var(--space-sm)] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Serving select-service hotel owners nationwide
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body text-[0.9375rem] transition-colors duration-300"
              style={{ color: 'var(--color-slate)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-slate)' }}
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.set(ref.current, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(ref.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      },
    })
  }, [])

  const faqs = [
    {
      q: 'What types of hotels do you work with?',
      a: 'We specialize in select-service hotels — Hampton Inn, Fairfield, Holiday Inn Express, Hyatt Place, and similar brands. We work with single properties and small portfolios.',
    },
    {
      q: 'How quickly can we expect to see results?',
      a: 'Most clients see measurable improvements within 60-90 days. Full strategy implementation and optimization typically takes 6 months for maximum impact.',
    },
    {
      q: 'Do you work with specific brand systems?',
      a: 'Yes. We are fluent in Hilton OnQ, Marriott OneYield, IHG Concerto, and Hyatt systems. We navigate brand platforms seamlessly.',
    },
    {
      q: 'What is your fee structure?',
      a: 'We offer both monthly retainer and performance-based arrangements. Fees are scaled to property size and complexity. Contact us for a customized proposal.',
    },
    {
      q: 'Can you work with our existing management company?',
      a: 'Absolutely. We frequently partner with third-party management companies, providing revenue expertise that complements their operational focus.',
    },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-sand)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)]" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Common Questions
        </h2>
        <div className="mt-[var(--space-xl)] space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-t"
              style={{ borderColor: 'var(--color-silver-light)' }}
            >
              <button
                className="w-full flex items-center justify-between py-[var(--space-md)] text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-body font-medium text-[1.0625rem] pr-4" style={{ color: 'var(--color-navy)' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--color-accent)',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  className="font-body font-light text-[0.9375rem] pb-[var(--space-md)] leading-relaxed"
                  style={{ color: 'var(--color-slate)' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: 'var(--color-silver-light)' }} />
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <main>
      <PageHero />
      <ContactForm />
      <FAQ />
    </main>
  )
}
