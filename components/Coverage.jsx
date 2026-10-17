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
              <span className="live-dot" /> Geographic &amp; Operational Reach
            </div>
            <h2>
              On-site across Sri Lanka.
              <br />
              Synchronized with the world.
            </h2>
            <p>
              Whether you need rapid physical dispatch to an office in Colombo or Kandy,
              or a dedicated Next.js engineering pod overlapping with your working hours
              in London, Dubai, Singapore, or Sydney.
            </p>
          </div>

          <div className="coverage-tabs">
            <button
              type="button"
              className={`coverage-tab-btn ${activeTab === 'local' ? 'active' : ''}`}
              onClick={() => setActiveTab('local')}
            >
              Sri Lanka Field Hubs (5)
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
          <div className="coverage-local-layout">
            <div className="coverage-table-card">
              <div className="table-header-bar">
                <span>ON-SITE DISPATCH HUB</span>
                <span>RESPONSE SLA</span>
                <span>SERVICE READINESS</span>
                <span>DISPATCH</span>
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
                        onClick={() => onOpenRequest && onOpenRequest(`Dispatch to ${loc.name}`)}
                      >
                        Dispatch
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="table-footer-bar">
                <span>Direct Hotline: Mon&ndash;Sat 7:00 AM &ndash; 9:00 PM LK Time</span>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-wa-link"
                >
                  WhatsApp Fast Triage
                </a>
              </div>
            </div>

            {/* Architectural Sri Lanka Map Schematic */}
            <div className="schematic-map-card">
              <div className="schematic-header">
                <span className="schematic-title">ISLAND DISPATCH TOPOLOGY</span>
                <span className="schematic-status">ACTIVE HUBS: 5</span>
              </div>
              <div className="schematic-visual">
                <div className="schematic-grid-bg" />
                <div className="hub-node hub-jaffna">
                  <span className="node-marker" />
                  <span className="node-label">Jaffna Hub (Northern)</span>
                </div>
                <div className="hub-node hub-kandy">
                  <span className="node-marker primary" />
                  <span className="node-label">Kandy Central Hub</span>
                </div>
                <div className="hub-node hub-colombo">
                  <span className="node-marker flagship" />
                  <span className="node-label">Colombo Flagship (&lt; 2h SLA)</span>
                </div>
                <div className="hub-node hub-batti">
                  <span className="node-marker" />
                  <span className="node-label">Batticaloa Hub (Eastern)</span>
                </div>
                <div className="hub-node hub-galle">
                  <span className="node-marker primary" />
                  <span className="node-label">Galle / Southern Coast Hub</span>
                </div>
              </div>
              <div className="schematic-footer">
                <span>Average engineer arrival time across Western Province: 38 minutes</span>
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
