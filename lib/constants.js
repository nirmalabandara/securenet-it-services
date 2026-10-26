export const WHATSAPP = '94776442865';
export const WHATSAPP_DISPLAY = '077 644 2865';
export const EMAIL = 'contact@securenet.com';
export const PHONE_DISPLAY = '+94 (77) 644 2865';
export const ADDRESS_PRIMARY = 'World Trade Center, Colombo 01';

export const proofMetrics = [
  { value: '47+', label: 'Local & global clients' },
  { value: '< 2h', label: 'Architecture quote review' },
  { value: 'LKR 140M+', label: 'Gateways processed' },
  { value: '7-Day', label: 'Turnkey web platform delivery' },
  { value: '+05:30', label: 'Global timezone bridge' },
];

export const services = [
  // --- Core Web & Software Engineering (6-7 Services) ---
  {
    id: 'ecommerce-payments',
    category: 'digital',
    featured: true,
    icon: 'cart',
    title: 'E-Commerce & Local Payments',
    tag: 'PayHere · Koko · Mintpay',
    summary: 'Fast online stores with Sri Lankan payment gateways and 3-split BNPL checkouts.',
    description: 'We build fast, mobile-first stores with instant PayHere, Commercial Bank, and Koko BNPL integrations that load under 1 second on local 4G connections.',
    techStack: ['PayHere', 'Koko BNPL', 'Sampath IPG', 'Next.js'],
    caseStudy: {
      client: 'Snap Cap Clothing',
      url: 'https://snapcapclothing.store',
      displayUrl: 'snapcapclothing.store',
      badge: 'Live Storefront',
      summary: 'Turnkey fashion e-commerce storefront with variable SKU management, fast mobile checkout, and cloud hosting.',
    },
    features: [
      'PayHere, Sampath & Commercial Bank card checkout',
      'Koko & Mintpay 3-installment BNPL integration',
      'Instant mobile loading on Dialog and Mobitel 4G',
    ],
  },
  {
    id: 'whatsapp-automation',
    category: 'digital',
    featured: true,
    icon: 'message',
    title: 'WhatsApp & SMS Automation',
    tag: 'Notify.lk · Trilingual Bots',
    summary: 'Automated order dispatch alerts, OTP verification, and 24/7 customer support.',
    description: 'Connect your store to WhatsApp and domestic SMS gateways for instant order updates and trilingual customer assistance.',
    techStack: ['WhatsApp API', 'Notify.lk', 'Dialog SMS', 'AI Bot'],
    features: [
      'Automated order & delivery status alerts on WhatsApp',
      'Trilingual FAQ support in English, Sinhala & Tamil',
      'Instant OTP login and fraud protection',
    ],
  },
  {
    id: 'hospitality-booking',
    category: 'digital',
    featured: true,
    icon: 'hotel',
    title: 'Villa & Hotel Direct Booking',
    tag: '0% OTA Fee · Multi-Currency',
    summary: 'Direct booking engines for boutique villas and hotels across Mirissa, Ahangama, and Ella.',
    description: 'Save 18% in Booking.com and Airbnb commissions with a direct booking platform synced with your international calendar.',
    techStack: ['Stripe', 'Local IPG', '2-Way iCal', 'Next.js'],
    features: [
      'Direct card payments in USD, EUR, GBP and LKR',
      'Two-way sync with Airbnb & Booking.com calendars',
      'Custom itinerary builders for incoming guests',
    ],
  },
  {
    id: 'custom-erp-portals',
    category: 'digital',
    featured: false,
    icon: 'grid',
    title: 'Web POS & Business Portals',
    tag: 'Multi-Branch · Live Stock',
    summary: 'Replace messy spreadsheets with clean inventory, billing, and order tracking portals.',
    description: 'Custom web software for factories, distributors, and clinics needing live stock tracking across branches.',
    techStack: ['PostgreSQL', 'Web POS', 'Next.js', 'Tax Engine'],
    features: [
      'Multi-warehouse stock tracking in real time',
      'Fast web POS compliant with local tax receipts',
      'Client order tracking & invoice generation',
    ],
  },
  {
    id: 'b2b-exporters',
    category: 'digital',
    featured: false,
    icon: 'globe',
    title: 'Exporter Corporate Websites',
    tag: 'Linear-Grade · RFQ Engine',
    summary: 'World-class corporate sites for Ceylon Tea, Cinnamon, Apparel, and Gem exporters.',
    description: 'Enterprise corporate platforms built to close multi-million dollar contracts with international buyers.',
    techStack: ['Next.js', 'Multilingual', 'RFQ Pipeline', 'CDN'],
    features: [
      'Apple and Linear-grade design aesthetic',
      'Direct Request for Quote (RFQ) product catalogs',
      'Multilingual pages in English, Arabic & French',
    ],
  },
  {
    id: 'offshore-development',
    category: 'digital',
    featured: false,
    icon: 'cpu',
    title: 'Offshore Dev Pods (+05:30)',
    tag: '$1,500 – $3,500 / Dev / Mo',
    summary: 'Dedicated Next.js & React engineers with smooth Australia, UK, and Dubai time overlap.',
    description: 'Augment your overseas tech team or ship a working MVP prototype in 3 to 4 weeks.',
    techStack: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    features: [
      'Senior developers on monthly retainers',
      'Timezone overlap with AU, SG, UAE and UK',
      'Rapid 3–4 week startup MVP sprints',
    ],
  },
  // --- Optional Keep: Consulting Add-On (Not an emergency repair hotline) ---
  {
    id: 'network-security-consulting',
    category: 'consulting',
    featured: false,
    icon: 'shield',
    title: 'Commercial Network & Cloud Security Architecture',
    tag: 'MikroTik · UniFi · VLANs',
    summary: 'Architecture consulting for enterprise routing, VLAN isolation, VPN tunnels, and cloud firewalls.',
    description: 'High-level network and security architecture consulting. We audit and architect resilient enterprise topologies using MikroTik and Ubiquiti UniFi with secure dual-WAN failover, zero-trust VLAN segmentation, and encrypted branch-to-cloud tunnels.',
    techStack: ['MikroTik RouterOS', 'UniFi Enterprise', 'VLAN Segmentation', 'WireGuard / IPsec'],
    features: [
      'MikroTik & UniFi topology audits and VLAN isolation plans',
      'Dual-WAN failover routing and branch-to-cloud VPNs',
      'Zero-trust network policy review and firewall hardening',
    ],
  },
];

export const serviceTiers = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    badge: 'Starter',
    tagline: 'Fast Next.js site, modern branding, local SEO, and WhatsApp inquiry flow.',
    bestFor: 'Local businesses, clinics, cafes, professionals',
    delivery: '7–10 days',
    accent: false,
    points: [
      'Custom Next.js web application with sub-second speed',
      'Direct WhatsApp inquiry integration with prefilled service tags',
      'Local Google SEO & mobile optimization for Dialog/Mobitel 4G',
    ],
  },
  {
    id: 'commerce-growth',
    name: 'Commerce & Growth',
    badge: 'Popular',
    tagline: 'Custom online store, PayHere/Koko BNPL, automated SMS, and inventory dashboard.',
    bestFor: 'Retail, fashion, consumer goods, cosmetics',
    delivery: '2–3 weeks',
    accent: true,
    points: [
      'Integrated PayHere, WebXPay & Koko BNPL 3-installment checkout',
      'Automated SMS order dispatch alerts via Notify.lk',
      'Real-time inventory management with low-stock alerts',
    ],
  },
  {
    id: 'hospitality-direct',
    name: 'Hospitality Direct',
    badge: 'Direct Revenue',
    tagline: 'Boutique villa booking engine, zero OTA commissions, and multi-currency checkout.',
    bestFor: 'Boutique villas, surf lodges, resorts, travel agencies',
    delivery: '3–4 weeks',
    accent: false,
    points: [
      'Direct booking engine saving 18% in Airbnb/Booking.com fees',
      'Multi-currency processing in USD, EUR, GBP, and LKR',
      'Two-way iCal sync to prevent double bookings',
    ],
  },
  {
    id: 'custom-cloud-saas',
    name: 'Custom Cloud SaaS',
    badge: 'Enterprise',
    tagline: 'Bespoke web apps, multi-branch ERP, web POS, and offshore engineering pods.',
    bestFor: 'Exporters, multi-branch SMBs, foreign startups',
    delivery: '3–5 weeks',
    accent: false,
    points: [
      'Custom ERP/CRM matching your exact warehouse workflows',
      'Web-based POS compliant with local receipts and tax needs',
      'Option for dedicated offshore developers ($1.5k–$3.5k/mo)',
    ],
  },
];

export const infrastructurePackages = [
  {
    name: 'Turnkey Web Sprint',
    intro: '7-day rapid delivery for fast-moving businesses needing online revenue immediately.',
    points: [
      '< 2h initial architecture & quote scoping session',
      'Production deployment on high-speed global edge CDN',
      'PayHere / Stripe & WhatsApp order automation wired in',
    ],
    accent: false,
  },
  {
    name: 'Growth & Platform Retainer',
    intro: 'Ongoing feature engineering, local payment maintenance, and continuous optimization.',
    points: [
      'Dedicated engineering hours with sprint reviews',
      'Continuous uptime monitoring and security patching',
      'Priority same-day Slack / WhatsApp engineering support',
    ],
    accent: true,
  },
  {
    name: 'Network & Cloud Security Audit',
    intro: 'Architecture consulting for commercial routing, VLANs, and cloud environments.',
    points: [
      'Full MikroTik & UniFi topology architecture review',
      'Zero-trust VLAN segmentation and dual-WAN failover plans',
      'Actionable security hardening report and executive briefing',
    ],
    accent: false,
  },
];

export const packages = serviceTiers;

export const locations = [
  {
    name: 'Colombo Engineering Studio',
    region: 'Colombo 01 · Serving Sri Lanka & Global Clients (+05:30 IST)',
    sla: '< 2h Architecture Review',
    status: 'Live & On-Call',
    scope: 'Island-Wide Digital Delivery · Global Offshore Pods',
  },
];

export const globalTimezones = [
  { region: 'United Kingdom & Europe', tz: 'GMT', overlap: '4 – 5 Hours Daily', flag: '🇬🇧 🇪🇺' },
  { region: 'Dubai & UAE / GCC', tz: 'GST', overlap: '6 – 7 Hours Daily', flag: '🇦🇪 🇸🇦' },
  { region: 'Singapore & ASEAN', tz: 'SGT', overlap: '6 Hours Daily', flag: '🇸🇬 🇲🇾' },
  { region: 'Australia & New Zealand', tz: 'AEST', overlap: '5 Hours Daily', flag: '🇦🇺 🇳🇿' },
];

export const initialRequests = [
  {
    id: 'SN-2419',
    company: 'Mirissa Blue Boutique Villa',
    contact: 'Kasun Jayawardena',
    email: 'stay@mirissablue.com',
    phone: '077 450 1199',
    service: 'Villa & Hotel Direct Booking',
    staff: '11–50 people',
    location: 'Mirissa / Weligama',
    date: '2026-10-18',
    time: 'Morning',
    notes: 'Direct booking engine with USD Stripe checkout + Airbnb iCal sync.',
    status: 'New',
    created: '12 min ago',
  },
  {
    id: 'SN-2418',
    company: 'Ceylon Artisanal Spices',
    contact: 'Ruwan Senanayake',
    email: 'ruwan@ceylonspice.lk',
    phone: '071 882 3400',
    service: 'E-Commerce & Local Payments',
    staff: '11–50 people',
    location: 'Colombo 07',
    date: '2026-10-18',
    time: 'Afternoon',
    notes: 'Require PayHere + Koko BNPL integration with Notify.lk SMS.',
    status: 'Contacted',
    created: '1 hour ago',
  },
  {
    id: 'SN-2417',
    company: 'Lanka Global Exporters',
    contact: 'Dinesh Perera',
    email: 'dinesh@lankaglobal.lk',
    phone: '077 123 4567',
    service: 'Commercial Network & Cloud Security Architecture',
    staff: '51–200 people',
    location: 'Colombo 03',
    date: '2026-10-17',
    time: 'Morning',
    notes: 'MikroTik dual-WAN failover routing and branch-to-cloud VPN setup.',
    status: 'Review Scheduled',
    created: '3 hours ago',
  },
];

export const portfolioProjects = [
  {
    id: 'snapcap-clothing',
    title: 'Snap Cap Clothing',
    client: 'Snap Cap Apparel Studio',
    category: 'E-Commerce Engineering & Managed Cloud',
    tagline: 'High-speed streetwear & apparel storefront with automated catalog & responsive mobile shopping.',
    liveUrl: 'https://snapcapclothing.store',
    displayUrl: 'snapcapclothing.store',
    completionYear: '2026',
    status: 'Live & Managed by SecureNet',
    heroImage: '/images/portfolio/snapcap-dress.jpg',
    images: [
      {
        src: '/images/portfolio/snapcap-dress.jpg',
        title: 'Scarlet Red Cowl-Neck Maxi Dress',
        caption: 'High-resolution editorial catalog & smooth product detail zoom',
        category: 'Evening & Occasion',
        price: 'LKR 5,500',
        badge: 'Featured Drop',
      },
      {
        src: '/images/portfolio/snapcap-jacket.jpg',
        title: 'Contrast-Stripe Zip Track Jacket',
        caption: 'Streetwear outerwear with size variation & SKU inventory tracking',
        category: 'Streetwear Outerwear',
        price: 'LKR 3,500',
        badge: 'Bestseller',
      },
      {
        src: '/images/portfolio/snapcap-pants.jpg',
        title: 'Stone Wide-Leg Drawstring Trousers',
        caption: 'Mobile-first layout with quick-add cart & instant stock validation',
        category: 'Casual Bottoms',
        price: 'LKR 3,800',
        badge: 'New Release',
      },
      {
        src: '/images/portfolio/snapcap-tee.jpg',
        title: 'Pink Butterfly Contrast Baby Tee',
        caption: 'Dynamic image gallery & instantaneous size selection',
        category: 'Graphic Tops',
        price: 'LKR 2,500',
        badge: 'Trending',
      },
    ],
    summary: 'SecureNet engineered a bespoke e-commerce platform for Snap Cap Clothing, replacing off-the-shelf sluggish templates with a tailored WooCommerce storefront designed for sub-second speeds, effortless checkout, and rapid mobile shopping across Sri Lanka and worldwide.',
    deliverables: [
      {
        title: 'Custom Brand Architecture & UI/UX',
        desc: 'Editorial fashion aesthetic with minimal layout overhead, crisp typography, and touch-optimized navigation for mobile shoppers on 4G.',
      },
      {
        title: 'High-Conversion Store Engine',
        desc: 'Optimized product variation matrices (colors, sizes), instant stock validation, dynamic cart drawer, and frictionless checkout.',
      },
      {
        title: 'Payment Gateways & Local Payment Flow',
        desc: 'Integration-ready architecture for direct card checkouts, local bank transfers, and flexible payment gateways.',
      },
      {
        title: 'Sub-Second Cloud Infrastructure & Caching',
        desc: 'Hardened cloud hosting, CDN edge caching, SSL encryption, automated backups, and 99.9% uptime SLA.',
      },
    ],
    metrics: [
      { value: '< 1.1s', label: 'Average Mobile Page Load' },
      { value: '100%', label: 'Mobile Responsive Touch UX' },
      { value: '99.9%', label: 'Infrastructure Uptime SLA' },
      { value: '0-Lag', label: 'Variant & Checkout Speed' },
    ],
    techStack: ['WooCommerce', 'Snap Cap Studio Engine', 'WordPress', 'CDN Cache', 'SSL / Nginx', 'Mobile UX'],
    businessOffer: {
      headline: 'We build the exact same turnkey e-commerce power for your business.',
      subhead: 'Whether you run an apparel label, a retail brand, a cosmetics line, or consumer goods — SecureNet provides the turnkey engineering, payment integrations, and infrastructure to scale your online sales.',
      serviceId: 'E-Commerce & Local Payments',
    },
  },
];
