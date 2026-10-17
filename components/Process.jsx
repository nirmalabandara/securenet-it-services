export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      desc: 'Share your issue or project requirements online or directly via WhatsApp.',
    },
    {
      num: '02',
      title: 'Receive a technical review',
      desc: '< 2h architecture review, database schema evaluation, and fixed project quote.',
    },
    {
      num: '03',
      title: '7-Day Turnkey Delivery',
      desc: 'Rapid development sprint deployed directly to production with zero friction.',
    },
  ];

  return (
    <section id="how" className="section-process">
      <div className="shell">
        <div className="process-header">
          <div className="eyebrow">
            <span className="live-dot" /> Simple Workflow
          </div>
          <h2>Fast execution from inquiry to delivery.</h2>
        </div>

        <div className="timeline-rail">
          {steps.map((st, idx) => (
            <div key={st.num} className="timeline-step">
              <div className="step-node-row">
                <span className="step-node">{st.num}</span>
                {idx < steps.length - 1 && <span className="step-connector" />}
              </div>
              <div className="step-card">
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
