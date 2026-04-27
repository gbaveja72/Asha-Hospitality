import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-navy)' }}>
      <div
        className="px-[var(--page-gutter)]"
        style={{
          maxWidth: 'var(--section-max)',
          margin: '0 auto',
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-xl)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <Link
              to="/"
              className="font-display text-[1.25rem] font-medium tracking-[0.02em]"
              style={{ color: '#FFFFFF' }}
            >
              Asha Hospitality
            </Link>
            <p
              className="font-body text-[0.875rem] font-light mt-4 leading-relaxed"
              style={{ color: 'var(--color-silver)', lineHeight: 1.6 }}
            >
              Strategic revenue management for select-service hotels.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4
              className="font-body text-[0.75rem] font-normal uppercase tracking-[0.08em] mb-6"
              style={{ color: 'var(--color-silver)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Revenue Management',
                'Rate Strategy',
                'Competitive Intelligence',
                'Forecasting',
                'Distribution',
                'Reporting',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-body text-[0.8125rem] font-normal transition-colors duration-300"
                    style={{ color: 'var(--color-silver)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-silver)'
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4
              className="font-body text-[0.75rem] font-normal uppercase tracking-[0.08em] mb-6"
              style={{ color: 'var(--color-silver)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Brand Expertise', href: '/brand-expertise' },
                { label: 'Insights', href: '/insights' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-[0.8125rem] font-normal transition-colors duration-300"
                    style={{ color: 'var(--color-silver)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-silver)'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4
              className="font-body text-[0.75rem] font-normal uppercase tracking-[0.08em] mb-6"
              style={{ color: 'var(--color-silver)' }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'var(--color-silver)' }} />
                <span
                  className="font-body text-[0.8125rem] font-normal"
                  style={{ color: 'var(--color-silver)' }}
                >
                  325-575-1954
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--color-silver)' }} />
                <span
                  className="font-body text-[0.8125rem] font-normal"
                  style={{ color: 'var(--color-silver)' }}
                >
                  naidorita@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={14} style={{ color: 'var(--color-silver)' }} />
                <span
                  className="font-body text-[0.8125rem] font-normal"
                  style={{ color: 'var(--color-silver)' }}
                >
                  LinkedIn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(200,196,190,0.15)' }}
        >
          <p
            className="font-body text-[0.75rem] font-normal"
            style={{ color: 'var(--color-silver)' }}
          >
            &copy; 2025 Asha Hospitality. All rights reserved.
          </p>
          <p
            className="font-body text-[0.75rem] font-normal"
            style={{ color: 'var(--color-silver)' }}
          >
            Rita Naido, Revenue Strategist
          </p>
        </div>
      </div>
    </footer>
  )
}
