export default function ClientStrip() {
  const focusAreas = ['Web platforms & e-commerce', 'Payments & customer messaging', 'Workplace networks & IT support'];

  return (
    <section className="focus-strip" aria-label="SecureNet focus areas">
      <div className="shell">
        <p>Work that crosses the screen and the workplace.</p>
        <div>
          {focusAreas.map((item) => (
            <span key={item} className="focus-strip-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
