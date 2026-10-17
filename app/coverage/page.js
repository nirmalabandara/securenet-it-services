'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';
import Toast from '@/components/Toast';
import Icon from '@/components/Icons';
import { locations, globalTimezones, WHATSAPP, WHATSAPP_DISPLAY, ADDRESS_PRIMARY } from '@/lib/constants';

export default function CoveragePage() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [toast, setToast] = useState('');

  const openRequest = (service = '') => {
    setRequestOpen(service || true);
  };

  const submitRequest = (payload) => {
    setRequestOpen(false);
    setToast(`Dispatch request recorded for ${payload.location}. Our operations desk will call you.`);
  };

  return (
    <>
      <Navbar onOpenRequest={openRequest} />

      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="live-dot" /> Geographic &amp; Operational Reach
            </div>
            <h1>
              Sri Lanka on-site response.
              <br />
              Global timezone synchronization.
            </h1>
            <p className="subpage-hero-desc">
              Physical engineering presence stationed at 5 hubs across the island, coupled with
              an elite digital engineering team bridging Western and Eastern time zones.
            </p>
          </div>
        </section>

        {/* Colombo Engineering Studio Section */}
        <section className="service-category-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">PART 01 &middot; STUDIO OPERATIONS</div>
            <h2>Colombo Engineering Studio</h2>
            <p>
              Operating directly from Colombo 01, we deliver bespoke web platforms, payment integrations, and architecture reviews for clients across Sri Lanka and worldwide.
            </p>
          </div>

          <div className="coverage-local-layout studio-layout">
            <div className="coverage-studio-card">
              <div className="studio-card-badge">
                <span className="city-dot live" />
                <span>CENTRAL BASE OF OPERATIONS</span>
              </div>
              <h3 className="studio-card-title">Colombo Engineering Studio</h3>
              <p className="studio-card-subtitle">
                World Trade Center, Colombo 01 &middot; Serving Sri Lanka &amp; Global Clients (+05:30 IST)
              </p>

              <div className="studio-perks-grid">
                <div className="studio-perk-item">
                  <div className="perk-top">
                    <Icon name="check" size={16} className="perk-icon" />
                    <strong>&lt; 2h Architecture Review</strong>
                  </div>
                  <p>Guaranteed direct review of your technical quote, database schema, or IPG integration scope.</p>
                </div>

                <div className="studio-perk-item">
                  <div className="perk-top">
                    <Icon name="check" size={16} className="perk-icon" />
                    <strong>7-Day Turnkey Delivery</strong>
                  </div>
                  <p>Production Next.js deployment for e-commerce, villa booking engines, and portals from inquiry to live.</p>
                </div>

                <div className="studio-perk-item">
                  <div className="perk-top">
                    <Icon name="check" size={16} className="perk-icon" />
                    <strong>Island-Wide Digital Reach</strong>
                  </div>
                  <p>Powering brands, exporters, and boutique resorts across Colombo, Kandy, Galle, Mirissa, and Ella.</p>
                </div>

                <div className="studio-perk-item">
                  <div className="perk-top">
                    <Icon name="check" size={16} className="perk-icon" />
                    <strong>MikroTik &amp; UniFi Architecture</strong>
                  </div>
                  <p>Strategic network consulting, VLAN design, and encrypted branch-to-cloud security reviews.</p>
                </div>
              </div>

              <div className="table-footer-bar">
                <span>Direct Studio Desk: Mon&ndash;Sat 7:00 AM &ndash; 9:00 PM LK Time</span>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-wa-link"
                >
                  WhatsApp Fast Architecture Review
                </a>
              </div>
            </div>

            <div className="schematic-map-card studio-spec-card">
              <div className="schematic-header">
                <span className="schematic-title">STUDIO ARCHITECTURE GUARANTEE</span>
                <span className="schematic-status">STATUS: ONLINE</span>
              </div>
              <div className="studio-spec-body">
                <div className="spec-metric-row">
                  <span className="spec-label">Review Turnaround</span>
                  <strong className="spec-val">&lt; 2 Hours</strong>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Turnkey Web Deployment</span>
                  <strong className="spec-val">7 Calendar Days</strong>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Local Payment Stack</span>
                  <strong className="spec-val">PayHere &middot; Koko &middot; Mintpay</strong>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Primary Studio Location</span>
                  <strong className="spec-val">Colombo 01 (+05:30 IST)</strong>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Client Coverage</span>
                  <strong className="spec-val">Sri Lanka &amp; Worldwide</strong>
                </div>

                <div className="studio-spec-action">
                  <button
                    type="button"
                    className="button button-small"
                    onClick={() => openRequest('Architecture & Technical Review')}
                  >
                    Request Technical Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Timezone Bridge */}
        <section className="service-category-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">PART 02 &middot; CLOUD &amp; OFFSHORE</div>
            <h2>Global Timezone Bridge: +05:30 IST</h2>
            <p>
              Why overseas startups in the UK, Europe, UAE, Singapore, and Australia choose
              SecureNet for remote software development and dedicated engineering pods.
            </p>
          </div>

          <div className="timezone-grid">
            {globalTimezones.map((tz, idx) => (
              <div key={idx} className="tz-card">
                <div className="tz-top">
                  <span className="tz-flag">{tz.flag}</span>
                  <span className="tz-name">{tz.region}</span>
                </div>
                <div className="tz-overlap-value">{tz.overlap}</div>
                <div className="tz-desc">
                  Real-time video standups, instant Slack chat, and PR code reviews without nocturnal delays.
                </div>
              </div>
            ))}
          </div>

          <div className="coverage-cta-strip">
            <div className="cta-left">
              <h4>Need an emergency dispatch right now?</h4>
              <p>Direct WhatsApp dispatch line is monitored 24/7 for urgent network breakdowns.</p>
            </div>
            <div className="cta-right">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-wa"
              >
                WhatsApp Emergency Desk ({WHATSAPP_DISPLAY})
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {requestOpen && (
        <RequestModal
          initialService={typeof requestOpen === 'string' ? requestOpen : ''}
          onClose={() => setRequestOpen(false)}
          onSubmit={submitRequest}
        />
      )}

      <Toast message={toast} />
    </>
  );
}
