'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';
import Toast from '@/components/Toast';
import Icon from '@/components/Icons';
import { services, WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function ServicesPage() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const digitalServices = services.filter((s) => s.category === 'digital');
  const infraServices = services.filter((s) => s.category === 'infrastructure');

  const openRequest = (service = '') => {
    setRequestOpen(service || true);
  };

  const submitRequest = (payload) => {
    setRequestOpen(false);
    setToast(`Request received. Our engineering dispatch lead will contact ${payload.contact} shortly.`);
  };

  return (
    <>
      <Navbar onOpenRequest={openRequest} />

      <main className="subpage-main">
        {/* Page Hero Header */}
        <section className="subpage-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="live-dot" /> Complete Capabilities Directory
            </div>
            <h1>
              Technical solutions engineered
              <br />
              for real-world impact.
            </h1>
            <p className="subpage-hero-desc">
              From mission-critical on-site IT field dispatch across Sri Lanka to high-growth
              e-commerce checkouts, WhatsApp chatbots, boutique villa booking engines, and dedicated
              offshore engineering pods.
            </p>

            <div className="subpage-filter-bar">
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Capabilities (13)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'digital' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('digital')}
              >
                Digital &amp; Software Solutions (7)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'infrastructure' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('infrastructure')}
              >
                On-Site IT Infrastructure &amp; Field (6)
              </button>
            </div>
          </div>
        </section>

        {/* Section 1: Digital Engineering & Software Solutions */}
        {(selectedCategory === 'all' || selectedCategory === 'digital') && (
          <section className="service-category-section shell">
            <div className="category-section-header">
              <div className="category-eyebrow">PRACTICE AREA 01</div>
              <h2>Digital Engineering &amp; Software Solutions</h2>
              <p>
                Bespoke web applications, payment integrations, business automation, and dedicated
                engineering pods built to world-class standards.
              </p>
            </div>

            <div className="detailed-services-list">
              {digitalServices.map((service, idx) => (
                <article key={service.id} id={service.id} className="detailed-service-item">
                  <div className="item-header">
                    <div className="item-icon-box">
                      <Icon name={service.icon} size={22} />
                    </div>
                    <div className="item-title-block">
                      <div className="item-tag-row">
                        <span className="item-number">#{String(idx + 1).padStart(2, '0')}</span>
                        <span className="item-badge">{service.tag}</span>
                      </div>
                      <h3>{service.title}</h3>
                    </div>
                  </div>

                  <p className="item-description">{service.description}</p>

                  <div className="item-features-grid">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-check-row">
                        <Icon name="check" size={14} className="check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {service.techStack && (
                    <div className="item-tech-row">
                      <span className="tech-label">CORE INTEGRATIONS &amp; STACK:</span>
                      <div className="tech-tags">
                        {service.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="item-actions">
                    <button
                      type="button"
                      className="button button-small"
                      onClick={() => openRequest(service.title)}
                    >
                      Request Scope &amp; Quote <span>&rarr;</span>
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        `Hi SecureNet, I would like to consult about ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-ghost button-small"
                    >
                      WhatsApp Consultation <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: On-Site IT Infrastructure & Support */}
        {(selectedCategory === 'all' || selectedCategory === 'infrastructure') && (
          <section className="service-category-section shell">
            <div className="category-section-header">
              <div className="category-eyebrow">PRACTICE AREA 02</div>
              <h2>On-Site IT Infrastructure &amp; Field Support</h2>
              <p>
                Hands-on certified field engineers ready for rapid dispatch across Colombo, Kandy,
                Galle, and island-wide commercial centers.
              </p>
            </div>

            <div className="detailed-services-list">
              {infraServices.map((service, idx) => (
                <article key={service.id} id={service.id} className="detailed-service-item infra-item">
                  <div className="item-header">
                    <div className="item-icon-box infra-icon">
                      <Icon name={service.icon} size={22} />
                    </div>
                    <div className="item-title-block">
                      <div className="item-tag-row">
                        <span className="item-number">#{String(idx + 1).padStart(2, '0')}</span>
                        <span className="item-badge">{service.tag}</span>
                      </div>
                      <h3>{service.title}</h3>
                    </div>
                  </div>

                  <p className="item-description">{service.description}</p>

                  <div className="item-features-grid">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-check-row">
                        <Icon name="check" size={14} className="check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="item-actions">
                    <button
                      type="button"
                      className="button button-small"
                      onClick={() => openRequest(service.title)}
                    >
                      Dispatch Engineer / Quote <span>&rarr;</span>
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        `Urgent request for ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-ghost button-small"
                    >
                      Urgent WhatsApp Dispatch <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Fast Action Banner */}
        <section className="subpage-bottom-cta shell">
          <div className="cta-architectural-bar">
            <div>
              <div className="eyebrow">
                <span className="live-dot" /> Have a custom requirement?
              </div>
              <h2>Let us review your tech stack &amp; workflow.</h2>
              <p>
                Our engineering leadership provides a preliminary architecture consultation
                and quote within 2 business hours.
              </p>
            </div>
            <button
              type="button"
              className="button"
              onClick={() => openRequest()}
            >
              Start Technical Scoping <span>&rarr;</span>
            </button>
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
