'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';
import Toast from '@/components/Toast';
import Icon from '@/components/Icons';
import { portfolioProjects, WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function PortfolioPage() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const project = portfolioProjects[0];
  const currentImage = project.images[activeImageIdx] || project.images[0];

  const openRequest = (service = 'E-Commerce & Local Payments') => {
    setRequestOpen(service || true);
  };

  const submitRequest = (payload) => {
    setRequestOpen(false);
    setToast(`Request received. Our digital engineering lead will contact ${payload.contact} shortly.`);
  };

  return (
    <>
      <Navbar onOpenRequest={openRequest} />

      <main className="subpage-main">
        {/* Page Hero Header */}
        <section className="subpage-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="live-dot" /> Proven Client Portfolio &amp; Case Studies
            </div>
            <h1>
              High-converting digital platforms
              <br />
              engineered for modern business.
            </h1>
            <p className="subpage-hero-desc">
              We engineer mission-critical digital storefronts, custom booking engines, and enterprise web platforms.
              Explore our production work and discover how SecureNet brings real-world e-commerce power to growing brands.
            </p>
          </div>
        </section>

        {/* Flagship Case Study: Snap Cap Clothing */}
        <section className="service-category-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">FLAGSHIP PRODUCTION CASE STUDY</div>
            <h2>Snap Cap Clothing — Modern Apparel E-Commerce</h2>
            <p>
              Complete turnkey design, catalog architecture, high-conversion checkout, and cloud hosting for contemporary fashion label Snap Cap Clothing.
            </p>
          </div>

          <div className="portfolio-showcase-card standalone-case-study">
            {/* Top Browser Chrome Bar */}
            <div className="browser-chrome-bar">
              <div className="chrome-controls">
                <span className="chrome-dot red" />
                <span className="chrome-dot yellow" />
                <span className="chrome-dot green" />
              </div>

              <div className="chrome-url-bar">
                <Icon name="lock" size={13} className="chrome-lock-icon" />
                <span className="chrome-url-text">https://snapcapclothing.store</span>
                <span className="chrome-live-chip">
                  <span className="live-dot" /> LIVE PRODUCTION STOREFRONT
                </span>
              </div>

              <div className="chrome-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-visit-btn"
                  aria-label="Visit Snap Cap Clothing in a new tab"
                >
                  <span>Visit Live Store</span>
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>

            {/* Split View */}
            <div className="portfolio-card-body">
              {/* Visual Showcase */}
              <div className="portfolio-visual-col">
                <div className="portfolio-hero-image-wrap">
                  <Image
                    src={currentImage.src}
                    alt={`${project.title} - ${currentImage.title}`}
                    width={580}
                    height={620}
                    className="portfolio-hero-img"
                    priority
                  />

                  <div className="portfolio-image-badge-overlay">
                    <span className="overlay-badge-category">{currentImage.category}</span>
                    <span className="overlay-badge-price">{currentImage.price}</span>
                  </div>

                  <div className="portfolio-image-info-pill">
                    <span className="info-pill-title">{currentImage.title}</span>
                    <span className="info-pill-sub">{currentImage.caption}</span>
                  </div>
                </div>

                <div className="portfolio-thumb-gallery" role="tablist">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={activeImageIdx === idx}
                      className={`portfolio-thumb-btn ${activeImageIdx === idx ? 'active' : ''}`}
                      onClick={() => setActiveImageIdx(idx)}
                    >
                      <div className="thumb-img-wrapper">
                        <Image
                          src={img.src}
                          alt={img.title}
                          width={72}
                          height={72}
                          className="thumb-img"
                        />
                      </div>
                      <div className="thumb-text">
                        <span className="thumb-tag">{img.badge}</span>
                        <span className="thumb-title">{img.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Case Study Info */}
              <div className="portfolio-info-col">
                <div className="portfolio-client-meta">
                  <span className="client-flagship-pill">CLIENT: {project.client}</span>
                  <span className="client-year">STATUS: {project.status}</span>
                </div>

                <h3 className="portfolio-project-title">
                  {project.title}
                </h3>
                <p className="portfolio-tagline-text">
                  {project.tagline}
                </p>

                <p className="portfolio-project-summary">
                  {project.summary}
                </p>

                <div className="portfolio-metrics-grid">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="portfolio-metric-box">
                      <span className="metric-box-val">{metric.value}</span>
                      <span className="metric-box-lbl">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="portfolio-deliverables-list">
                  <h4 className="deliverables-heading">Engineering &amp; Architecture Highlights:</h4>
                  <div className="deliverables-grid">
                    {project.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="deliverable-item">
                        <div className="deliv-icon-wrapper">
                          <Icon name="check" size={14} />
                        </div>
                        <div className="deliv-text-wrapper">
                          <h5>{deliv.title}</h5>
                          <p>{deliv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="portfolio-tech-chips">
                  <span className="chips-label">Built With:</span>
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnkey Proposition For Other Businesses */}
            <div className="portfolio-business-pitch-banner">
              <div className="pitch-banner-content">
                <div className="pitch-badge-row">
                  <span className="pitch-accent-dot" />
                  <span className="pitch-badge-text">TURNKEY SERVICE FOR BUSINESSES</span>
                </div>
                <h4>We provide this exact turnkey service to other businesses.</h4>
                <p>
                  Looking to build or scale your own online store? SecureNet delivers turnkey e-commerce engineering for apparel labels, consumer goods, cosmetic lines, and retail businesses. From bespoke UX design and product sizing matrices to local payment gateways (PayHere, Koko BNPL, Commercial Bank IPG) and automated WhatsApp dispatch alerts — delivered in 2–3 weeks.
                </p>
              </div>

              <div className="pitch-banner-actions">
                <button
                  type="button"
                  className="button modern-primary-pill pitch-cta-btn"
                  onClick={() => openRequest('E-Commerce & Local Payments')}
                >
                  <span>Build My Online Store</span>
                  <Icon name="arrow-right" size={16} />
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi%20SecureNet,%20I%20saw%20the%20Snap%20Cap%20Clothing%20store%20and%20would%20like%20to%20build%20a%20similar%20e-commerce%20storefront%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-ghost pitch-secondary-btn"
                >
                  <Icon name="whatsapp" size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Store Delivery Process */}
        <section className="portfolio-workflow-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">HOW WE DELIVER YOUR STORE</div>
            <h2>From concept to live sales in 3 clear milestones.</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Architecture &amp; Brand Styling</h3>
              <p>We configure the catalog structure, variable product sizing, high-speed CDN assets, and bespoke visual theme matching your brand identity.</p>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Payments &amp; Order Automation</h3>
              <p>Direct integration of PayHere, Koko 3-split BNPL, card processors, and trilingual WhatsApp / SMS order notifications for instant dispatch.</p>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <h3>Production Launch &amp; Retainer SLA</h3>
              <p>Sub-second caching tuning, domain and SSL lockdown, staff training on the product dashboard, and continuous 99.9% uptime monitoring.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {requestOpen && (
        <RequestModal
          initialService={typeof requestOpen === 'string' ? requestOpen : 'E-Commerce & Local Payments'}
          onClose={() => setRequestOpen(false)}
          onSubmit={submitRequest}
        />
      )}

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}
