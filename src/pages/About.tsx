import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { num: '01', title: 'Precision', desc: 'We believe in the power of data-driven decisions. Every recommendation is grounded in analysis, not intuition.' },
  { num: '02', title: 'Partnership', desc: 'We work alongside owners and operators, not above them. Your success is our success.' },
  { num: '03', title: 'Integrity', desc: 'We deliver honest assessments and realistic expectations. No promises we can\'t keep.' },
]

function PageHero() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-[var(--space-xl)] px-[var(--page-gutter)]"
      style={{
        backgroundColor: 'var(--color-navy)',
        minHeight: '55vh',
        paddingTop: 'calc(var(--nav-height) + var(--space-xl))',
        paddingBottom: 'var(--space-xl)',
      }}
    >
      <div className="section-max w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[var(--space-xl)] items-center">
        <div>
          <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>ABOUT</p>
          <h1
            className="font-display mt-[var(--space-sm)]"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Asha Hospitality
          </h1>
          <p
            className="font-body font-light mt-[var(--space-sm)] max-w-[480px]"
            style={{
              fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            Strategic revenue management for owners who demand precision.
          </p>
        </div>
        <div className="overflow-hidden rounded-[var(--radius-lg)]">
          <img
            src="/images/about-portrait.jpg"
            alt="Rita Naido"
            className="w-full aspect-[3/4] object-cover"
            style={{ boxShadow: '0 16px 64px rgba(0,0,0,0.3)' }}
          />
        </div>
      </div>
    </section>
  )
}

function Story() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const children = ref.current.querySelectorAll('.story-animate')
    gsap.set(children, { opacity: 0, y: 30 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(children, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' })
      },
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)]" style={{ maxWidth: '800px' }}>
        <h2
          className="story-animate font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Why We Exist
        </h2>
        <div className="mt-[var(--space-md)] space-y-6">
          <p className="story-animate font-body font-light text-[0.9375rem] leading-[1.8]" style={{ color: 'var(--color-slate)' }}>
            Asha Hospitality was founded on a simple belief: select-service hotel owners deserve the same strategic rigor and analytical sophistication that luxury properties receive. Too often, smaller properties are underserved by generic consulting approaches that fail to account for the unique dynamics of select-service markets.
          </p>
          <p className="story-animate font-body font-light text-[0.9375rem] leading-[1.8]" style={{ color: 'var(--color-slate)' }}>
            We exist to close that gap. Our team brings deep expertise across Hilton, Marriott, IHG, Hyatt, and other major brand systems — combined with a hands-on approach that ensures strategies translate into real, measurable revenue growth.
          </p>
          <p className="story-animate font-body font-light text-[0.9375rem] leading-[1.8]" style={{ color: 'var(--color-slate)' }}>
            Every engagement begins with listening. We learn your market, your property, your ownership objectives. Then we build a revenue strategy tailored to your specific situation — not a template applied to your spreadsheet.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-lg)] mt-[var(--space-2xl)]">
          {values.map((v) => (
            <div key={v.num} className="story-animate">
              <span
                className="font-mono text-[2rem] block"
                style={{ color: 'var(--color-accent)', opacity: 0.4 }}
              >
                {v.num}
              </span>
              <h3 className="font-body font-medium text-[1.125rem] mt-2" style={{ color: 'var(--color-navy)' }}>
                {v.title}
              </h3>
              <p className="font-body font-light text-[0.9375rem] mt-1 leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Leadership() {
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

  return (
    <section style={{ backgroundColor: 'var(--color-sand)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[var(--space-xl)] items-center">
          <div className="overflow-hidden rounded-[var(--radius-lg)]">
            <img
              src="/images/about-portrait.jpg"
              alt="Rita Naido"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: '2rem',
                lineHeight: 1.2,
                color: 'var(--color-navy)',
              }}
            >
              Rita Naido
            </h2>
            <p
              className="font-body text-[0.875rem] uppercase tracking-[0.08em] mt-2"
              style={{ color: 'var(--color-slate)' }}
            >
              Founder & Revenue Strategist
            </p>
            <p
              className="font-body font-light mt-[var(--space-md)] leading-relaxed"
              style={{
                fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
                color: 'var(--color-slate)',
              }}
            >
              Rita Naido brings over a decade of hospitality revenue management experience across select-service portfolios. Her expertise spans Hilton, Marriott, IHG, and Hyatt brand systems, with a track record of consistently delivering double-digit revenue improvements for owner clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-[var(--space-md)]">
              <a
                href="mailto:naidorita@gmail.com"
                className="flex items-center gap-2 font-body text-[0.875rem] transition-colors duration-300"
                style={{ color: 'var(--color-slate)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-slate)' }}
              >
                <Mail size={16} />
                naidorita@gmail.com
              </a>
              <a
                href="tel:3255751954"
                className="flex items-center gap-2 font-body text-[0.875rem] transition-colors duration-300"
                style={{ color: 'var(--color-slate)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-slate)' }}
              >
                <Phone size={16} />
                325-575-1954
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section style={{ backgroundColor: 'var(--color-navy)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)] text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Partner with precision.
        </h2>
        <p
          className="font-body font-light mt-[var(--space-md)]"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Let's discuss how Asha Hospitality can elevate your property's revenue performance.
        </p>
        <div className="mt-[var(--space-lg)]">
          <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main>
      <PageHero />
      <Story />
      <Leadership />
      <CTASection />
    </main>
  )
}
