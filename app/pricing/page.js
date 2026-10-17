'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';
import Toast from '@/components/Toast';
import Icon from '@/components/Icons';
import { serviceTiers, infrastructurePackages, WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function PricingPage() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [pricingMode, setPricingMode] = useState('digital'); // 'digital' | 'infrastructure' | 'offshore'

  const openRequest = (service = '') => {
    setRequestOpen(service || true);
  };

  const submitRequest = (payload) => {
    setRequestOpen(false);
    setToast(`Quotation request received. Our team will send the scope breakdown to ${payload.email}.`);
  };

  return (
    <>
      <Navbar onOpenRequest={openRequest} />

      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="live-dot" /> Transparent Engagement Models
            </div>
            <h1>
              Engineered service tiers with
              <br />
              guaranteed deliverables.
            </h1>
            <p className="subpage-hero-desc">
              No hidden fees, no opaque hourly billing. Choose between turnkey software tiers,
              guaranteed on-site field support retainers, or dedicated offshore engineering pods.
            </p>

            <div className="subpage-filter-bar">
              <button
                type="button"
                className={`filter-btn ${pricingMode === 'digital' ? 'active' : ''}`}
                onClick={() => setPricingMode('digital')}
              >
                Recommended Software Tiers (4)
              </button>
              <button
                type="button"
                className={`filter-btn ${pricingMode === 'infrastructure' ? 'active' : ''}`}
                onClick={() => setPricingMode('infrastructure')}
              >
                On-Site IT Retainers (3)
              </button>
              <button
                type="button"
                className={`filter-btn ${pricingMode === 'offshore' ? 'active' : ''}`}
                onClick={() => setPricingMode('offshore')}
              >
                Offshore Engineering Pods ($1.5k–$3.5k)
              </button>
            </div>
          </div>
        </section>

        {/* Mode 1: Software Tiers */}
        {pricingMode === 'digital' && (
          <section className="pricing-section shell">
            <div className="category-section-header">
              <div className="category-eyebrow">TURNKEY SOFTWARE PACKAGES</div>
              <h2>Recommended Digital &amp; Web Tiers</h2>
              <p>
                From launching a modern professional website to headless e-commerce and full bespoke cloud SaaS.
              </p>
            </div>

            <div className="pricing-grid-cards">
              {serviceTiers.map((tier) => (
                <article
                  key={tier.id}
                  className={`pricing-card ${tier.accent ? 'featured-pricing-card' : ''}`}
                >
                  {tier.accent && <div className="pricing-flag-badge">MOST POPULAR IN SRI LANKA</div>}

                  <div className="pricing-card-header">
                    <span className="tier-badge-label">{tier.badge}</span>
                    <h3>{tier.name}</h3>
                    <p className="pricing-card-tagline">{tier.tagline}</p>
                  </div>

                  <div className="pricing-meta-box">
                    <div className="p-meta-item">
                      <span className="p-label">BEST FOR:</span>
                      <span className="p-val">{tier.bestFor}</span>
                    </div>
                    <div className="p-meta-item">
                      <span className="p-label">ESTIMATED TIMELINE:</span>
                      <span className="p-val-mono">{tier.delivery}</span>
                    </div>
                  </div>

                  <div className="pricing-features-wrap">
                    <span className="pricing-features-title">DELIVERABLES INCLUDED:</span>
                    <ul className="pricing-features-list">
                      {tier.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <Icon name="check" size={13} className="tier-check" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pricing-card-footer">
                    <button
                      type="button"
                      className={`button ${tier.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                      onClick={() => openRequest(`Tier: ${tier.name}`)}
                    >
                      Request Detailed Scope &amp; Quote <span>&rarr;</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Mode 2: On-Site IT Retainers */}
        {pricingMode === 'infrastructure' && (
          <section className="pricing-section shell">
            <div className="category-section-header">
              <div className="category-eyebrow">ON-SITE WORKPLACE CARE</div>
              <h2>On-Site IT Infrastructure Packages</h2>
              <p>
                Hands-on emergency triage and preventative workstation maintenance across Sri Lankan offices.
              </p>
            </div>

            <div className="pricing-grid-cards three-col">
              {infrastructurePackages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`pricing-card ${pkg.accent ? 'featured-pricing-card' : ''}`}
                >
                  {pkg.accent && <div className="pricing-flag-badge">RECOMMENDED FOR TEAMS</div>}

                  <div className="pricing-card-header">
                    <span className="tier-badge-label">WORKPLACE INFRASTRUCTURE</span>
                    <h3>{pkg.name}</h3>
                    <p className="pricing-card-tagline">{pkg.intro}</p>
                  </div>

                  <div className="pricing-features-wrap">
                    <span className="pricing-features-title">SERVICE COVERAGE:</span>
                    <ul className="pricing-features-list">
                      {pkg.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <Icon name="check" size={13} className="tier-check" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pricing-card-footer">
                    <button
                      type="button"
                      className={`button ${pkg.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                      onClick={() => openRequest(`Field: ${pkg.name}`)}
                    >
                      Get Retainer Agreement <span>&rarr;</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Mode 3: Offshore Pods */}
        {pricingMode === 'offshore' && (
          <section className="pricing-section shell">
            <div className="category-section-header">
              <div className="category-eyebrow">GLOBAL TALENT PODS</div>
              <h2>Dedicated Offshore Engineering Teams</h2>
              <p>
                Hire elite Sri Lankan Next.js, React, and Node engineers with smooth +05:30 IST overlap
                with the UK, UAE, Singapore, and Australia.
              </p>
            </div>

            <div className="offshore-pricing-grid">
              <div className="offshore-plan-card">
                <span className="tier-badge-label">STAFF AUGMENTATION</span>
                <h3>Dedicated Senior Engineer</h3>
                <div className="offshore-price">
                  <span className="currency">$1,500 &ndash; $3,500</span>
                  <span className="period">/ developer / month</span>
                </div>
                <p className="offshore-plan-desc">
                  Senior full-stack Next.js/React/Node engineer working 160 hours/month as an extension
                  of your overseas product team.
                </p>
                <ul className="pricing-features-list">
                  <li><Icon name="check" size={13} className="tier-check" /> 40 hours/week dedicated full-time capacity</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Direct daily standup &amp; Slack integration</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Smooth timezone overlap with AU, SG, UAE, and UK</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Zero recruitment fees or local payroll overhead</li>
                  <li><Icon name="check" size={13} className="tier-check" /> 2-week risk-free trial period</li>
                </ul>
                <button
                  type="button"
                  className="button"
                  onClick={() => openRequest('Dedicated Engineer Retainer')}
                >
                  Schedule Developer Interview <span>&rarr;</span>
                </button>
              </div>

              <div className="offshore-plan-card featured-pricing-card">
                <div className="pricing-flag-badge">HIGH VELOCITY SPRINT</div>
                <span className="tier-badge-label">STARTUP ACCELERATOR</span>
                <h3>3&ndash;4 Week MVP Sprint</h3>
                <div className="offshore-price">
                  <span className="currency">Fixed Custom Scope</span>
                  <span className="period">milestone-based</span>
                </div>
                <p className="offshore-plan-desc">
                  Turn your product concept or Figma mockups into a fully working, deployed SaaS product
                  ready for your first paying users and investor demos.
                </p>
                <ul className="pricing-features-list">
                  <li><Icon name="check" size={13} className="tier-check" /> Complete Next.js 16 + Postgres + Auth stack</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Stripe or local IPG payment integration</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Weekly milestone demo sessions</li>
                  <li><Icon name="check" size={13} className="tier-check" /> Clean GitHub repository handover with full documentation</li>
                  <li><Icon name="check" size={13} className="tier-check" /> 30 days post-launch bug warranty included</li>
                </ul>
                <button
                  type="button"
                  className="button tier-btn-primary"
                  onClick={() => openRequest('3-4 Week MVP Sprint')}
                >
                  Book MVP Scoping Session <span>&rarr;</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Comparison FAQ */}
        <section className="faq-section shell">
          <div className="category-section-header">
            <div className="category-eyebrow">FREQUENTLY ASKED QUESTIONS</div>
            <h2>Pricing &amp; Contract Clarifications</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h4>How do payment milestones work for software projects?</h4>
              <p>
                Standard projects operate on a 40% initial deposit upon architectural sign-off,
                30% at halfway demo milestone, and 30% upon final deployment and QA sign-off.
              </p>
            </div>
            <div className="faq-card">
              <h4>Can we combine On-Site IT and Software Engineering?</h4>
              <p>
                Yes. Many Sri Lankan retail and hospitality brands use our Commerce &amp; Growth
                or Hospitality Direct tier for their online platform, while retaining our Business Care
                plan for their physical office Wi-Fi, POS, and workstations.
              </p>
            </div>
            <div className="faq-card">
              <h4>Which payment gateways do you recommend in Sri Lanka?</h4>
              <p>
                For local LKR cards and banking, PayHere, WebXPay, and Commercial Bank/Sampath IPG are
                best-in-class. For fashion and retail, adding Mintpay and Koko BNPL routinely increases
                checkout completion by 25% to 40%.
              </p>
            </div>
            <div className="faq-card">
              <h4>How fast can an engineer arrive in an emergency?</h4>
              <p>
                Within Colombo 01 through 15 and close suburbs (Rajagiriya, Dehiwala), our on-call
                dispatch arrives in under 2 hours. In Kandy and Galle hubs, same-day dispatch is guaranteed.
              </p>
            </div>
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
