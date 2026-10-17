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
              Our services encompass a spectrum of expertise, from robust cybersecurity and seamless cloud integration to bespoke software development and strategic technology consulting.
            </p>
          </div>
        </div>

        {/* 3 Featured Photographic Showcase Cards (From Reference) */}
        <div className="featured-services-row">
          <div className="featured-img-card">
            <Image
              src="/images/service-cyber.jpg"
              alt="Cybersecurity & Network Defense"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">01 / DEFENSE</span>
              <h3>Cybersecurity &amp; Ransomware Shield</h3>
              <p>Physical firewall configuration, zero-trust audits, and 24/7 endpoint quarantine.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Cybersecurity & Ransomware Shield') : null}
              >
                <span>Request Details</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-cloud.jpg"
              alt="Cloud Solutions & IPG Checkouts"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">02 / COMMERCE</span>
              <h3>Cloud Solutions &amp; E-Commerce IPG</h3>
              <p>Next.js e-commerce engines directly wired into PayHere, Koko BNPL, and trilingual WhatsApp bots.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('E-Commerce & Local Payments') : null}
              >
                <span>Request Details</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-data.jpg"
              alt="Data Analytics & Custom ERP"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">03 / ENTERPRISE</span>
              <h3>Custom ERP &amp; Business Portals</h3>
              <p>Real-time inventory sync, tea/apparel export logistics desks, and multi-branch POS connectivity.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Custom ERP & Business Portals') : null}
              >
                <span>Request Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Filter for Detailed Practice Areas */}
        <div className="detailed-services-container">
          <div className="services-tabs-bar">
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Capabilities ({services.length})
            </button>
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveCategory('digital')}
            >
              Digital &amp; Software (7)
            </button>
            <button
              type="button"
              className={`modern-tab-btn ${activeCategory === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setActiveCategory('infrastructure')}
            >
              On-Site IT &amp; Hardware (6)
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
                      <span className="bullet-dash">&mdash;</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

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
