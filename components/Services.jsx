'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/constants';
import Icon from './Icons';

export default function Services({ onOpenRequest }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Assign rich photographic backdrops to showcase cards
  const imageMap = {
    'ecommerce-payments': '/images/service-cloud.jpg',
    'emergency-it': '/images/service-cyber.jpg',
    'custom-erp-portals': '/images/service-data.jpg',
    'cybersecurity': '/images/service-cyber.jpg',
    'managed-it': '/images/service-cloud.jpg',
    'hospitality-booking': '/images/service-data.jpg',
  };

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="section-services-modern">
      <div className="shell">
        <div className="modern-section-header">
          <div className="section-header-left">
            <span className="section-category-tag">OUR SERVICES</span>
            <h2 className="modern-section-title">
              We provide a range of<br />
              <em>impactful services</em>
            </h2>
          </div>

          <div className="section-header-right">
            <p>
              Focused on modern digital engineering: high-converting e-commerce with PayHere &amp; Koko BNPL, trilingual WhatsApp automation, direct villa booking engines, custom business portals, and commercial network consulting.
            </p>
          </div>
        </div>

        {/* 3 Featured Photographic Showcase Cards (From Reference) */}
        <div className="featured-services-row">
          <div className="featured-img-card">
            <Image
              src="/images/service-cloud.jpg"
              alt="E-Commerce & Local Payment Gateways"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">01 / COMMERCE</span>
              <h3>E-Commerce &amp; Local IPG</h3>
              <p>Next.js &amp; WooCommerce storefronts wired directly into PayHere, Koko BNPL, and trilingual WhatsApp order automation.</p>
              
              <Link href="/portfolio" className="card-case-study-pill">
                <span className="live-dot" /> Case Study: Snap Cap Store ↗
              </Link>

              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('E-Commerce & Local Payments') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-data.jpg"
              alt="Villa Direct Booking & Web Portals"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">02 / HOSPITALITY</span>
              <h3>Villa Direct Booking Engines</h3>
              <p>Zero-commission direct booking engines with multi-currency Stripe/IPG checkout and 2-way iCal sync.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Villa & Hotel Direct Booking') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-cyber.jpg"
              alt="Commercial Network & Cloud Security Architecture"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">03 / ARCHITECTURE</span>
              <h3>Commercial Network &amp; Security</h3>
              <p>Consulting architecture for MikroTik, Ubiquiti UniFi, zero-trust VLAN segmentation, and cloud firewalls.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Commercial Network & Cloud Security Architecture') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Filter for Practice Areas */}
        <div className="detailed-services-container">
          <div className="services-tabs-bar">
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Engineering Services ({services.length})
            </button>
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveCategory('digital')}
            >
              Web &amp; Software Platforms (6)
            </button>
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'consulting' ? 'active' : ''}`}
              onClick={() => setActiveCategory('consulting')}
            >
              Network Architecture Add-On (1)
            </button>
          </div>

          <div className="modern-services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="modern-service-item">
                <div className="service-item-top">
                  <div className="service-icon-glyph">
                    <Icon name={service.icon} size={22} />
                  </div>
                  <span className="service-category-tag-sub">{service.tag}</span>
                </div>

                <h4>{service.title}</h4>
                <p>{service.summary}</p>

                <div className="service-bullet-points">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="bullet-row">
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {service.caseStudy && (
                  <div className="service-case-study-callout">
                    <Link href="/portfolio" className="case-study-inline-link">
                      <span className="live-dot" /> Case: <strong>{service.caseStudy.client}</strong> ↗
                    </Link>
                  </div>
                )}

                <button
                  type="button"
                  className="modern-item-action"
                  onClick={() => onOpenRequest ? onOpenRequest(service.title) : null}
                >
                  Consult on this
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
