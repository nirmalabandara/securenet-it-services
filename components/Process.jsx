export default function Process() {
  const steps = [
    {
      num: 'A',
      title: 'Start with the actual situation',
      desc: 'Tell us what is changing, what is not working, or what you need to launch.',
    },
    {
      num: 'B',
      title: 'Get a useful scope',
      desc: 'We discuss the work, the constraints, and the next steps before any commitment.',
    },
    {
      num: 'C',
      title: 'Move forward with a clear plan',
      desc: 'Once the scope is agreed, we schedule the work and keep communication direct.',
    },
  ];

  return (
    <section id="how" className="section-process">
      <div className="shell">
        <div className="process-header">
          <p className="section-label">How an inquiry becomes work</p>
          <h2>Start with the detail that matters.</h2>
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
