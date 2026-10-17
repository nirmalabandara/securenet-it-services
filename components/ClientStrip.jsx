import { proofMetrics } from '@/lib/constants';

export default function ClientStrip() {
  return (
    <section className="proof-strip" aria-label="Operational Key Metrics">
      <div className="shell">
        <div className="proof-grid">
          {proofMetrics.map((item, idx) => (
            <div key={idx} className="proof-item">
              <span className="proof-value">{item.value}</span>
              <span className="proof-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
