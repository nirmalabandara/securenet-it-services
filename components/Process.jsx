export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      desc: 'Select a service, share your requirements and choose a preferred time.',
    },
    {
      num: '02',
      title: 'Receive a custom quote',
      desc: 'Our team reviews your request and confirms the right support plan.',
    },
    {
      num: '03',
      title: 'We send the right expert',
      desc: 'A qualified SecureNet professional arrives ready to get things working.',
    },
  ];

  return (
    <section id="how" className="process">
      <div className="shell">
        <div className="process-intro">
          <div className="eyebrow light">
            <i /> A simple process
          </div>
          <h2>
            Expert help, without the
            <br />
            runaround.
          </h2>
        </div>

        <div className="steps">
          {steps.map((st) => (
            <div key={st.num}>
              <b>{st.num}</b>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
