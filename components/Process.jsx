export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      desc: 'Share your issue or project requirements online or directly via WhatsApp.',
    },
    {
      num: '02',
      title: 'Receive a fixed quote',
      desc: 'Transparent upfront scope and pricing within 2 hours, with zero surprise fees.',
    },
    {
      num: '03',
      title: 'We dispatch or build',
      desc: 'An engineer arrives on-site in <2h, or your software development sprint begins.',
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
