import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const featuredArticle = {
  category: 'MARKET ANALYSIS',
  title: 'The Select-Service Revenue Playbook: 2025 Outlook',
  excerpt: 'How supply growth, shifting demand patterns, and new distribution dynamics are reshaping revenue opportunities for select-service hotels across major markets.',
  date: 'March 2025',
  readTime: '8 min read',
}

const articles = [
  { category: 'REVENUE STRATEGY', title: 'When to Push Rate vs. Fill Rooms: A Decision Framework', excerpt: 'The critical choice every revenue manager faces — and how to make it with confidence.', date: 'Feb 2025', readTime: '5 min' },
  { category: 'BRAND ANALYSIS', title: 'Marriott vs. Hilton Select-Service: Revenue Positioning Compared', excerpt: 'How the two largest flags approach pricing, segmentation, and distribution differently.', date: 'Feb 2025', readTime: '6 min' },
  { category: 'PRICING', title: 'Dynamic Pricing Without the Complexity', excerpt: 'A practical guide to implementing effective dynamic pricing in select-service properties.', date: 'Jan 2025', readTime: '7 min' },
  { category: 'MARKET TRENDS', title: 'The OTA Relationship: Negotiation and Optimization', excerpt: 'How to approach OTA contracts, commissions, and parity with leverage and strategy.', date: 'Jan 2025', readTime: '5 min' },
  { category: 'FORECASTING', title: 'Building Reliable Demand Forecasts for Smaller Hotels', excerpt: 'Forecasting techniques that work with limited historical data and high market volatility.', date: 'Dec 2024', readTime: '6 min' },
  { category: 'OWNER GUIDE', title: 'Revenue Management ROI: What Owners Should Expect', excerpt: 'Setting realistic expectations for revenue management investment and timeline to results.', date: 'Dec 2024', readTime: '4 min' },
]

function PageHero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-[var(--page-gutter)]"
      style={{
        backgroundColor: 'var(--color-navy)',
        height: '45vh',
        minHeight: '360px',
      }}
    >
      <div className="section-max">
        <p className="text-label" style={{ color: 'var(--color-accent-muted)' }}>INSIGHTS</p>
        <h1
          className="font-display mt-[var(--space-sm)]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          Revenue Intelligence for Hotel Owners
        </h1>
        <p
          className="font-body font-light mt-[var(--space-sm)] max-w-[640px] mx-auto"
          style={{
            fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Practical perspectives on pricing strategy, market dynamics, and select-service performance.
        </p>
      </div>
    </section>
  )
}

function FeaturedArticle() {
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
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--space-xl)] items-center">
          <div className="lg:col-span-3 overflow-hidden rounded-[var(--radius-lg)]">
            <img
              src="/images/insights-feature.jpg"
              alt="Featured article"
              className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="text-label" style={{ color: 'var(--color-accent)' }}>{featuredArticle.category}</p>
            <h2
              className="font-display mt-[var(--space-sm)]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                color: 'var(--color-navy)',
              }}
            >
              {featuredArticle.title}
            </h2>
            <p
              className="font-body font-light mt-[var(--space-sm)] leading-relaxed"
              style={{ color: 'var(--color-slate)' }}
            >
              {featuredArticle.excerpt}
            </p>
            <p className="font-body font-light text-[0.75rem] mt-[var(--space-sm)]" style={{ color: 'var(--color-slate)' }}>
              {featuredArticle.date} · {featuredArticle.readTime}
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-body font-medium mt-[var(--space-sm)] group"
              style={{ color: 'var(--color-navy)' }}
            >
              Read Article
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticleGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('.article-card')
    gsap.set(cards, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(cards, { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' })
      },
    })
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }} className="pb-[var(--space-3xl)]">
      <div ref={ref} className="section-max px-[var(--page-gutter)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
        {articles.map((a) => (
          <div
            key={a.title}
            className="article-card rounded-[var(--radius-lg)] overflow-hidden transition-all duration-400"
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
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={`/images/services-${(articles.indexOf(a) % 6) + 1}.jpg`}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-[var(--space-md)]">
              <p className="text-label" style={{ color: 'var(--color-accent)' }}>{a.category}</p>
              <h3 className="font-body font-medium text-[1.0625rem] mt-2 line-clamp-2" style={{ color: 'var(--color-navy)' }}>
                {a.title}
              </h3>
              <p className="font-body font-light text-[0.8125rem] mt-2 line-clamp-3 leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {a.excerpt}
              </p>
              <p className="font-body font-light text-[0.75rem] mt-[var(--space-sm)] flex items-center gap-1" style={{ color: 'var(--color-slate)' }}>
                <Clock size={12} />
                {a.date} · {a.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function NewsletterCTA() {
  return (
    <section style={{ backgroundColor: 'var(--color-sand)' }} className="py-[var(--space-xl)]">
      <div className="section-max px-[var(--page-gutter)] text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3
          className="font-display"
          style={{
            fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
            lineHeight: 1.3,
            color: 'var(--color-navy)',
          }}
        >
          Stay Informed
        </h3>
        <p
          className="font-body font-light mt-[var(--space-sm)]"
          style={{ color: 'var(--color-slate)' }}
        >
          Monthly insights delivered to your inbox. No fluff — just practical revenue intelligence for hotel owners.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 mt-[var(--space-md)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-[var(--radius-sm)] font-body text-[0.9375rem] outline-none transition-all duration-300"
            style={{
              border: '1px solid var(--color-silver)',
              color: 'var(--color-navy)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)'
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,158,137,0.15)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-silver)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default function Insights() {
  return (
    <main>
      <PageHero />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterCTA />
    </main>
  )
}
