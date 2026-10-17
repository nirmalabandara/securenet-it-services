export default function ClientStrip() {
  const stats = [
    { value: '3.5K+', label: 'Projects Completed Across Lanka' },
    { value: '286+', label: 'Active Corporate Clients' },
    { value: '98.8%', label: 'SLA Uptime & On-Time Arrival' },
    { value: '32+', label: 'Certified On-Site Engineers' }
  ];

  return (
    <section className="proof-strip-modern" aria-label="Key Enterprise Metrics">
      <div className="shell">
        <div className="proof-intro-center">
          <span>THE NUMBERS REFLECT OUR REPUTATION</span>
        </div>
        <div className="proof-modern-grid">
          {stats.map((item, idx) => (
            <div key={idx} className="proof-modern-col">
              <span className="proof-modern-value">{item.value}</span>
              <span className="proof-modern-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
