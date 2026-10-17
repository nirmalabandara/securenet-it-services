'use client';

import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icons';

export default function AboutShowcase({ onOpenRequest }) {
  return (
    <section className="about-showcase-section">
      <div className="shell">
        <div className="about-grid">
          {/* Left Column: Stacked Image Collage with Experience Badge */}
          <div className="about-visuals">
            <div className="collage-main-img-wrap">
              <Image
                src="/images/about-engineer.jpg"
                alt="SecureNet Lead Technology Specialist"
                width={420}
                height={480}
                className="collage-img main"
                priority
              />
              <div className="experience-floating-pill">
                <span className="exp-num">12+</span>
                <span className="exp-text">Years Field &amp; Software Experience</span>
              </div>
            </div>

            <div className="collage-sub-img-wrap">
              <Image
                src="/images/about-team.jpg"
                alt="Engineering Pod Collaboration"
                width={280}
                height={220}
                className="collage-img sub"
              />
            </div>

            {/* Decorative organic squiggles & dot matrix from the style */}
            <div className="decorative-dots-matrix" aria-hidden="true" />
            <div className="decorative-squiggle" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M6 36C12 20 22 40 32 18C36 10 42 14 42 22" stroke="var(--a)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Capability Bullets */}
          <div className="about-copy-panel">
            <div className="pill-badge-sub">
              <span>About SECURENET</span>
            </div>

            <h2 className="about-headline">
              Exclusive Technology &amp; Hands-On IT Solutions
            </h2>

            <p className="about-desc">
              Advising Sri Lankan enterprises and global partners on digital engineering, local payment gateways, and rapid physical workplace infrastructure dispatch.
            </p>

            <div className="about-points-list">
              <div className="about-point-item">
                <div className="point-icon-box">
                  <Icon name="terminal" size={18} />
                </div>
                <div>
                  <h4>Analytical diagnosis &amp; root cause triage</h4>
                  <p>We deploy certified network engineers with hardware analyzers to systematically resolve outages, cabling cuts, and server downtime.</p>
                </div>
              </div>

              <div className="about-point-item">
                <div className="point-icon-box">
                  <Icon name="shield" size={18} />
                </div>
                <div>
                  <h4>Zero-friction local payment architectures</h4>
                  <p>Turnkey integration for PayHere, Koko BNPL, and trilingual WhatsApp API dispatch engines built on resilient Next.js stacks.</p>
                </div>
              </div>
            </div>

            <div className="about-actions-row">
              <button
                type="button"
                className="button hero-primary-btn"
                onClick={() => onOpenRequest ? onOpenRequest() : null}
              >
                Learn More &amp; Talk
              </button>

              <Link href="/services" className="button button-ghost">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
