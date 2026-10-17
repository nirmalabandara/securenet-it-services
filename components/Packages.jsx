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
            <span className="num">03 /</span> PREDICTABLE SERVICE PACKAGES &amp; RETAINERS
          </div>
          <h2>Straightforward monthly retainers &amp; project caps.</h2>
          <p>
            No open-ended hourly billing or surprise incident surcharges. Choose a fixed turnkey delivery scope or an on-site support SLA for your office.
          </p>

          <div className="packages-toggle" role="tablist">
            <button
              type="button"
              className={`toggle-btn ${tierType === 'digital' ? 'active' : ''}`}
              onClick={() => setTierType('digital')}
            >
              Software Tiers (4)
            </button>
            <button
              type="button"
              className={`toggle-btn ${tierType === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setTierType('infrastructure')}
            >
              On-Site IT Retainers (3)
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
                <div className="tier-header">
                  <div className="tier-top-row">
                    <h3>{tier.name}</h3>
                    <span className="tier-badge-pill">{tier.badge}</span>
                  </div>
                  <p className="tier-tagline">{tier.tagline}</p>
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
                  className={`button button-small ${tier.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                  onClick={() => onOpenRequest(tier.name)}
                >
                  Request Quote
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
                <div className="tier-header">
                  <div className="tier-top-row">
                    <h3>{pkg.name}</h3>
                    {pkg.accent && <span className="tier-badge-pill popular">Popular</span>}
                  </div>
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
                  className={`button button-small ${pkg.accent ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                  onClick={() => onOpenRequest(pkg.name)}
                >
                  Get Retainer Quote
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="packages-matrix-link-bar">
          <span>Need custom SLA agreements or offshore pod terms?</span>
          <Link href="/pricing" className="text-link-bright">
            Compare All Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
