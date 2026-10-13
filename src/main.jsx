const { useEffect, useMemo, useState } = React;

const WHATSAPP = '94776442865';
const EMAIL = 'contact@securenet.com';

const services = [
  { icon: '⌁', title: 'Emergency IT Support', text: 'Rapid on-site support for urgent technical disruptions.', tag: 'Same-day help' },
  { icon: '◎', title: 'Network & Wi-Fi Setup', text: 'Reliable office networking, structured cabling and secure Wi-Fi.', tag: 'Office ready' },
  { icon: '▣', title: 'Managed IT Support', text: 'A dedicated team to keep your technology secure and productive.', tag: 'Ongoing care' },
  { icon: '◈', title: 'Cybersecurity', text: 'Protect your people, systems and data from everyday threats.', tag: 'Stay protected' },
  { icon: '▤', title: 'Hardware & Software', text: 'Installation, upgrades, repairs and business software support.', tag: 'Get equipped' },
  { icon: '◌', title: 'Office IT Setup', text: 'Complete technical setup for new offices, branches and teams.', tag: 'Launch smoothly' },
];

const packages = [
  { name: 'On-demand visit', intro: 'For a technical issue that needs an expert on-site.', points: ['Flexible, one-time support', 'Visit at your preferred time', 'Custom quote before work begins'], accent: false },
  { name: 'Business care', intro: 'For companies that need dependable ongoing IT support.', points: ['Proactive monthly assistance', 'A familiar support team', 'Priority planning for visits'], accent: true },
  { name: 'Project support', intro: 'For office moves, expansions and technology upgrades.', points: ['Defined setup or upgrade plan', 'Scales with your project', 'Clear scope and custom quote'], accent: false },
];

const initialRequests = [
  { id: 'SN-2408', company: 'Lanka Trade Solutions', contact: 'Amara Perera', service: 'Network & Wi-Fi Setup', date: '2026-10-16', status: 'New', created: 'Today' },
  { id: 'SN-2407', company: 'Vertex Holdings', contact: 'Nimal Fernando', service: 'Managed IT Support', date: '2026-10-18', status: 'Contacted', created: 'Today' },
];

function Logo() { return <a className="logo" href="#top" aria-label="SecureNet home"><span className="logo-mark">S</span><span>SECURE<span>NET</span></span></a>; }

function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requests, setRequests] = useState(() => {
    try { return JSON.parse(localStorage.getItem('securenet-requests')) || initialRequests; } catch { return initialRequests; }
  });
  const [toast, setToast] = useState('');

  useEffect(() => localStorage.setItem('securenet-requests', JSON.stringify(requests)), [requests]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 4500); return () => clearTimeout(t); }, [toast]);
  const newCount = useMemo(() => requests.filter(r => r.status === 'New').length, [requests]);
  const openRequest = (service = '') => { setRequestOpen(service || true); };
  const submitRequest = (payload) => {
    const item = { ...payload, id: `SN-${String(2409 + requests.length).padStart(4, '0')}`, status: 'New', created: 'Just now' };
    setRequests([item, ...requests]); setRequestOpen(false); setToast(`Request ${item.id} received. We’ll contact you shortly.`);
  };
  const setStatus = (id, status) => setRequests(requests.map(r => r.id === id ? { ...r, status } : r));

  return <>
    <header className="topbar"><div className="shell"><span>On-site IT support for businesses across Sri Lanka</span><div><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span className="top-separator" /><a href={`https://wa.me/${WHATSAPP}`} target="_blank">WhatsApp: 077 644 2865</a></div></div></header>
    <nav className="nav shell"><Logo /><div className="nav-links"><a href="#services">Services</a><a href="#how">How it works</a><a href="#packages">Packages</a><a href="#coverage">Coverage</a></div><button className="admin-link" onClick={() => setAdminOpen(true)}>Admin portal</button><button className="button button-small" onClick={() => openRequest()}>Request support <span>→</span></button></nav>
    <main id="top">
      <section className="hero"><div className="hero-grid shell"><div className="hero-copy"><div className="eyebrow"><i /> Trusted on-site IT support</div><h1>IT support that<br/><em>shows up</em> for your business.</h1><p>From urgent fixes to ongoing technology care, SecureNet sends experienced IT professionals directly to your workplace—anywhere in Sri Lanka.</p><div className="hero-actions"><button className="button" onClick={() => openRequest()}>Request IT support <span>→</span></button><a href="#services" className="text-link">Explore services <span>↓</span></a></div><div className="trust-row"><span><b>✓</b> Vetted professionals</span><span><b>✓</b> Island-wide coverage</span><span><b>✓</b> Custom quotes</span></div></div><div className="hero-art"><div className="glow glow-one"/><div className="glow glow-two"/><div className="hero-panel"><div className="panel-top"><span className="live-dot"/> On-site support</div><div className="panel-content"><div className="avatar">IT</div><div><strong>Your support team</strong><small>Ready when your business needs us</small></div></div><div className="map-line"><span>Colombo</span><i/><span>Kandy</span><i/><span>Galle</span><i/></div><p>Serving businesses across Sri Lanka</p></div><div className="shape shape-a"/><div className="shape shape-b"/></div></div></section>
      <section className="client-strip"><div className="shell"><span>BUILT FOR BUSINESSES THAT NEED TECHNOLOGY TO WORK</span><div className="sectors"><b>RETAIL</b><b>HEALTHCARE</b><b>FINANCE</b><b>HOSPITALITY</b><b>EDUCATION</b></div></div></section>
      <section id="services" className="section shell"><div className="section-heading"><div><div className="eyebrow navy"><i/> What we do</div><h2>Practical support for<br/>every IT need.</h2></div><p>Your business gets the right expertise for the job, with a clear scope and custom quote before any work begins.</p></div><div className="service-grid">{services.map(s => <article className="service-card" key={s.title}><div className="service-icon">{s.icon}</div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p><button onClick={() => openRequest(s.title)}>Request this service <span>→</span></button></article>)}</div></section>
      <section id="how" className="process"><div className="shell"><div className="process-intro"><div className="eyebrow light"><i/> A simple process</div><h2>Expert help, without the<br/>runaround.</h2></div><div className="steps"><div><b>01</b><h3>Tell us what you need</h3><p>Select a service, share your requirements and choose a preferred time.</p></div><div><b>02</b><h3>Receive a custom quote</h3><p>Our team reviews your request and confirms the right support plan.</p></div><div><b>03</b><h3>We send the right expert</h3><p>A qualified SecureNet professional arrives ready to get things working.</p></div></div></div></section>
      <section id="packages" className="section shell packages"><div className="center-heading"><div className="eyebrow navy"><i/> Flexible by design</div><h2>Support that fits your business.</h2><p>Choose the kind of engagement you need. Every solution is tailored and quoted for your requirements.</p></div><div className="package-grid">{packages.map(p => <article className={`package-card ${p.accent ? 'featured' : ''}`} key={p.name}>{p.accent && <label>Most popular</label>}<h3>{p.name}</h3><p>{p.intro}</p><ul>{p.points.map(x => <li key={x}>✓ <span>{x}</span></li>)}</ul><button className={p.accent ? 'button' : 'outline-button'} onClick={() => openRequest(p.name)}>{p.accent ? 'Get a custom quote' : 'Request support'} <span>→</span></button></article>)}</div></section>
      <section id="coverage" className="coverage"><div className="shell coverage-layout"><div><div className="eyebrow navy"><i/> Island-wide service</div><h2>Wherever you work,<br/>we can support you.</h2><p>Our field team serves businesses throughout Sri Lanka, from city centres to regional operations.</p><a href={`https://wa.me/${WHATSAPP}`} className="text-link dark" target="_blank">Check availability via WhatsApp <span>→</span></a></div><div className="coverage-map"><div className="island">SRI<br/>LANKA</div><span className="pin pin-a">Colombo</span><span className="pin pin-b">Kandy</span><span className="pin pin-c">Galle</span><span className="pin pin-d">Jaffna</span><span className="pin pin-e">Batticaloa</span></div></div></section>
      <section className="cta"><div className="shell"><div><div className="eyebrow light"><i/> Let’s get started</div><h2>Technology issues should not<br/>slow your business down.</h2></div><button className="button button-white" onClick={() => openRequest()}>Request IT support <span>→</span></button></div></section>
    </main>
    <footer><div className="shell footer-main"><Logo/><p>Professional on-site IT support for businesses across Sri Lanka.</p><div><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={`https://wa.me/${WHATSAPP}`} target="_blank">077 644 2865</a></div></div><div className="shell footer-bottom"><span>© 2026 SecureNet IT Services. All rights reserved.</span><button onClick={() => setAdminOpen(true)}>Admin portal</button></div></footer>
    {requestOpen && <RequestModal initialService={typeof requestOpen === 'string' ? requestOpen : ''} onClose={() => setRequestOpen(false)} onSubmit={submitRequest}/>} 
    {adminOpen && <AdminModal requests={requests} newCount={newCount} onClose={() => setAdminOpen(false)} onStatus={setStatus}/>} 
    {toast && <div className="toast"><b>✓</b><span>{toast}</span></div>}
  </>;
}

function RequestModal({ initialService, onClose, onSubmit }) {
  const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', service: initialService, staff: '', location: '', date: '', time: '', notes: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); onSubmit({ company: form.company, contact: form.contact, email: form.email, phone: form.phone, service: form.service || 'General IT Support', staff: form.staff, location: form.location, date: form.date, time: form.time, notes: form.notes }); };
  return <div className="modal-backdrop"><form className="request-modal" onSubmit={submit}><button type="button" className="close" onClick={onClose}>×</button><div className="eyebrow navy"><i/> Request IT support</div><h2>Tell us what your business needs.</h2><p>We will review your request and send a custom quote.</p><div className="form-grid"><label>Company name<input required name="company" value={form.company} onChange={update} placeholder="Your company"/></label><label>Your name<input required name="contact" value={form.contact} onChange={update} placeholder="Full name"/></label><label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label><label>Phone number<input required name="phone" value={form.phone} onChange={update} placeholder="07X XXX XXXX"/></label><label>Service needed<select required name="service" value={form.service} onChange={update}><option value="">Choose a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>On-demand visit</option><option>Business care</option><option>Project support</option></select></label><label>Company size<select name="staff" value={form.staff} onChange={update}><option value="">Choose size</option><option>1–10 people</option><option>11–50 people</option><option>51–200 people</option><option>200+ people</option></select></label><label>Business location<input required name="location" value={form.location} onChange={update} placeholder="City / district"/></label><label>Preferred visit date<input required type="date" name="date" value={form.date} onChange={update}/></label><label className="full">Preferred time<select name="time" value={form.time} onChange={update}><option value="">Choose a time</option><option>Morning (8am–12pm)</option><option>Afternoon (12pm–4pm)</option><option>Evening (4pm–6pm)</option></select></label><label className="full">Tell us more<textarea name="notes" value={form.notes} onChange={update} placeholder="Describe the IT issue or requirements..." rows="3"/></label></div><button className="button form-button">Submit request <span>→</span></button></form></div>;
}

function AdminModal({ requests, newCount, onClose, onStatus }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? requests : requests.filter(r => r.status === filter);
  return <div className="modal-backdrop admin-backdrop"><div className="admin-modal"><button className="close" onClick={onClose}>×</button><aside><Logo/><div className="admin-user"><span>SN</span><div><b>SecureNet Admin</b><small>Administrator</small></div></div><nav><button className="active">▦ Requests {newCount > 0 && <em>{newCount}</em>}</button><button>◴ Activity</button><button>⚙ Settings</button></nav><small className="demo-note">Demo dashboard<br/>Requests are stored in this browser.</small></aside><section className="admin-content"><div className="admin-title"><div><span>ADMIN PORTAL</span><h2>Support requests</h2><p>Review and manage incoming customer requests.</p></div><button className="outline-button" onClick={onClose}>Back to website</button></div><div className="request-tabs">{['All','New','Contacted','Quoted','Closed'].map(x => <button onClick={() => setFilter(x)} className={filter === x ? 'selected' : ''} key={x}>{x}{x === 'New' && newCount > 0 ? ` (${newCount})` : ''}</button>)}</div><div className="request-table"><div className="table-head"><span>REQUEST</span><span>COMPANY / CONTACT</span><span>SERVICE</span><span>VISIT DATE</span><span>STATUS</span><span></span></div>{filtered.length ? filtered.map(r => <div className="table-row" key={r.id}><span><b>{r.id}</b><small>{r.created}</small></span><span><b>{r.company}</b><small>{r.contact}</small></span><span>{r.service}</span><span>{r.date || 'To be confirmed'}</span><span><select aria-label={`Status for ${r.id}`} value={r.status} onChange={e => onStatus(r.id, e.target.value)} className={`status ${r.status.toLowerCase()}`}><option>New</option><option>Contacted</option><option>Quoted</option><option>Closed</option></select></span><span>›</span></div>) : <div className="empty">No {filter.toLowerCase()} requests yet.</div>}</div></section></div></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
