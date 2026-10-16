export default function Hero({ onOpenRequest }) {
  return (
    <section className="hero">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> Trusted on-site IT support
          </div>
          <h1>
            IT support that
            <br />
            <em>shows up</em> for your business.
          </h1>
          <p>
            From urgent fixes to ongoing technology care, SecureNet sends
            experienced IT professionals directly to your workplace—anywhere in
            Sri Lanka.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button"
              onClick={() => onOpenRequest()}
              id="hero-request-btn"
            >
              Request IT support <span>→</span>
            </button>
            <a href="#services" className="text-link">
              Explore services <span>↓</span>
            </a>
          </div>

          <div className="trust-row">
            <span>
              <b>✓</b> Vetted professionals
            </span>
            <span>
              <b>✓</b> Island-wide coverage
            </span>
            <span>
              <b>✓</b> Custom quotes
            </span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="shape shape-a" />
          <div className="shape shape-b" />

          <div className="hero-panel">
            <div className="panel-top">
              <span className="live-dot" /> On-site support
            </div>
            <div className="panel-content">
              <div className="avatar">IT</div>
              <div>
                <strong>Your support team</strong>
                <small>Ready when your business needs us</small>
              </div>
            </div>
            <div className="map-line">
              <span>Colombo</span>
              <i />
              <span>Kandy</span>
              <i />
              <span>Galle</span>
            </div>
            <p>Serving businesses across Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
