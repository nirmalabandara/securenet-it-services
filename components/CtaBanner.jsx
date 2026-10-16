export default function CtaBanner({ onOpenRequest }) {
  return (
    <section className="cta">
      <div className="shell">
        <div>
          <div className="eyebrow light">
            <i /> Let’s get started
          </div>
          <h2>
            Technology issues should not
            <br />
            slow your business down.
          </h2>
        </div>
        <button
          type="button"
          className="button button-white"
          onClick={() => onOpenRequest()}
          id="cta-request-btn"
        >
          Request IT support <span>→</span>
        </button>
      </div>
    </section>
  );
}
