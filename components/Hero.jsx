import Link from 'next/link';

export default function Hero({ onOpenRequest }) {
  return (
    <section className="hero-rebuilt">
      <div className="shell hero-rebuilt-grid">
        <div className="hero-rebuilt-copy">
          <p className="hero-kicker">Colombo, Sri Lanka · software &amp; on-site IT</p>
          <h1>When technology gets in the way, <em>call the people who build it.</em></h1>
          <p className="hero-rebuilt-intro">
            SecureNet helps businesses plan digital projects, improve their online sales systems, and solve practical workplace IT problems.
          </p>
          <div className="hero-rebuilt-actions">
            <button
              type="button"
              className="button"
              onClick={() => onOpenRequest ? onOpenRequest() : null}
              id="hero-request-btn"
            >
              Request a consultation
            </button>
            <Link href="/services" className="text-action">See services</Link>
          </div>
        </div>
        <aside className="hero-brief" aria-label="How SecureNet works">
          <p>How we start</p>
          <ol>
            <li><span>01</span> You explain the job or problem.</li>
            <li><span>02</span> We review the scope and prepare a quote.</li>
            <li><span>03</span> We agree the work before it begins.</li>
          </ol>
          <a href="mailto:contact@securenet.com">contact@securenet.com</a>
        </aside>
      </div>
    </section>
  );
}
