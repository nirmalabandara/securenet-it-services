import { services } from '@/lib/constants';

export default function Services({ onOpenRequest }) {
  return (
    <section id="services" className="section shell">
      <div className="section-heading">
        <div>
          <div className="eyebrow navy">
            <i /> What we do
          </div>
          <h2>
            Practical support for
            <br />
            every IT need.
          </h2>
        </div>
        <p>
          Your business gets the right expertise for the job, with a clear scope
          and custom quote before any work begins.
        </p>
      </div>

      <div className="service-grid">
        {services.map((s) => (
          <article className="service-card" key={s.title}>
            <div className="service-icon" aria-hidden="true">
              {s.icon}
            </div>
            <span className="service-tag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <button
              type="button"
              onClick={() => onOpenRequest(s.title)}
              aria-label={`Request ${s.title}`}
            >
              Request this service <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
