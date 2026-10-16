import { packages } from '@/lib/constants';

export default function Packages({ onOpenRequest }) {
  return (
    <section id="packages" className="section shell packages">
      <div className="center-heading">
        <div className="eyebrow navy">
          <i /> Flexible by design
        </div>
        <h2>Support that fits your business.</h2>
        <p>
          Choose the kind of engagement you need. Every solution is tailored
          and quoted for your requirements.
        </p>
      </div>

      <div className="package-grid">
        {packages.map((p) => (
          <article
            className={`package-card ${p.accent ? 'featured' : ''}`}
            key={p.name}
          >
            {p.accent && <label>Most popular</label>}
            <h3>{p.name}</h3>
            <p>{p.intro}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>
                  ✓ <span>{pt}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={p.accent ? 'button' : 'outline-button'}
              onClick={() => onOpenRequest(p.name)}
            >
              {p.accent ? 'Get a custom quote' : 'Request support'}{' '}
              <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
