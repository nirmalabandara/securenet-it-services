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
              <span className="live-dot" /> Comprehensive Capabilities
            </div>
            <h2>
              Engineering, software &amp;
              <br />
              field infrastructure.
            </h2>
            <p>
              Two specialized divisions under one roof: on-site field engineers who
              physically resolve hardware and network outages, and digital product
              engineers who build high-growth web, commerce, and automation systems.
            </p>
          </div>

          <div className="services-filter-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Capabilities (13)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'digital'}
              className={`filter-tab ${activeCategory === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveCategory('digital')}
            >
              Digital &amp; Software (7)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'infrastructure'}
              className={`filter-tab ${activeCategory === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setActiveCategory('infrastructure')}
            >
              On-Site IT &amp; Field (6)
            </button>
          </div>
        </div>

        {/* Bento / Services Grid */}
        <div className="services-bento-grid">
          {filteredServices.map((service, index) => {
            const isAnchor = service.id === 'ecommerce-payments' && activeCategory !== 'infrastructure';
            const isEmergency = service.id === 'emergency-it';

            return (
              <article
                key={service.id}
                className={`service-card ${isAnchor ? 'card-anchor' : ''} ${
                  isEmergency ? 'card-emergency' : ''
                }`}
              >
                <div className="card-top">
                  <div className="service-icon-box" aria-hidden="true">
                    <Icon name={service.icon} size={20} />
                  </div>
                  <span className="service-tag-pill">{service.tag}</span>
                </div>

                <div className="card-content">
                  <span className="service-category-label">
                    {service.category === 'digital' ? 'DIGITAL & SOFTWARE' : 'ON-SITE INFRASTRUCTURE'}
                  </span>
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>

                  <div className="service-features-list">
                    {service.features.slice(0, isAnchor ? 4 : 2).map((feat, fIdx) => (
                      <div key={fIdx} className="feature-bullet">
                        <Icon name="check" size={13} className="bullet-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {service.techStack && (
                    <div className="tech-pills-row">
                      {service.techStack.slice(0, 4).map((tech, tIdx) => (
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
                    <span>Request Quote / Dispatch</span>
                    <Icon name="arrow-right" size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services-bottom-cta">
          <div className="bottom-cta-text">
            <h4>Need a specialized integration or custom technical RFP?</h4>
            <p>We provide full scoping, architecture documents, and fixed timeline quotes.</p>
          </div>
          <div className="bottom-cta-actions">
            <Link href="/services" className="button button-ghost">
              View Detailed Specs <span>&rarr;</span>
            </Link>
            <button
              type="button"
              className="button"
              onClick={() => onOpenRequest()}
            >
              Start Free Scoping <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
