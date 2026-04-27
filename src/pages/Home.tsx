import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoReveal from '../components/LogoReveal'
import { TrendingUp, BarChart3, Users, Globe, DollarSign, FileText, ArrowRight, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ─── Hero Section ─── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
      .to(subRef.current, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }, '-=0.6')
      .to(ctaRef.current?.children || [], { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.15 }, '-=0.5')
      .to(badgesRef.current, { opacity: 1, duration: 0.8 }, '-=0.3')

    return () => { tl.kill() }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndRef.current) {
        scrollIndRef.current.style.opacity = window.scrollY > 100 ? '0' : '1'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden" style={{ height: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.75) 60%, rgba(10,22,40,0.88) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-[var(--page-gutter)]" style={{ zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
        <h1
          ref={headlineRef}
          className="font-display text-white opacity-0"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            transform: 'translateY(60px)',
          }}
        >
          Revenue, Refined.
        </h1>

        <p
          ref={subRef}
          className="font-body font-light opacity-0 mt-6"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '640px',
            transform: 'translateY(40px)',
          }}
        >
          Strategic revenue management for select-service hotels across Hilton, Marriott, IHG, Hyatt, and other leading brands.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link to="/contact" className="btn-primary opacity-0" style={{ transform: 'translateY(30px)', filter: 'blur(4px)' }}>
            Book a Strategy Call
          </Link>
          <Link to="/services" className="btn-secondary opacity-0" style={{ transform: 'translateY(30px)', filter: 'blur(4px)' }}>
            Explore Services
          </Link>
        </div>
      </div>

      {/* Brand Badges */}
      <div
        ref={badgesRef}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 sm:gap-12 flex-wrap px-[var(--page-gutter)] opacity-0"
        style={{ zIndex: 2, paddingBottom: 'var(--space-xl)' }}
      >
        {['Hilton', 'Marriott', 'IHG', 'Hyatt', 'Other Flags'].map((brand, i) => (
          <span key={brand} className="flex items-center gap-3 sm:gap-4">
            {i > 0 && (
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '4px' }}>
                ◆
              </span>
            )}
            <span
              className="font-body text-[0.75rem] uppercase tracking-[0.1em]"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {brand}
            </span>
          </span>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ zIndex: 2 }}
      >
        <div className="relative w-[1px] h-10" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.6)',
              animation: 'scrollBounce 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
      </div>

      <style>{`
        @keyframes scrollBounce {
          0% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, 28px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

/* ─── Credibility Strip ─── */
function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const logos = ref.current.querySelectorAll('.cred-logo')
    gsap.set(logos, { opacity: 0, y: 20 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(logos, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' })
      },
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-lg)]">
      <div className="section-max px-[var(--page-gutter)] text-center">
        <p
          className="font-body text-[0.75rem] uppercase tracking-[0.12em] mb-[var(--space-md)]"
          style={{ color: 'var(--color-slate)' }}
        >
          Trusted by Select-Service Owners and Operators
        </p>
        <div ref={ref} className="flex items-center justify-center gap-8 sm:gap-16 flex-wrap">
          {['Property Group A', 'Hospitality Partners', 'SelectStay Group', 'Capital Hotels', 'North Star Hospitality', 'Atlas Lodging'].map((name) => (
            <div
              key={name}
              className="cred-logo font-body text-[0.8125rem] uppercase tracking-[0.08em] transition-all duration-400"
              style={{
                color: 'var(--color-slate)',
                opacity: 0.5,
                filter: 'grayscale(100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8'
                e.currentTarget.style.filter = 'grayscale(0%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
                e.currentTarget.style.filter = 'grayscale(100%)'
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── What We Do ─── */
function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.service-card')
    gsap.set(items, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(items, { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' })
      },
    })
  }, [])

  const services = [
    { icon: DollarSign, title: 'Pricing Strategy', desc: 'Dynamic rate positioning calibrated to demand patterns, seasonality, and competitive landscape.' },
    { icon: TrendingUp, title: 'Demand Forecasting', desc: 'Predictive analytics that anticipate booking velocity and optimize inventory allocation.' },
    { icon: Users, title: 'Competitive Set Analysis', desc: 'Real-time benchmarking against your competitive set to identify rate opportunities.' },
    { icon: Globe, title: 'Channel Mix Optimization', desc: 'Strategic balance between direct bookings, OTAs, and wholesale channels.' },
    { icon: BarChart3, title: 'Rate Positioning', desc: 'Brand-compliant pricing discipline that maximizes RevPAR without compromising market position.' },
    { icon: FileText, title: 'Revenue Reporting', desc: 'Executive dashboards and owner reports that translate data into actionable intelligence.' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)]">
        <p className="text-label" style={{ color: 'var(--color-accent)' }}>SERVICES</p>
        <h2
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Precision in Every Pricing Decision
        </h2>
        <p
          className="font-body font-light mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'var(--color-slate)',
            maxWidth: '560px',
          }}
        >
          Comprehensive revenue management services tailored to the unique dynamics of select-service hotels.
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)] mt-[var(--space-xl)]">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card p-[var(--space-lg)] rounded-[var(--radius-lg)] transition-all duration-400 cursor-default"
              style={{
                backgroundColor: 'var(--color-sand-light)',
                border: '1px solid var(--color-silver-light)',
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
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(123,158,137,0.1)' }}
              >
                <s.icon size={16} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 className="font-body font-medium text-[1.125rem] mt-[var(--space-sm)]" style={{ color: 'var(--color-navy)' }}>
                {s.title}
              </h3>
              <p className="font-body font-light text-[0.9375rem] mt-[var(--space-xs)] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Asha ─── */
function WhyAsha() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.why-item')
    gsap.set(items, { opacity: 0, x: 30 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(items, { opacity: 1, x: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
      },
    })
  }, [])

  const features = [
    { num: '01', title: 'Boutique Attention', desc: 'No two properties are identical. We tailor every strategy to your specific market, brand standards, and owner objectives.' },
    { num: '02', title: 'Data-Driven Decisions', desc: 'Every recommendation is grounded in market data, historical performance, and predictive modeling.' },
    { num: '03', title: 'Brand-Aware Strategy', desc: 'Deep expertise in Hilton, Marriott, IHG, and Hyatt standards ensures compliance with pricing and positioning guidelines.' },
    { num: '04', title: 'Owner-Focused Communication', desc: 'Clear, concise reporting designed for busy owners who need actionable insights, not data overload.' },
    { num: '05', title: 'Practical Execution', desc: 'We implement changes, not just recommend them. Our hands-on approach ensures strategies translate to real results.' },
  ]

  return (
    <section className="gradient-cream-sand py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)] grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)] items-start">
        <div>
          <p className="text-label" style={{ color: 'var(--color-accent)' }}>WHY ASHA</p>
          <h2
            className="font-display mt-[var(--space-sm)]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: 'var(--color-navy)',
            }}
          >
            Boutique Attention. Data-Driven Results.
          </h2>
          <p
            className="font-body font-light mt-[var(--space-md)]"
            style={{
              fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--color-slate)',
            }}
          >
            We partner with owners who expect more than standard consulting. Our approach combines meticulous attention to your property's unique market position with analytical rigor that drives measurable revenue growth.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-body font-medium mt-[var(--space-md)] group"
            style={{ color: 'var(--color-navy)' }}
          >
            Learn About Our Approach
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={ref} className="flex flex-col gap-[var(--space-md)]">
          {features.map((f, i) => (
            <div key={f.num} className="why-item">
              {i > 0 && <div className="h-[1px] mb-[var(--space-md)]" style={{ backgroundColor: 'var(--color-silver-light)' }} />}
              <div className="flex gap-4">
                <span className="font-mono text-[0.75rem] mt-1" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
                  {f.num}
                </span>
                <div>
                  <h3 className="font-body font-medium text-[1.125rem]" style={{ color: 'var(--color-navy)' }}>
                    {f.title}
                  </h3>
                  <p className="font-body font-light text-[0.9375rem] mt-1 leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Brand Expertise ─── */
function BrandExpertise() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('.brand-card')
    gsap.set(cards, { opacity: 0, scale: 0.95 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(cards, { opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out' })
      },
    })
  }, [])

  const brands = [
    { name: 'Hilton', desc: 'Hampton, Garden Inn, Tru, Home2, Spark' },
    { name: 'Marriott', desc: 'Fairfield, Courtyard, Residence Inn, SpringHill, TownePlace' },
    { name: 'IHG', desc: 'Holiday Inn Express, Candlewood, Staybridge, Avid' },
    { name: 'Hyatt', desc: 'Hyatt Place, Hyatt House, Caption' },
    { name: 'Other Flags', desc: 'Choice, Wyndham, Best Western, Extended Stay' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-navy)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)]">
        <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>BRAND EXPERTISE</p>
        <h2
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Deep Fluency Across Every Major Flag
        </h2>
        <p
          className="font-body font-light mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '600px',
          }}
        >
          From Hampton Inn to Hyatt Place, we understand the operating reality, brand standards, and revenue systems of select-service properties.
        </p>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[var(--space-sm)] mt-[var(--space-xl)]">
          {brands.map((b) => (
            <Link
              key={b.name}
              to="/brand-expertise"
              className="brand-card flex flex-col justify-between p-[var(--space-md)] rounded-[var(--radius-md)] transition-all duration-400 aspect-[1/1.1]"
              style={{
                backgroundColor: 'var(--color-navy-light)',
                border: '1px solid rgba(200,196,190,0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,196,190,0.25)'
                e.currentTarget.style.backgroundColor = 'rgba(17,29,50,0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,196,190,0.12)'
                e.currentTarget.style.backgroundColor = 'var(--color-navy-light)'
              }}
            >
              <div>
                <h3 className="font-display text-[1.5rem]" style={{ color: '#FFFFFF' }}>{b.name}</h3>
                <p className="font-body font-light text-[0.8125rem] mt-[var(--space-xs)]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {b.desc}
                </p>
              </div>
              <span className="font-body text-[0.75rem] transition-colors duration-300" style={{ color: 'var(--color-accent-muted)' }}>
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ─── */
function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !lineRef.current) return
    const steps = ref.current.querySelectorAll('.process-step')
    const circles = ref.current.querySelectorAll('.process-circle')

    gsap.set(steps, { opacity: 0, y: 15 })
    gsap.set(circles, { backgroundColor: 'transparent', color: 'var(--color-accent)' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 70%',
        once: true,
      },
    })

    tl.to(lineRef.current, { scaleX: 1, duration: 1.2, ease: 'power2.inOut' })

    circles.forEach((circle, i) => {
      tl.to(circle, {
        backgroundColor: 'var(--color-accent)',
        color: '#FFFFFF',
        duration: 0.4,
        ease: 'power2.out',
      }, `-=${1.2 - (i * 0.3)}`)
      tl.to(steps[i], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.2')
    })

    return () => { tl.kill() }
  }, [])

  const steps = [
    { num: '1', title: 'Audit', desc: 'Comprehensive analysis of current performance, competitive position, and market opportunity.' },
    { num: '2', title: 'Strategy', desc: 'Custom revenue plan calibrated to your brand, market, and ownership objectives.' },
    { num: '3', title: 'Execution', desc: 'Hands-on implementation of pricing, channel, and distribution changes.' },
    { num: '4', title: 'Optimization', desc: 'Continuous monitoring, testing, and refinement to sustain performance gains.' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)]">
        <p className="text-label" style={{ color: 'var(--color-accent)' }}>OUR PROCESS</p>
        <h2
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Four Steps to Revenue Excellence
        </h2>

        <div ref={ref} className="relative mt-[var(--space-xl)]">
          {/* Connecting Line - Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-6 left-[12.5%] w-[75%] h-[1px] origin-left"
            style={{
              backgroundColor: 'var(--color-silver)',
              transform: 'scaleX(0)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)]">
            {steps.map((s) => (
              <div key={s.num} className="process-step flex flex-col items-center text-center">
                <div
                  className="process-circle w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-400"
                  style={{
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'transparent',
                  }}
                >
                  <span className="font-mono text-[1rem]" style={{ color: 'var(--color-accent)' }}>{s.num}</span>
                </div>
                <h3 className="font-body font-medium text-[1.125rem] mt-[var(--space-md)]" style={{ color: 'var(--color-navy)' }}>
                  {s.title}
                </h3>
                <p className="font-body font-light text-[0.8125rem] mt-[var(--space-xs)] leading-relaxed max-w-[220px]" style={{ color: 'var(--color-slate)' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Results ─── */
function Results() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('.stat-card')
    gsap.set(cards, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(cards, { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out' })
        // Counter animation
        cards.forEach((card) => {
          const numEl = card.querySelector('.stat-number') as HTMLElement
          if (!numEl) return
          const final = parseFloat(numEl.dataset.value || '0')
          const prefix = numEl.dataset.prefix || ''
          const suffix = numEl.dataset.suffix || ''
          const obj = { val: 0 }
          gsap.to(obj, {
            val: final,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
            onUpdate: () => {
              numEl.textContent = prefix + Math.round(obj.val) + suffix
            },
          })
        })
      },
    })
  }, [])

  const stats = [
    { value: 18, prefix: '', suffix: '%', label: 'Average Revenue Growth', context: 'Typical 12-month improvement for new client properties' },
    { value: 12, prefix: '', suffix: '', label: 'Points Occupancy Gain', context: 'Average increase in occupancy index within first 6 months' },
    { value: 22, prefix: '$', suffix: '', label: 'ADR Improvement', context: 'Average daily rate increase achieved through strategic positioning' },
    { value: 24, prefix: '', suffix: '%', label: 'RevPAR Optimization', context: 'Revenue per available room improvement year-over-year' },
    { value: 35, prefix: '', suffix: '%', label: 'Direct Booking Lift', context: 'Reduction in OTA dependency through channel mix optimization' },
    { value: 6, prefix: '', suffix: 'x', label: 'ROI Multiple', context: 'Average return on revenue management investment' },
  ]

  return (
    <section className="gradient-sand-cream py-[var(--space-3xl)]">
      <div className="section-max px-[var(--page-gutter)]">
        <p className="text-label" style={{ color: 'var(--color-accent)' }}>RESULTS</p>
        <h2
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--color-navy)',
          }}
        >
          Measurable Performance Gains
        </h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] mt-[var(--space-xl)]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-card text-center p-[var(--space-lg)] rounded-[var(--radius-lg)] transition-all duration-400"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-soft)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="stat-number font-mono"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-navy)',
                  }}
                  data-value={s.value}
                  data-prefix={s.prefix}
                  data-suffix={s.suffix}
                >
                  {s.prefix}0{s.suffix}
                </span>
              </div>
              <p className="font-body text-[0.8125rem] uppercase tracking-[0.08em] mt-[var(--space-xs)]" style={{ color: 'var(--color-slate)' }}>
                {s.label}
              </p>
              <div className="h-[1px] my-[var(--space-sm)]" style={{ backgroundColor: 'var(--color-silver-light)' }} />
              <p className="font-body font-light text-[0.75rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {s.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Banner ─── */
function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const children = ref.current.children
    gsap.set(children, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(children, { opacity: 1, y: 0, stagger: 0.2, duration: 1.0, ease: 'power3.out' })
      },
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-navy)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)] text-center" style={{ maxWidth: '700px' }}>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Let's refine your revenue strategy.
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
        <p className="font-body font-light text-[0.875rem] mt-[var(--space-sm)]" style={{ color: 'var(--color-silver)' }}>
          Or call 325-575-1954
        </p>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <main>
      <LogoReveal />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        <CredibilityStrip />
        <WhatWeDo />
        <WhyAsha />
        <BrandExpertise />
        <Process />
        <Results />
        <CTABanner />
      </div>
    </main>
  )
}
