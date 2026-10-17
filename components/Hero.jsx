'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icons';

export default function Hero({ onOpenRequest }) {
  const [activePreview, setActivePreview] = useState('checkout'); // 'checkout' | 'whatsapp' | 'booking' | 'dispatch'

  return (
    <section className="hero">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> On-Site IT &amp; Digital Engineering &middot; Sri Lanka
          </div>

          <h1>
            Technology systems that
            <br />
            <em>shows up</em> for your business.
          </h1>

          <p>
            From rapid on-site IT dispatch across Colombo and regional hubs, to high-converting
            e-commerce stores with PayHere &amp; Koko BNPL, automated WhatsApp notifications, and
            direct villa booking platforms.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button hero-primary-btn"
              onClick={() => onOpenRequest()}
              id="hero-request-btn"
            >
              Request Quote / Dispatch
            </button>
            <Link href="/services" className="button button-ghost">
              Explore 13 Practice Areas
            </Link>
          </div>

          <div className="hero-metrics-chips">
            <div className="metric-chip">
              <span className="chip-key">&lt; 2h Arrival</span>
              <span className="chip-val">Field Dispatch in Colombo</span>
            </div>
            <div className="metric-chip">
              <span className="chip-key">PayHere &middot; Koko</span>
              <span className="chip-val">Native Local Checkouts</span>
            </div>
            <div className="metric-chip">
              <span className="chip-key">0% OTA Commission</span>
              <span className="chip-val">Direct Villa Booking Platforms</span>
            </div>
          </div>
        </div>

        {/* Real-World Interactive Solution Card */}
        <div className="hero-showcase-card" aria-label="Interactive Solution Showcase">
          <div className="showcase-tabs-nav">
            <button
              type="button"
              className={`showcase-nav-btn ${activePreview === 'checkout' ? 'active' : ''}`}
              onClick={() => setActivePreview('checkout')}
            >
              E-Commerce &amp; IPG
            </button>
            <button
              type="button"
              className={`showcase-nav-btn ${activePreview === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setActivePreview('whatsapp')}
            >
              WhatsApp Bot
            </button>
            <button
              type="button"
              className={`showcase-nav-btn ${activePreview === 'booking' ? 'active' : ''}`}
              onClick={() => setActivePreview('booking')}
            >
              Villa Booking
            </button>
            <button
              type="button"
              className={`showcase-nav-btn ${activePreview === 'dispatch' ? 'active' : ''}`}
              onClick={() => setActivePreview('dispatch')}
            >
              Field Dispatch
            </button>
          </div>

          <div className="showcase-card-body">
            {activePreview === 'checkout' && (
              <div className="preview-panel checkout-preview">
                <div className="preview-top-row">
                  <div>
                    <span className="preview-tag">PAYMENT ARCHITECTURE</span>
                    <h4>Sri Lanka Native Mobile Checkout</h4>
                  </div>
                  <span className="speed-tag">Dialog/Mobitel 4G &lt;0.8s</span>
                </div>

                <div className="mock-checkout-box">
                  <div className="mock-total-row">
                    <span>Order Total:</span>
                    <strong>LKR 12,600.00</strong>
                  </div>

                  <div className="payment-options-list">
                    <div className="pay-option active">
                      <div className="pay-radio selected" />
                      <div className="pay-details">
                        <b>PayHere IPG / Bank Cards</b>
                        <small>Visa, Mastercard, Commercial Bank, Sampath, FriMi, Genie</small>
                      </div>
                    </div>

                    <div className="pay-option">
                      <div className="pay-radio" />
                      <div className="pay-details">
                        <b>Koko &mdash; Buy Now, Pay Later</b>
                        <small className="koko-highlight">3 interest-free monthly payments of LKR 4,200</small>
                      </div>
                      <span className="bnpl-badge">Popular</span>
                    </div>

                    <div className="pay-option">
                      <div className="pay-radio" />
                      <div className="pay-details">
                        <b>Mintpay &mdash; 0% Interest Installments</b>
                        <small>Pay in 3 split debit card deductions</small>
                      </div>
                    </div>
                  </div>

                  <div className="checkout-note-bar">
                    <Icon name="shield" size={14} className="sec-icon" />
                    <span>SSL 256-bit Bank Grade Encrypted &middot; Zero Cart Abandonment</span>
                  </div>
                </div>
              </div>
            )}

            {activePreview === 'whatsapp' && (
              <div className="preview-panel whatsapp-preview">
                <div className="preview-top-row">
                  <div>
                    <span className="preview-tag">SALES &amp; SUPPORT AUTOMATION</span>
                    <h4>WhatsApp Business &amp; SMS Gateway</h4>
                  </div>
                  <span className="speed-tag">Notify.lk / Dialog API</span>
                </div>

                <div className="mock-chat-window">
                  <div className="chat-bubble incoming">
                    <span className="chat-sender">SecureNet Automation &bull; 10:14 AM</span>
                    <p>
                      Hello Kasun! Your order <strong>#LK-2819</strong> has been verified.
                      Our Colombo logistics hub will dispatch via Domex today.
                    </p>
                    <div className="chat-lang-pill">Trilingual: English &middot; සිංහල &middot; தமிழ்</div>
                  </div>

                  <div className="chat-bubble outgoing">
                    <p>Can I pay via Koko on delivery or PayHere online?</p>
                    <span className="chat-time">10:15 AM &bull; Read &#10003;&#10003;</span>
                  </div>

                  <div className="chat-bubble incoming">
                    <p>
                      Yes! You can split into 3 interest-free payments via Koko right now:
                      <br />
                      <span className="link-preview">securenet.lk/pay/LK-2819</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activePreview === 'booking' && (
              <div className="preview-panel booking-preview">
                <div className="preview-top-row">
                  <div>
                    <span className="preview-tag">HOSPITALITY REVENUE</span>
                    <h4>Direct Booking Engine &middot; Mirissa, Southern Coast</h4>
                  </div>
                  <span className="ota-saving-tag">Saves 18% OTA Commission</span>
                </div>

                <div className="mock-booking-card">
                  <div className="villa-card-header">
                    <div>
                      <h5>Mirissa Ocean Surf Villa</h5>
                      <span className="villa-sub">Beachfront &middot; Private Plunge Pool &middot; 4 Guests</span>
                    </div>
                    <div className="villa-rate">
                      <strong>USD $280</strong>
                      <small>/ night</small>
                    </div>
                  </div>

                  <div className="booking-form-strip">
                    <div className="bf-item">
                      <span>DATES:</span>
                      <b>Oct 24 &ndash; Oct 28 (4 nights)</b>
                    </div>
                    <div className="bf-item">
                      <span>COMMISSION SAVED:</span>
                      <b className="green-val">+$224 vs Airbnb</b>
                    </div>
                  </div>

                  <div className="sync-status-row">
                    <Icon name="check" size={13} className="check-sync" />
                    <span>2-Way iCal Real-Time Sync with Booking.com &amp; Agoda (Zero Double Bookings)</span>
                  </div>
                </div>
              </div>
            )}

            {activePreview === 'dispatch' && (
              <div className="preview-panel dispatch-preview">
                <div className="preview-top-row">
                  <div>
                    <span className="preview-tag">ON-SITE INCIDENT TRIAGE</span>
                    <h4>Field Dispatch &middot; Commercial Office Support</h4>
                  </div>
                  <span className="speed-tag">&lt; 2h Colombo SLA</span>
                </div>

                <div className="mock-dispatch-card">
                  <div className="dispatch-row">
                    <span className="d-label">CLIENT PREMISE:</span>
                    <strong>Lanka Trade Solutions (Colombo 03)</strong>
                  </div>
                  <div className="dispatch-row">
                    <span className="d-label">REPORTED ISSUE:</span>
                    <span>Core switch rack collapse; 42 accounting PCs offline</span>
                  </div>
                  <div className="dispatch-row">
                    <span className="d-label">DISPATCH STATUS:</span>
                    <span className="sla-live-tag">&#10003; Engineer on-site in 28 mins &middot; Hardware restored</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="showcase-card-footer">
            <span>Engineering tailored for Sri Lankan &amp; global businesses</span>
            <button
              type="button"
              className="showcase-cta-btn"
              onClick={() => onOpenRequest()}
            >
              Get Custom Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
