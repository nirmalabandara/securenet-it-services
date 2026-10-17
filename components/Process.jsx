import Icon from './Icons';

export default function Process() {
  const steps = [
    {
      num: '01',
      tag: 'SCOPING & ARCHITECTURE',
      title: 'Specify your requirements',
      desc: 'Select your service—whether an urgent field repair or a headless e-commerce store with PayHere & Koko BNPL. Tell us your location or tech stack.',
      timeframe: 'Avg. review: < 2 hours',
    },
    {
      num: '02',
      tag: 'FIXED TRANSPARENT QUOTE',
      title: 'Receive clear scope & terms',
      desc: 'No hidden surcharges. For field IT, we quote clear labor and parts beforehand. For digital software, we deliver a documented milestone roadmap.',
      timeframe: 'Guaranteed upfront pricing',
    },
    {
      num: '03',
      tag: 'DEPLOYMENT & SLA',
      title: 'We dispatch or initiate the build',
      desc: 'A certified hardware engineer arrives at your Sri Lankan office premises, or your dedicated Next.js engineering team begins sprint cycle one.',
      timeframe: '< 2h Colombo / 48h Dev kick-off',
    },
  ];

  return (
    <section id="how" className="section-process">
      <div className="shell">
        <div className="process-header">
          <div className="eyebrow">
            <span className="live-dot" /> High-Velocity Execution
          </div>
          <h2>Zero friction from inquiry to resolution.</h2>
          <p>
            Whether your server rack just collapsed or you need a direct booking engine
            live before peak tourist season.
          </p>
        </div>

        <div className="timeline-rail">
          {steps.map((st, idx) => (
            <div key={st.num} className="timeline-step">
              <div className="step-node-row">
                <span className="step-node">{st.num}</span>
                {idx < steps.length - 1 && <span className="step-connector" />}
              </div>
              <div className="step-card">
                <span className="step-meta-tag">{st.tag}</span>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
                <div className="step-timeframe">
                  <Icon name="zap" size={13} className="timeframe-icon" />
                  <span>{st.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
