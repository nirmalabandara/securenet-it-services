'use client';

import { useState } from 'react';
import Link from 'next/link';
import { locations, globalTimezones, WHATSAPP } from '@/lib/constants';
import Icon from './Icons';

export default function Coverage({ onOpenRequest }) {
  const [activeTab, setActiveTab] = useState('local'); // 'local' | 'global'

  return (
    <section id="coverage" className="section-coverage">
      <div className="shell">
        <div className="section-header-split">
          <div className="section-header-copy">
            <div className="eyebrow">
              <span className="num">04 /</span> COLOMBO STUDIO &amp; OVERSEAS BRIDGES
            </div>
            <h2>
              Colombo Engineering Studio.
              <br />
              Overlapping with London, Dubai &amp; Sydney.
            </h2>
            <p>
              Operating directly from Colombo 01, we deliver bespoke web platforms, payment integrations, and architecture reviews for clients across Sri Lanka and international tech teams on UTC+05:30.
            </p>
          </div>

          <div className="coverage-tabs">
            <button
              type="button"
              className={`coverage-tab-btn ${activeTab === 'local' ? 'active' : ''}`}
              onClick={() => setActiveTab('local')}
            >
              Colombo Studio &middot; Sri Lanka
            </button>
            <button
              type="button"
              className={`coverage-tab-btn ${activeTab === 'global' ? 'active' : ''}`}
              onClick={() => setActiveTab('global')}
            >
              Global Timezone Bridge (+05:30)
            </button>
          </div>
        </div>

        {activeTab === 'local' ? (
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

            {/* Studio Readiness & Turnkey SLA Spec Card */}
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
                    onClick={() => onOpenRequest && onOpenRequest('Architecture & Technical Review')}
                  >
                    Request Technical Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="coverage-global-layout">
            <div className="global-hero-card">
              <div className="global-card-header">
                <div className="eyebrow">
                  <span className="live-dot" /> Offshore Engineering Advantage
                </div>
                <h3>The +05:30 UTC Sweet Spot for Global Tech Teams</h3>
                <p>
                  Sri Lanka is uniquely situated between East and West. Our senior engineering pods
                  collaborate directly during your daylight hours without midnight burnout, at monthly
                  retainers ranging from $1,500 to $3,500 per dedicated engineer.
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
                    <div className="tz-desc">Real-time Slack &amp; GitHub sprint coordination</div>
                  </div>
                ))}
              </div>

              <div className="global-cta-bar">
                <span>Want to test an engineering sprint or build an MVP in 3&ndash;4 weeks?</span>
                <button
                  type="button"
                  className="button"
                  onClick={() => onOpenRequest && onOpenRequest('Offshore Engineering Pod')}
                >
                  Book Timezone Scoping Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
