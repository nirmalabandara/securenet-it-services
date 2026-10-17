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

        {/* Local Sri Lanka Hubs Section */}
        <section className="service-category-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">PART 01 &middot; PHYSICAL OPERATIONS</div>
            <h2>Island-Wide On-Site Field Hubs</h2>
            <p>
              When networks crash or hardware fails, remote support is not enough. SecureNet sends
              certified field engineers directly to your commercial premises.
            </p>
          </div>

          <div className="coverage-table-card">
            <div className="table-header-bar">
              <span>DISPATCH HUB</span>
              <span>RESPONSE TIME</span>
              <span>COVERAGE DETAILS</span>
              <span>REQUEST</span>
            </div>
            <div className="table-rows">
              {locations.map((loc, idx) => (
                <div key={idx} className="coverage-row">
                  <div className="row-city">
                    <span className="city-dot live" />
                    <strong>{loc.name}</strong>
                  </div>
                  <div className="row-sla">
                    <span className="sla-badge">{loc.response}</span>
                  </div>
                  <div className="row-coverage">
                    <span className="coverage-status-tag">{loc.coverage}</span>
                  </div>
                  <div className="row-action">
                    <button
                      type="button"
                      className="dispatch-trigger-btn"
                      onClick={() => openRequest(`On-demand dispatch to ${loc.name}`)}
                    >
                      Request Dispatch &rarr;
                    </button>
                  </div>
                </div>
              ))}
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
                WhatsApp Emergency Desk ({WHATSAPP_DISPLAY}) &rarr;
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
