export default function ClientStrip() {
  const sectors = ['RETAIL', 'HEALTHCARE', 'FINANCE', 'HOSPITALITY', 'EDUCATION'];

  return (
    <section className="client-strip">
      <div className="shell">
        <span>BUILT FOR BUSINESSES THAT NEED TECHNOLOGY TO WORK</span>
        <div className="sectors">
          {sectors.map((sec) => (
            <b key={sec}>{sec}</b>
          ))}
        </div>
      </div>
    </section>
  );
}
