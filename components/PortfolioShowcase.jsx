'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icons';
import { portfolioProjects } from '@/lib/constants';

export default function PortfolioShowcase({ onOpenRequest }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const project = portfolioProjects[0]; // Snap Cap Clothing flagship

  const currentImage = project.images[activeImageIdx] || project.images[0];

  return (
    <section id="portfolio" className="section-portfolio">
      <div className="shell">
        {/* Section Header */}
        <div className="modern-section-header">
          <div className="section-header-left">
            <span className="section-category-tag">FEATURED PORTFOLIO &amp; CASE STUDY</span>
            <h2 className="modern-section-title">
              Proven digital flagships<br />
              <em>engineered to convert</em>
            </h2>
          </div>

          <div className="section-header-right">
            <p>
              We don&apos;t just talk about e-commerce and web performance — we engineer real, live production storefronts.
              Explore how we built and scaled <strong>Snap Cap Clothing</strong>, and discover how we can deliver the exact same turnkey e-commerce power for your business.
            </p>
          </div>
        </div>

        {/* Main Showcase Bento / Card */}
        <div className="portfolio-showcase-card">
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
                <span className="live-dot" /> LIVE PRODUCTION
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

          {/* Card Body: Interactive Split View */}
          <div className="portfolio-card-body">
            {/* Left Column: Visual Showcase & Interactive Gallery */}
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

              {/* Interactive Thumbnail Selector */}
              <div className="portfolio-thumb-gallery" role="tablist" aria-label="Snap Cap product gallery">
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

            {/* Right Column: Case Study Details & Engineering Breakdown */}
            <div className="portfolio-info-col">
              <div className="portfolio-client-meta">
                <span className="client-flagship-pill">FLAGSHIP CLIENT CASE STUDY</span>
                <span className="client-year">COMPLETED &middot; ACTIVE 2026</span>
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

              {/* Technical Metrics Strip */}
              <div className="portfolio-metrics-grid">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="portfolio-metric-box">
                    <span className="metric-box-val">{metric.value}</span>
                    <span className="metric-box-lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* What SecureNet Built */}
              <div className="portfolio-deliverables-list">
                <h4 className="deliverables-heading">What SecureNet Engineered:</h4>
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

              {/* Tech Stack Chips */}
              <div className="portfolio-tech-chips">
                <span className="chips-label">Infrastructure:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Banner: "We Can Build This For Your Business" */}
          <div className="portfolio-business-pitch-banner">
            <div className="pitch-banner-content">
              <div className="pitch-badge-row">
                <span className="pitch-accent-dot" />
                <span className="pitch-badge-text">READY FOR YOUR BRAND</span>
              </div>
              <h4>We provide this exact turnkey e-commerce engineering to other businesses.</h4>
              <p>
                Whether you run an apparel label, a retail brand, a cosmetics studio, or specialized consumer products — SecureNet delivers complete, turnkey digital storefronts. We handle UI/UX design, catalog management, local &amp; international payment gateways (PayHere, Koko BNPL, Commercial Bank IPG), automated WhatsApp notifications, and managed cloud hosting.
              </p>
            </div>

            <div className="pitch-banner-actions">
              <button
                type="button"
                className="button modern-primary-pill pitch-cta-btn"
                onClick={() => onOpenRequest ? onOpenRequest('E-Commerce & Local Payments') : null}
              >
                <span>Launch Your Online Store</span>
                <Icon name="arrow-right" size={16} />
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-ghost pitch-secondary-btn"
              >
                <span>Visit snapcapclothing.store</span>
                <Icon name="external" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
