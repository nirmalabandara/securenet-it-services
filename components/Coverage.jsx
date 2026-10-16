'use client';

import { WHATSAPP } from '@/lib/constants';

export default function Coverage({ onOpenRequest }) {
  const locations = [
    { name: 'Colombo', class: 'pin-a', response: 'Within 2 hours' },
    { name: 'Kandy', class: 'pin-b', response: 'Same-day visit' },
    { name: 'Galle', class: 'pin-c', response: 'Same-day visit' },
    { name: 'Jaffna', class: 'pin-d', response: 'Priority dispatch' },
    { name: 'Batticaloa', class: 'pin-e', response: 'Scheduled visit' },
  ];

  return (
    <section id="coverage" className="coverage">
      <div className="shell coverage-layout">
        <div>
          <div className="eyebrow navy">
            <i /> Island-wide service
          </div>
          <h2>
            Wherever you work,
            <br />
            we can support you.
          </h2>
          <p>
            Our field team serves businesses throughout Sri Lanka, from city
            centres to regional operations. Rapid dispatch, certified
            engineers, and predictable pricing.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="text-link dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check availability via WhatsApp <span>→</span>
          </a>
        </div>

        <div className="coverage-map" aria-label="Coverage map of Sri Lanka">
          <div className="island">
            SRI
            <br />
            LANKA
          </div>
          {locations.map((loc) => (
            <span
              key={loc.name}
              className={`pin ${loc.class}`}
              title={`${loc.name}: ${loc.response}`}
              onClick={() => onOpenRequest && onOpenRequest(`On-demand visit in ${loc.name}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpenRequest && onOpenRequest(`On-demand visit in ${loc.name}`);
              }}
            >
              {loc.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
