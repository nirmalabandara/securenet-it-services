import Link from 'next/link';

export default function AboutShowcase({ onOpenRequest }) {
  return (
    <section className="approach-section">
      <div className="shell">
        <div className="approach-header">
          <p className="section-label">The studio</p>
          <h2>Practical systems, planned with the people who will use them.</h2>
          <p>We work with business owners and teams who need a clear scope before technical work begins.</p>
        </div>
        <div className="approach-columns">
          <article>
            <span>For growth work</span>
            <h3>Build an easier way to sell, book, or manage work online.</h3>
            <p>Web platforms, e-commerce, payment integration, messaging, and business portals.</p>
            <Link href="/services">Browse digital services</Link>
          </article>
          <article>
            <span>For workplace operations</span>
            <h3>Keep the systems your team relies on in working order.</h3>
            <p>Network planning, Wi-Fi, hardware support, security reviews, and ongoing IT care.</p>
            <button type="button" onClick={() => onOpenRequest?.('On-site IT support')}>Discuss IT support</button>
          </article>
          </div>
      </div>
    </section>
  );
}
