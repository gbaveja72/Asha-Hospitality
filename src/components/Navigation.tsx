import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Brand Expertise', href: '/brand-expertise' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isDark = isHome && !scrolled

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(10,22,40,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <nav
          className="flex items-center justify-between h-[var(--nav-height)] px-[var(--page-gutter)]"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <Link
            to="/"
            className="font-display text-[1.25rem] font-medium tracking-[0.02em] transition-colors duration-400"
            style={{ color: isDark ? '#FFFFFF' : '#FFFFFF' }}
          >
            Asha Hospitality
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative font-body text-[0.875rem] font-normal tracking-[0.04em] uppercase transition-opacity duration-300 hover:opacity-100"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                  const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement
                  if (underline) underline.style.transform = 'scaleX(1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement
                  if (underline) underline.style.transform = 'scaleX(0)'
                }}
              >
                {link.label}
                <span
                  className="nav-underline absolute bottom-[-4px] left-0 h-[1px] w-full origin-left transition-transform duration-300"
                  style={{ backgroundColor: 'var(--color-accent)', transform: 'scaleX(0)' }}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="font-body text-[0.875rem] font-normal tracking-[0.04em] uppercase px-5 py-2 rounded-sm transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} color="#FFFFFF" />
            ) : (
              <Menu size={24} color="#FFFFFF" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-display text-2xl tracking-wide"
              style={{
                color: '#FFFFFF',
                animation: `fadeIn 0.5s ease-out ${i * 0.1}s forwards`,
                opacity: 0,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </>
  )
}
