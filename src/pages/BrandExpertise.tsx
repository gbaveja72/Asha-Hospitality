import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Target, Users, DollarSign, FileBarChart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const expertiseCards = [
  { icon: Shield, title: 'Brand Standards', desc: 'Deep knowledge of Hilton, Marriott, IHG, Hyatt, and other major brand pricing and positioning standards. We ensure every strategy aligns with franchise requirements.' },
  { icon: Target, title: 'Market Positioning', desc: 'Expertise in how each brand tier should position within a market. We prevent cannibalization and protect rate integrity across your portfolio.' },
  { icon: Users, title: 'Segmentation Strategy', desc: 'Sophisticated understanding of brand-specific market segments — transient, corporate, group, leisure — and how to optimize mix.' },
  { icon: DollarSign, title: 'Brand-Compliant Pricing', desc: 'Pricing discipline that respects rate parity, BAR structures, and fenced rate requirements while still maximizing revenue.' },
  { icon: FileBarChart, title: 'Owner Reporting', desc: 'Reporting formats and cadences tailored to each brand\'s owner expectations and PIP requirements.' },
]

const brandDetails = [
  {
    name: 'Hilton',
    subtitle: 'Select-Service Portfolio',
    properties: [
      { name: 'Hampton Inn', desc: 'The flagship select-service brand. We optimize Hampton\'s consistent quality promise with dynamic pricing.' },
      { name: 'Garden Inn', desc: 'Balancing business and leisure demand with sophisticated rate positioning.' },
      { name: 'Tru', desc: 'Capturing the modern traveler through competitive rate architecture in urban markets.' },
      { name: 'Home2', desc: 'Extended-stay revenue optimization with length-of-stay pricing expertise.' },
      { name: 'Spark', desc: 'New-construction value positioning with aggressive market penetration strategies.' },
    ],
  },
  {
    name: 'Marriott',
    subtitle: 'Select-Service Portfolio',
    properties: [
      { name: 'Fairfield', desc: 'Consistent, reliable revenue management for Marriott\'s most distributed brand.' },
      { name: 'Courtyard', desc: 'Business-transient focus with group and corporate segmentation expertise.' },
      { name: 'Residence Inn', desc: 'Extended-stay revenue optimization and weekly rate positioning.' },
      { name: 'SpringHill', desc: 'Modern select-service positioning with competitive rate strategies.' },
      { name: 'TownePlace', desc: 'Long-stay revenue management with suite-oriented pricing models.' },
    ],
  },
  {
    name: 'IHG',
    subtitle: 'Select-Service Portfolio',
    properties: [
      { name: 'Holiday Inn Express', desc: 'Brand-standard revenue management for IHG\'s largest select-service flag.' },
      { name: 'Candlewood', desc: 'Extended-stay expertise with kitchenette-premium rate positioning.' },
      { name: 'Staybridge', desc: 'Suite-based revenue optimization for the extended-stay segment.' },
      { name: 'Avid', desc: 'Value-positioned new-build strategy for emerging markets.' },
    ],
  },
  {
    name: 'Hyatt',
    subtitle: 'Select-Service Portfolio',
    properties: [
      { name: 'Hyatt Place', desc: 'Upscale select-service positioning with premium rate strategies.' },
      { name: 'Hyatt House', desc: 'Extended-stay with kitchen suites, optimized for longer stays.' },
      { name: 'Caption', desc: 'Lifestyle select-service with lifestyle-brand pricing dynamics.' },
    ],
  },
]

function PageHero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-[var(--page-gutter)]"
      style={{
        backgroundColor: 'var(--color-navy)',
        height: '50vh',
        minHeight: '400px',
      }}
    >
      <div className="section-max">
        <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>EXPERTISE</p>
        <h1
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Brand-Compliant Revenue Excellence
        </h1>
        <p
          className="font-body font-light mt-[var(--space-sm)] max-w-[640px] mx-auto"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          We understand the operating reality of major select-service brands — from standards and systems to owner expectations and market positioning.
        </p>
      </div>
    </section>
  )
}

function Overview() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.exp-card')
    gsap.set(items, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(items, { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
      },
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)]">
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Why Brand Expertise Matters
        </h2>
        <p
          className="font-body font-light mt-[var(--space-sm)] leading-relaxed"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            color: 'var(--color-slate)',
            maxWidth: '720px',
          }}
        >
          Each major flag has unique pricing protocols, distribution rules, and reporting requirements. Revenue strategies that ignore these constraints create compliance risk and missed opportunities. We build strategies that thrive within — not around — brand guidelines.
        </p>

        <div ref={ref} className="flex flex-col gap-[var(--space-lg)] mt-[var(--space-xl)]">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="exp-card grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[var(--space-md)] p-[var(--space-lg)] rounded-[var(--radius-lg)] transition-all duration-400"
              style={{
                backgroundColor: 'var(--color-sand-light)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(123,158,137,0.1)' }}
                >
                  <card.icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="font-body font-medium text-[1.125rem]" style={{ color: 'var(--color-navy)' }}>
                  {card.title}
                </h3>
              </div>
              <p className="font-body font-light text-[0.9375rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandDetails() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const blocks = ref.current.querySelectorAll('.brand-block')
    blocks.forEach((block) => {
      gsap.set(block, { opacity: 0, y: 50 })
      ScrollTrigger.create({
        trigger: block,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(block, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        },
      })
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-sand)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)] space-y-[var(--space-3xl)]">
        {brandDetails.map((brand) => (
          <div key={brand.name} className="brand-block">
            <div className="mb-[var(--space-lg)]">
              <h2
                className="font-display"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: 1.2,
                  color: 'var(--color-navy)',
                }}
              >
                {brand.name}
              </h2>
              <p
                className="font-body text-[0.875rem] uppercase tracking-[0.08em] mt-1"
                style={{ color: 'var(--color-slate)' }}
              >
                {brand.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
              {brand.properties.map((prop) => (
                <div
                  key={prop.name}
                  className="p-[var(--space-md)] rounded-[var(--radius-md)] transition-all duration-400"
                  style={{ backgroundColor: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <h4 className="font-body font-medium text-[1rem]" style={{ color: 'var(--color-navy)' }}>
                    {prop.name}
                  </h4>
                  <p className="font-body font-light text-[0.8125rem] mt-2 leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          Let's discuss your brand strategy.
        </h2>
        <p
          className="font-body font-light mt-[var(--space-md)]"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Every brand has unique requirements. We build revenue strategies that respect and leverage them.
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

export default function BrandExpertise() {
  return (
    <main>
      <PageHero />
      <Overview />
      <BrandDetails />
      <CTASection />
    </main>
  )
}
