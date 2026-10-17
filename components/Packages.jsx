'use client';

import { useState } from 'react';
import Link from 'next/link';
import { serviceTiers, infrastructurePackages } from '@/lib/constants';
import Icon from './Icons';

export default function Packages({ onOpenRequest }) {
  const [tierType, setTierType] = useState('digital'); // 'digital' | 'infrastructure'

  return (
    <section id="packages" className="section-packages">
      <div className="shell">
        <div className="center-heading">
          <div className="eyebrow">
            <span className="live-dot" /> Transparent Engagement Models
          </div>
          <h2>Engineered packages tailored for Sri Lankan &amp; global businesses.</h2>
          <p>
            Predictable scope, rapid turnarounds, and zero hidden costs.
            Choose between turnkey digital software tiers or ongoing on-site workplace retainers.
          </p>

          <div className="packages-toggle" role="tablist">
            <button
              type="button"
              className={`toggle-btn ${tierType === 'digital' ? 'active' : ''}`}
              onClick={() => setTierType('digital')}
            >
              Digital &amp; Software Tiers (4)
            </button>
            <button
              type="button"
              className={`toggle-btn ${tierType === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setTierType('infrastructure')}
            >
              On-Site IT Infrastructure (3)
            </button>
          </div>
        </div>

        {tierType === 'digital' ? (
          <div className="package-grid four-col">
            {serviceTiers.map((tier) => (
              <article
                key={tier.id}
                className={`package-card ${tier.accent ? 'featured' : ''}`}
              >
                {tier.accent && <div className="card-popular-badge">RECOMMENDED FOR COMMERCE</div>}
                <div className="tier-header">
                  <span className="tier-badge-label">{tier.badge}</span>
                  <h3>{tier.name}</h3>
                  <p className="tier-tagline">{tier.tagline}</p>
                </div>

                <div className="tier-meta-box">
                  <span className="meta-label">IDEAL FOR:</span>
                  <span className="meta-value">{tier.bestFor}</span>
                  <div className="meta-divider" />
                  <span className="meta-label">DELIVERY:</span>
                  <span className="meta-value-mono">{tier.delivery}</span>
                </div>

                <ul className="tier-features-list">
                  {tier.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <Icon name="check" size={13} className="tier-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`button ${tier.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                  onClick={() => onOpenRequest(tier.name)}
                >
                  Request Tier Quote <span>&rarr;</span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="package-grid three-col">
            {infrastructurePackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`package-card ${pkg.accent ? 'featured' : ''}`}
              >
                {pkg.accent && <div className="card-popular-badge">MOST POPULAR CONTRACT</div>}
                <div className="tier-header">
                  <span className="tier-badge-label">FIELD SUPPORT</span>
                  <h3>{pkg.name}</h3>
                  <p className="tier-tagline">{pkg.intro}</p>
                </div>

                <ul className="tier-features-list">
                  {pkg.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <Icon name="check" size={13} className="tier-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`button ${pkg.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                  onClick={() => onOpenRequest(pkg.name)}
                >
                  Get Custom Retainer Quote <span>&rarr;</span>
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="packages-matrix-link-bar">
          <span>Need custom SLA terms, offshore pod agreements, or multi-site branch pricing?</span>
          <Link href="/pricing" className="text-link-bright">
            View Complete Comparison Matrix <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
