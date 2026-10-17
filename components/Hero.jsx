'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icons';

export default function Hero({ onOpenRequest }) {
  const [consoleMode, setConsoleMode] = useState('dispatch'); // 'dispatch' | 'code'

  return (
    <section className="hero">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> On-Site IT & Digital Engineering · Sri Lanka
          </div>

          <h1>
            Technology systems that
            <br />
            <em>shows up</em> for your business.
          </h1>

          <p>
            From emergency field dispatch across Sri Lanka to high-converting
            e-commerce, WhatsApp automation, boutique hotel booking engines,
            and dedicated offshore engineering pods.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button hero-primary-btn"
              onClick={() => onOpenRequest()}
              id="hero-request-btn"
            >
              Request Support / Quote <span>→</span>
            </button>
            <Link href="/services" className="button button-ghost">
              Explore 13 Services <span>↓</span>
            </Link>
          </div>

          <div className="hero-metrics-chips">
            <div className="metric-chip">
              <span className="chip-key">&lt; 2h</span>
              <span className="chip-val">Field Dispatch in Colombo</span>
            </div>
            <div className="metric-chip">
              <span className="chip-key">PayHere · Koko</span>
              <span className="chip-val">Native Local Checkouts</span>
            </div>
            <div className="metric-chip">
              <span className="chip-key">+05:30 IST</span>
              <span className="chip-val">AU · UK · UAE Timezone Overlap</span>
            </div>
          </div>
        </div>

        {/* Console / Terminal Mockup */}
        <div className="hero-console" aria-label="SecureNet Operations Terminal">
          <div className="console-header">
            <div className="console-modes">
              <button
                type="button"
                className={`console-mode-btn ${consoleMode === 'dispatch' ? 'active' : ''}`}
                onClick={() => setConsoleMode('dispatch')}
              >
                <span className="status-dot live" />
                <span>FIELD DISPATCH CONSOLE</span>
              </button>
              <button
                type="button"
                className={`console-mode-btn ${consoleMode === 'code' ? 'active' : ''}`}
                onClick={() => setConsoleMode('code')}
              >
                <span className="status-dot code" />
                <span>SOFTWARE & API CLOUD</span>
              </button>
            </div>
            <span className="console-badge">SL-SYS v4.8</span>
          </div>

          {consoleMode === 'dispatch' ? (
            <div className="console-body">
              <div className="console-meta-bar">
                <span>REGION: SRI LANKA (ALL HUBS)</span>
                <span className="mono-green">SLA: 99.8% ON-TIME</span>
              </div>

              <div className="ticket-item urgent">
                <div className="ticket-top">
                  <span className="ticket-id">#SN-2419</span>
                  <span className="ticket-badge red">EMERGENCY DISPATCH</span>
                  <span className="ticket-time">14m ago</span>
                </div>
                <div className="ticket-title">Lanka Trade Solutions · Colombo 03</div>
                <div className="ticket-desc">
                  Core switch rack offline &middot; 42 workstations interrupted
                </div>
                <div className="ticket-status-row">
                  <span className="status-indicator dispatched">
                    &bull; Engineer Dispatched (ETA: 28 mins)
                  </span>
                  <span className="ticket-engineer">Lead: D. Jayasinghe</span>
                </div>
              </div>

              <div className="ticket-item normal">
                <div className="ticket-top">
                  <span className="ticket-id">#SN-2418</span>
                  <span className="ticket-badge blue">MAINTENANCE & WI-FI</span>
                  <span className="ticket-time">1h 12m ago</span>
                </div>
                <div className="ticket-title">Vertex Holdings · Kandy City</div>
                <div className="ticket-desc">
                  UniFi U6 Pro AP upgrade &amp; VLAN separation for POS
                </div>
                <div className="ticket-status-row">
                  <span className="status-indicator complete">
                    &#10003; Completed &middot; Verified 380 Mbps throughput
                  </span>
                  <span className="ticket-engineer">Hub: Central</span>
                </div>
              </div>

              <div className="ticket-item compact">
                <div className="ticket-top">
                  <span className="ticket-id">#SN-2417</span>
                  <span className="ticket-badge green">VILLA BOOKING LAUNCH</span>
                  <span className="ticket-time">Today</span>
                </div>
                <div className="ticket-title">Mirissa Blue Resort · Southern Province</div>
                <div className="ticket-desc">
                  Direct booking engine live &middot; Stripe &amp; PayHere connected
                </div>
              </div>
            </div>
          ) : (
            <div className="console-body code-body">
              <div className="console-meta-bar">
                <span>DEPLOYMENT: NEXT.JS 16 &middot; EDGE NETWORK</span>
                <span className="mono-green">STATUS: HEALTHY</span>
              </div>

              <div className="code-log">
                <div className="code-line">
                  <span className="c-time">12:04:18</span>
                  <span className="c-tag info">[PAYMENTS]</span>
                  <span className="c-text">PayHere IPG &amp; Koko BNPL webhook handshake 200 OK</span>
                </div>
                <div className="code-line">
                  <span className="c-time">12:04:19</span>
                  <span className="c-tag success">[WHATSAPP]</span>
                  <span className="c-text">Notify.lk trilingual SMS dispatch triggered (order #LK-8891)</span>
                </div>
                <div className="code-line">
                  <span className="c-time">12:04:22</span>
                  <span className="c-tag info">[BOOKING]</span>
                  <span className="c-text">iCal 2-way sync: Mirissa Villa #04 booked (USD 340.00 via Stripe)</span>
                </div>
                <div className="code-line">
                  <span className="c-time">12:04:27</span>
                  <span className="c-tag warn">[ERP SYNC]</span>
                  <span className="c-text">Peliyagoda warehouse stock level reconciled (1,420 SKUs)</span>
                </div>
                <div className="code-line">
                  <span className="c-time">12:04:30</span>
                  <span className="c-tag success">[OFFSHORE]</span>
                  <span className="c-text">Sydney client sprint sync: 4 PRs merged &middot; +05:30 overlap active</span>
                </div>
              </div>

              <div className="terminal-footer">
                <span className="term-prompt">&gt; securenet-cli ready</span>
                <span className="term-cursor" />
              </div>
            </div>
          )}

          <div className="console-bottom-bar">
            <span>24/7 Field &amp; Cloud Standby</span>
            <button
              type="button"
              className="console-action-link"
              onClick={() => onOpenRequest()}
            >
              Open Ticket / RFP &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
