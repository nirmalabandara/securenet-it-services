'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import Icon from '@/components/Icons';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY, PHONE_DISPLAY, ADDRESS_PRIMARY, services, serviceTiers } from '@/lib/constants';

export default function ContactPage() {
  const [toast, setToast] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    notes: '',
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setToast(`Inquiry received for ${form.company}. Our engineering team will follow up promptly.`);
  };

  return (
    <>
      <Navbar />

      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="live-dot" /> Direct Operations Desk
            </div>
            <h1>
              Initiate technical triage or
              <br />
              schedule an architecture review.
            </h1>
            <p className="subpage-hero-desc">
              Have an urgent network outage in Colombo? Or looking to build a high-converting
              e-commerce store with PayHere &amp; Koko BNPL? Contact us through this terminal or direct WhatsApp.
            </p>
          </div>
        </section>

        <section className="contact-section shell">
          <div className="contact-grid">
            {/* Left Column: Direct Info */}
            <div className="contact-info-panel">
              <div className="contact-info-card">
                <span className="info-badge">24/7 EMERGENCY TRIAGE</span>
                <h3>Direct WhatsApp Dispatch</h3>
                <p>For immediate response regarding server lockouts, POS downtime, and fiber line cuts.</p>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link wa"
                >
                  <Icon name="message" size={16} />
                  <span>{WHATSAPP_DISPLAY} &rarr;</span>
                </a>
              </div>

              <div className="contact-info-card">
                <span className="info-badge">TECHNICAL RFP &amp; ARCHITECTURE</span>
                <h3>Email Engineering Desk</h3>
                <p>Send project specifications, Figma design links, and RFQ documents.</p>
                <a href={`mailto:${EMAIL}`} className="contact-direct-link">
                  <span>{EMAIL} &rarr;</span>
                </a>
              </div>

              <div className="contact-info-card">
                <span className="info-badge">COLOMBO HEADQUARTERS</span>
                <h3>World Trade Center</h3>
                <address className="contact-address">
                  {ADDRESS_PRIMARY}
                </address>
                <div className="hq-meta">
                  <span>Hub Hours: Mon&ndash;Sat 7:00 AM &ndash; 9:00 PM</span>
                  <span>Emergency On-Call: 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-panel">
              <div className="contact-form-card">
                <h3>Technical Consultation &amp; RFP Form</h3>
                <p>Fill out your details to receive an upfront scope and quote within 2 hours.</p>

                {submitted ? (
                  <div className="submitted-notice">
                    <Icon name="check" size={24} className="submit-check" />
                    <h4>Inquiry Received Successfully</h4>
                    <p>
                      Thank you, <strong>{form.contact}</strong>. A SecureNet solutions architect is
                      reviewing your notes and will reply to <strong>{form.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      className="button button-small"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rfp-form">
                    <div className="rfp-grid">
                      <label>
                        Company Name *
                        <input
                          required
                          name="company"
                          value={form.company}
                          onChange={update}
                          placeholder="e.g. Lanka Trade Solutions"
                        />
                      </label>
                      <label>
                        Your Name *
                        <input
                          required
                          name="contact"
                          value={form.contact}
                          onChange={update}
                          placeholder="Full name"
                        />
                      </label>
                      <label>
                        Email Address *
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={update}
                          placeholder="you@company.com"
                        />
                      </label>
                      <label>
                        Phone / WhatsApp *
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={update}
                          placeholder="07X XXX XXXX"
                        />
                      </label>
                      <label className="full">
                        Primary Service Needed *
                        <select
                          required
                          name="service"
                          value={form.service}
                          onChange={update}
                        >
                          <option value="">Select a service or package...</option>
                          <optgroup label="Digital Engineering">
                            {services.filter(s => s.category === 'digital').map(s => (
                              <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Software Packages / Tiers">
                            {serviceTiers.map(t => (
                              <option key={t.id} value={`Tier: ${t.name}`}>{t.name} &mdash; {t.tagline}</option>
                            ))}
                          </optgroup>
                          <optgroup label="On-Site IT Infrastructure">
                            {services.filter(s => s.category === 'infrastructure').map(s => (
                              <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                          </optgroup>
                        </select>
                      </label>
                      <label className="full">
                        Location / Premise City *
                        <input
                          required
                          name="location"
                          value={form.location}
                          onChange={update}
                          placeholder="e.g. Colombo 03 / Galle / Remote"
                        />
                      </label>
                      <label className="full">
                        Project Scope or Problem Description *
                        <textarea
                          required
                          rows={4}
                          name="notes"
                          value={form.notes}
                          onChange={update}
                          placeholder="Provide details on your network requirements, software specifications, or urgent incident..."
                        />
                      </label>
                    </div>

                    <button type="submit" className="button" style={{ width: '100%', marginTop: '16px' }}>
                      Submit Inquiry &amp; Dispatch Request <span>&rarr;</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toast message={toast} />
    </>
  );
}
