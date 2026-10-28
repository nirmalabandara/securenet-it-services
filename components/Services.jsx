import Image from 'next/image';
import Link from 'next/link';

export default function Services({ onOpenRequest }) {
  return (
    <section id="services" className="section-services-modern">
      <div className="shell">
        <div className="modern-section-header">
          <div className="section-header-left">
            <span className="section-category-tag">OUR SERVICES</span>
            <h2 className="modern-section-title">
              Work that is easier to<br />
              <em>understand and run</em>
            </h2>
          </div>

          <div className="section-header-right">
            <p>
              Digital platforms and on-site IT support, scoped around the way your team actually works.
            </p>
          </div>
        </div>

        <div className="featured-services-row">
          <div className="featured-img-card">
            <Image
              src="/images/service-cloud.jpg"
              alt="E-Commerce & Local Payment Gateways"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">01 / COMMERCE</span>
              <h3>E-Commerce &amp; Local IPG</h3>
              <p>Online stores, payment integration, and customer communication flows shaped for your business.</p>
              
              <Link href="/portfolio" className="card-case-study-pill">
                Read the Snap Cap case study
              </Link>

              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('E-Commerce & Local Payments') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-data.jpg"
              alt="Villa Direct Booking & Web Portals"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">02 / HOSPITALITY</span>
              <h3>Villa Direct Booking Engines</h3>
              <p>Booking journeys, enquiry flows, and connected calendars for hospitality businesses.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Villa & Hotel Direct Booking') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>

          <div className="featured-img-card">
            <Image
              src="/images/service-cyber.jpg"
              alt="Commercial Network & Cloud Security Architecture"
              width={380}
              height={440}
              className="featured-card-bg"
            />
            <div className="featured-card-overlay">
              <span className="card-badge-glow">03 / ARCHITECTURE</span>
              <h3>Commercial Network &amp; Security</h3>
              <p>Network planning, Wi-Fi, workplace hardware, and security reviews for growing teams.</p>
              <button
                type="button"
                className="card-explore-btn"
                onClick={() => onOpenRequest ? onOpenRequest('Commercial Network & Cloud Security Architecture') : null}
              >
                <span>Request Scope &amp; Quote</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
