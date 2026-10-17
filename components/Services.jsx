'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/constants';
import Icon from './Icons';

export default function Services({ onOpenRequest }) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'digital' | 'infrastructure'

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="section-services">
      <div className="shell">
        <div className="section-header-split">
          <div className="section-header-copy">
            <div className="eyebrow">
              <span className="live-dot" /> Practical Capabilities
            </div>
            <h2>
              Software engineering &amp;
              <br />
              hands-on IT support.
            </h2>
            <p>
              Direct field engineers stationed across Sri Lanka, and software engineers
              building high-converting web apps, payment flows, and business portals.
            </p>
          </div>

          <div className="services-filter-tabs" role="tablist">
            <button
              type="button"
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services ({services.length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeCategory === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveCategory('digital')}
            >
              Digital &amp; Software (7)
            </button>
            <button
              type="button"
              className={`filter-tab ${activeCategory === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setActiveCategory('infrastructure')}
            >
              On-Site IT (6)
            </button>
          </div>
        </div>

        {/* Streamlined Bento Grid */}
        <div className="services-bento-grid">
          {filteredServices.map((service) => {
            const isAnchor = service.id === 'ecommerce-payments' && activeCategory !== 'infrastructure';

            return (
              <article
                key={service.id}
                className={`service-card ${isAnchor ? 'card-anchor' : ''}`}
              >
                <div className="card-top">
                  <div className="service-icon-box" aria-hidden="true">
                    <Icon name={service.icon} size={20} />
                  </div>
                  <span className="service-tag-pill">{service.tag}</span>
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>

                  <div className="service-features-list">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="feature-bullet">
                        <Icon name="check" size={12} className="bullet-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {service.techStack && (
                    <div className="tech-pills-row">
                      {service.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <button
                    type="button"
                    className="service-action-btn"
                    onClick={() => onOpenRequest(service.title)}
                    aria-label={`Request ${service.title}`}
                  >
                    <span>Request Quote</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services-bottom-cta">
          <div className="bottom-cta-text">
            <h4>Have a custom project scope or urgent hardware breakdown?</h4>
            <p>We review requirements and provide a clear quote within 2 hours.</p>
          </div>
          <div className="bottom-cta-actions">
            <Link href="/services" className="button button-ghost button-small">
              View Detailed Specs
            </Link>
            <button
              type="button"
              className="button button-small"
              onClick={() => onOpenRequest()}
            >
              Start Free Scoping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
