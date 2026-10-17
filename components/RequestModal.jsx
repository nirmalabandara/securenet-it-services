'use client';

import { useState, useEffect } from 'react';
import { services, serviceTiers, infrastructurePackages } from '@/lib/constants';

export default function RequestModal({ initialService = '', onClose, onSubmit }) {
  const [form, setForm] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    service: initialService,
    staff: '',
    location: '',
    date: '',
    time: '',
    notes: '',
  });

  useEffect(() => {
    if (initialService) {
      setForm((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      company: form.company,
      contact: form.contact,
      email: form.email,
      phone: form.phone,
      service: form.service || 'General IT Consultation',
      staff: form.staff,
      location: form.location,
      date: form.date,
      time: form.time,
      notes: form.notes,
    });
  };

  const digitalServices = services.filter((s) => s.category === 'digital');
  const infraServices = services.filter((s) => s.category === 'infrastructure');

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-modal-title"
    >
      <form className="request-modal" onSubmit={handleSubmit}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close request modal"
        >
          &times;
        </button>
        <div className="eyebrow">
          <span className="live-dot" /> SecureNet Dispatch &amp; Engineering Scoping
        </div>
        <h2 id="request-modal-title">Tell us what your business needs.</h2>
        <p className="modal-sub">
          We will review your requirements, prepare an architecture plan or dispatch triage, and send a guaranteed quote.
        </p>

        <div className="form-grid">
          <label>
            Company / Business Name *
            <input
              required
              name="company"
              value={form.company}
              onChange={update}
              placeholder="e.g. Lanka Trade Solutions / Mirissa Blue Villa"
              id="req-company"
            />
          </label>

          <label>
            Contact Person Name *
            <input
              required
              name="contact"
              value={form.contact}
              onChange={update}
              placeholder="Full name"
              id="req-contact"
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
              placeholder="contact@company.com"
              id="req-email"
            />
          </label>

          <label>
            Phone Number / WhatsApp *
            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="07X XXX XXXX"
              id="req-phone"
            />
          </label>

          <label className="full-col">
            Service or Solution Package *
            <select
              required
              name="service"
              value={form.service}
              onChange={update}
              id="req-service"
            >
              <option value="">Choose a practice or package...</option>

              <optgroup label="Digital Engineering & Software Solutions">
                {digitalServices.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Software Packages & Tiers">
                {serviceTiers.map((t) => (
                  <option key={t.id} value={`Tier: ${t.name}`}>
                    {t.name} &mdash; {t.tagline}
                  </option>
                ))}
              </optgroup>

              <optgroup label="On-Site IT Infrastructure & Field Support">
                {infraServices.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Field Support Retainers">
                {infrastructurePackages.map((p) => (
                  <option key={p.name} value={`Field: ${p.name}`}>
                    {p.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </label>

          <label>
            Organization Size
            <select
              name="staff"
              value={form.staff}
              onChange={update}
              id="req-staff"
            >
              <option value="">Select company size...</option>
              <option value="1–10 people">1–10 people (Startup / Boutique)</option>
              <option value="11–50 people">11–50 people (Growing SMB)</option>
              <option value="51–200 people">51–200 people (Mid-Market)</option>
              <option value="200+ people">200+ people (Enterprise / Multi-Branch)</option>
            </select>
          </label>

          <label>
            Location / Target Market *
            <input
              required
              name="location"
              value={form.location}
              onChange={update}
              placeholder="e.g. Colombo 03 / Galle / Remote (Global)"
              id="req-location"
            />
          </label>

          <label>
            Preferred Date
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              id="req-date"
            />
          </label>

          <label>
            Preferred Time / Urgency
            <select
              name="time"
              value={form.time}
              onChange={update}
              id="req-time"
            >
              <option value="">Select urgency...</option>
              <option value="Immediate Emergency (< 2h)">Immediate Emergency (&lt; 2h in Colombo)</option>
              <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
              <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
              <option value="Evening (4pm–8pm)">Evening (4pm–8pm)</option>
              <option value="Project Scoping Call">Project Scoping Call (Schedule video meeting)</option>
            </select>
          </label>

          <label className="full-col">
            Project Scope or Outage Details
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={update}
              placeholder="Describe your technical requirements (e.g. PayHere + Koko setup, Wi-Fi dead zones, direct booking engine, or current network interruption)..."
              id="req-notes"
            />
          </label>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button"
            id="req-submit"
          >
            Submit Request &amp; Receive Quote
          </button>
        </div>
      </form>
    </div>
  );
}
