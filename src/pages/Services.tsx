import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Revenue Management',
    image: '/images/services-1.jpg',
    desc: 'End-to-end revenue optimization for select-service properties. We manage pricing, inventory, and distribution to maximize RevPAR while maintaining brand compliance.',
    bullets: ['Daily rate calibration', 'Inventory yield management', 'Channel parity monitoring', 'Revenue strategy meetings'],
  },
  {
    title: 'Rate Strategy',
    image: '/images/services-2.jpg',
    desc: 'Precision pricing that captures demand at every level. Our rate strategies balance occupancy goals with ADR targets to optimize total revenue.',
    bullets: ['Dynamic pricing models', 'Seasonal rate architecture', 'Length-of-stay optimization', 'Last-minute/fenced rate management'],
  },
  {
    title: 'Competitive Set Intelligence',
    image: '/images/services-3.jpg',
    desc: 'Know your market position in real time. We monitor your competitive set\'s pricing, positioning, and availability to identify opportunities and threats.',
    bullets: ['Real-time comp set tracking', 'Rate shop analysis', 'Market share reporting', 'Positioning recommendations'],
  },
  {
    title: 'Forecasting and Budget Support',
    image: '/images/services-4.jpg',
    desc: 'Data-driven forecasting that informs smarter planning. We provide occupancy, ADR, and RevPAR projections to support ownership budgeting and capital planning.',
    bullets: ['12-month rolling forecasts', 'Budget variance analysis', 'Demand pattern identification', 'Scenario modeling'],
  },
  {
    title: 'Distribution Strategy',
    image: '/images/services-5.jpg',
    desc: 'Optimize your channel mix for maximum profitability. We balance direct bookings with OTA and wholesale relationships to reduce acquisition costs.',
    bullets: ['OTA contract optimization', 'Direct booking incentives', 'Wholesale channel management', 'Metasearch positioning'],
  },
  {
    title: 'Reporting and Ownership Dashboards',
    image: '/images/services-6.jpg',
    desc: 'Executive-level visibility into property performance. Custom dashboards deliver the metrics owners need without the noise.',
    bullets: ['Owner-ready monthly reports', 'RevPAR index tracking', 'Pace and pick-up analysis', 'Market trend summaries'],
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
        <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>SERVICES</p>
        <h1
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Revenue Management Services
        </h1>
        <p
          className="font-body font-light mt-[var(--space-sm)] max-w-[640px] mx-auto"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Comprehensive solutions designed for the operational reality of select-service hotels.
        </p>
      </div>
    </section>
  )
}

function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const blocks = ref.current.querySelectorAll('.service-block')
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
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)]">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="service-block"
          >
            {i > 0 && (
              <div className="h-[1px] my-[var(--space-2xl)]" style={{ backgroundColor: 'var(--color-silver-light)' }} />
            )}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)] items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden rounded-[var(--radius-lg)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-label" style={{ color: 'var(--color-accent)' }}>SERVICE</p>
                <h2
                  className="font-display mt-[var(--space-sm)]"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-navy)',
                  }}
                >
                  {s.title}
                </h2>
                <p
                  className="font-body font-light mt-[var(--space-sm)] leading-relaxed"
                  style={{ color: 'var(--color-slate)', maxWidth: '480px' }}
                >
                  {s.desc}
                </p>
                <ul className="mt-[var(--space-md)] space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="font-body text-[0.9375rem]" style={{ color: 'var(--color-slate)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-body font-medium mt-[var(--space-md)] group"
                  style={{ color: 'var(--color-navy)' }}
                >
                  Learn More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
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
          Ready to optimize your property's revenue?
        </h2>
        <p
          className="font-body font-light mt-[var(--space-md)]"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Schedule a confidential consultation to discuss your property's revenue potential.
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

export default function Services() {
  return (
    <main>
      <PageHero />
      <ServicesGrid />
      <CTASection />
    </main>
  )
}
