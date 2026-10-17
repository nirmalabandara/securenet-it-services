'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icons';

export default function Hero({ onOpenRequest }) {
  return (
    <section className="hero-modern">
      {/* Decorative background vectors from reference */}
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="bg-arch-line" />
        <div className="bg-abstract-spiral">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M10 25C15 10 35 12 38 28C40 40 22 45 20 32C18 20 48 18 52 35" stroke="var(--t3)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="shell hero-modern-grid">
        {/* Left Column: Heading, Social Proof Pill, Stats */}
        <div className="hero-modern-left">
          <div className="pill-badge-top">
            <span className="pill-dot" />
            <span>Best IT &amp; Engineering Solutions</span>
          </div>

          <h1 className="hero-modern-title">
            Transform Your IT Enterprise with Our <em>Expert Guidance</em>
          </h1>

          <p className="hero-modern-desc">
            A leading IT service company dedicated to empowering Sri Lankan businesses and global teams with cutting-edge software solutions, local payment flows, and rapid on-site dispatch.
          </p>

          <div className="hero-modern-cta-row">
            <button
              type="button"
              className="button modern-primary-pill"
              onClick={() => onOpenRequest ? onOpenRequest() : null}
              id="hero-request-btn"
            >
              Let&apos;s Talk
            </button>

            {/* Social proof avatar stack from reference */}
            <div className="social-proof-stack">
              <div className="avatar-group">
                <Image src="/images/avatar-1.jpg" alt="Partner 1" width={32} height={32} className="avatar-img" />
                <Image src="/images/avatar-2.jpg" alt="Partner 2" width={32} height={32} className="avatar-img" />
                <Image src="/images/avatar-3.jpg" alt="Partner 3" width={32} height={32} className="avatar-img" />
                <div className="avatar-badge">120+</div>
              </div>
              <span className="proof-label-text">Trusted Partners Across Lanka</span>
            </div>
          </div>

          {/* Dual stat blocks at bottom-left */}
          <div className="hero-dual-stats">
            <div className="dual-stat-item">
              <span className="stat-big">A+ Rating</span>
              <span className="stat-sub">Top rated 4.9/5 on-site &amp; dev services</span>
            </div>
            <div className="stat-divider-vertical" />
            <div className="dual-stat-item">
              <span className="stat-big">12+ Years Experience</span>
              <span className="stat-sub">Most experienced technical engineers in Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Arched Portrait Image & Floating Accents */}
        <div className="hero-modern-right">
          <div className="arch-image-card">
            <div className="arch-image-wrapper">
              <Image
                src="/images/hero-engineer.jpg"
                alt="SecureNet Lead Technology Consultant"
                width={520}
                height={620}
                className="hero-main-portrait"
                priority
              />
            </div>

            {/* Decorative orbit accents */}
            <div className="orbit-accent-badge" aria-hidden="true">
              <div className="orbit-circle" />
              <div className="orbit-dot" />
            </div>

            <div className="floating-card-metric">
              <div className="metric-icon-bubble">
                <Icon name="check" size={16} />
              </div>
              <div>
                <b>&lt; 2h SLA</b>
                <small>Physical Arrival Guaranteed</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
