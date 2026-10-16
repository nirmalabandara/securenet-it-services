'use client';

import { useState, useEffect } from 'react';
import { services } from '@/lib/constants';

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
      service: form.service || 'General IT Support',
      staff: form.staff,
      location: form.location,
      date: form.date,
      time: form.time,
      notes: form.notes,
    });
  };

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
          className="close"
          onClick={onClose}
          aria-label="Close request modal"
        >
          ×
        </button>
        <div className="eyebrow navy">
          <i /> Request IT support
        </div>
        <h2 id="request-modal-title">Tell us what your business needs.</h2>
        <p>We will review your request and send a custom quote.</p>

        <div className="form-grid">
          <label>
            Company name *
            <input
              required
              name="company"
              value={form.company}
              onChange={update}
              placeholder="Your company name"
              id="req-company"
            />
          </label>

          <label>
            Your name *
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
            Email address *
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="you@company.com"
              id="req-email"
            />
          </label>

          <label>
            Phone number *
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

          <label>
            Service needed *
            <select
              required
              name="service"
              value={form.service}
              onChange={update}
              id="req-service"
            >
              <option value="">Choose a service</option>
              <optgroup label="Core Services">
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Support Packages">
                <option value="On-demand visit">On-demand visit</option>
                <option value="Business care">Business care</option>
                <option value="Project support">Project support</option>
              </optgroup>
            </select>
          </label>

          <label>
            Company size
            <select
              name="staff"
              value={form.staff}
              onChange={update}
              id="req-staff"
            >
              <option value="">Choose size</option>
              <option value="1–10 people">1–10 people</option>
              <option value="11–50 people">11–50 people</option>
              <option value="51–200 people">51–200 people</option>
              <option value="200+ people">200+ people</option>
            </select>
          </label>

          <label>
            Business location *
            <input
              required
              name="location"
              value={form.location}
              onChange={update}
              placeholder="City / district (e.g., Colombo 03)"
              id="req-location"
            />
          </label>

          <label>
            Preferred visit date *
            <input
              required
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              id="req-date"
            />
          </label>

          <label className="full">
            Preferred time
            <select
              name="time"
              value={form.time}
              onChange={update}
              id="req-time"
            >
              <option value="">Choose a time</option>
              <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
              <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
              <option value="Evening (4pm–6pm)">Evening (4pm–6pm)</option>
            </select>
          </label>

          <label className="full">
            Tell us more
            <textarea
              name="notes"
              value={form.notes}
              onChange={update}
              placeholder="Describe the IT issue, network setup requirements, or specific requests..."
              rows={3}
              id="req-notes"
            />
          </label>
        </div>

        <button type="submit" className="button form-button" id="req-submit-btn">
          Submit request <span>→</span>
        </button>
      </form>
    </div>
  );
}
