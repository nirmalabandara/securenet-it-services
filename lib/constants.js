export const WHATSAPP = '94776442865';
export const WHATSAPP_DISPLAY = '077 644 2865';
export const EMAIL = 'contact@securenet.com';
export const PHONE_DISPLAY = '+94 (77) 644 2865';
export const ADDRESS_PRIMARY = 'Level 14, West Tower, World Trade Center, Colombo 01';

export const proofMetrics = [
  { value: '47+', label: 'Enterprise & SMB clients' },
  { value: '< 2h', label: 'Field dispatch in Colombo' },
  { value: 'LKR 140M+', label: 'Local payment gateway volume' },
  { value: '5 Cities', label: 'Island-wide on-site hubs' },
  { value: '+05:30', label: 'IST global remote bridge' },
];

export const services = [
  // --- Digital Engineering & Software Solutions ---
  {
    id: 'ecommerce-payments',
    category: 'digital',
    featured: true,
    icon: 'cart',
    title: 'High-Converting E-Commerce & Local Payment Solutions',
    tag: 'PayHere · Koko · Mintpay · IPG',
    summary: 'Turn visitors into paying customers with Sri Lanka-native checkouts and BNPL options.',
    description:
      'Most local SMBs lose sales at checkout due to clunky payment flows. We build headless, ultra-fast online stores optimized for Dialog and Mobitel 4G mobile connections, fully integrated with all major Sri Lankan payment gateways and BNPL providers.',
    techStack: ['PayHere', 'WebXPay', 'Commercial Bank IPG', 'Sampath IPG', 'Genie', 'FriMi', 'Mintpay', 'Koko'],
    features: [
      'Seamless Sri Lankan IPG integration (Commercial Bank, Sampath, PayHere, WebXPay)',
      'Built-in BNPL integration for Mintpay & Koko to boost average order value',
      'Headless Next.js architecture engineered for instantaneous mobile 4G loading',
      'Automated inventory sync and SMS order confirmations',
    ],
  },
  {
    id: 'whatsapp-automation',
    category: 'digital',
    featured: true,
    icon: 'message',
    title: 'WhatsApp Business & Bulk SMS Automation',
    tag: 'Notify.lk · Dialog · Multi-lingual AI',
    summary: 'Automate sales closures, dispatch alerts, and 24/7 customer support over WhatsApp and SMS.',
    description:
      'In Sri Lanka, customer trust and sales conversions happen directly on WhatsApp. We turn your WhatsApp channel into an automated sales and support engine, backed by domestic SMS gateways for transactional delivery and instant OTP verification.',
    techStack: ['WhatsApp Cloud API', 'Notify.lk', 'Dialog SMS Gateway', 'Textware', 'OpenAI / Claude API'],
    features: [
      'Automated web order & shipping notifications via WhatsApp and SMS',
      'Trilingual AI chatbots (English, Sinhala, Tamil) for FAQ handling and lead capture',
      'Instant OTP verification systems for fraud prevention and customer authentication',
      'Broadcast campaign scheduling with full delivery and read-rate analytics',
    ],
  },
  {
    id: 'hospitality-booking',
    category: 'digital',
    featured: true,
    icon: 'hotel',
    title: 'Tourism, Villa & Boutique Hotel Booking Engines',
    tag: 'Zero 20% OTA Fee · Multi-Currency',
    summary: 'Direct booking platforms for Sri Lankan boutique villas, surf lodges, and tour operators.',
    description:
      'Stop paying 15% to 20% commission on every room to Booking.com and Airbnb. We engineer high-converting direct booking engines with real-time calendar syncing, multi-currency checkout (USD, EUR, GBP, LKR), and custom tour itinerary builders.',
    techStack: ['Next.js 16', 'Stripe', 'Local Merchant IPG', 'iCal Channel Sync', 'Live Weather API'],
    features: [
      'Zero-commission direct booking engine tailored for Mirissa, Ahangama, Ella, and Sigiriya properties',
      'Multi-currency pricing and checkout in USD, EUR, GBP, and LKR',
      'Two-way iCal synchronization with Airbnb, Booking.com, and Agoda to prevent double bookings',
      'Interactive custom itinerary builder for inbound travel agencies and surf camps',
    ],
  },
  {
    id: 'custom-erp-portals',
    category: 'digital',
    featured: false,
    icon: 'grid',
    title: 'Custom Business Portals & ERP/CRM for SMBs',
    tag: 'Multi-Branch · Web POS · Invoicing',
    summary: 'Replace fragile Excel sheets with clean, high-performance web systems tailored to your operations.',
    description:
      'Factories, distributors, retail chains, and medical clinics across Sri Lanka need software that matches their real-world workflow. We develop bespoke ERP and CRM systems that give you live stock visibility and automated invoicing from anywhere.',
    techStack: ['PostgreSQL', 'Node.js', 'Next.js', 'Redis', 'Local Tax Engine'],
    features: [
      'Multi-warehouse and multi-branch real-time inventory tracking',
      'Fast web-based POS compliant with local receipts, VAT, and SVAT guidelines',
      'Client portals for quotation approval, real-time dispatch tracking, and PDF invoicing',
      'Granular role-based permissions for cashier, manager, and auditor accounts',
    ],
  },
  {
    id: 'b2b-exporters',
    category: 'digital',
    featured: false,
    icon: 'globe',
    title: 'Corporate Websites for Exporters & B2B',
    tag: 'Linear-Grade UX · RFQ Engine',
    summary: 'World-class corporate digital flagships designed to win international buyers across the US, EU, and Gulf.',
    description:
      'Sri Lankan exporters of Ceylon Tea, Cinnamon, Apparel, Gems, Coconut products, and Freight Forwarding require enterprise digital credibility to win multi-million dollar international contracts. We build Apple-grade corporate platforms equipped with direct Request for Quote (RFQ) engines.',
    techStack: ['Next.js 16', 'Tailored Typography', 'Multilingual CMS', 'Sanity/Strapi', 'RFQ Pipeline'],
    features: [
      'Apple and Linear-grade design aesthetic that commands immediate international respect',
      'Multilingual support for English, Arabic, French, and German markets',
      'Interactive specification catalogs with integrated B2B RFQ inquiry workflows',
      'Global CDN deployment ensuring sub-second page loads across Europe, Americas, and the Middle East',
    ],
  },
  {
    id: 'mobile-apps',
    category: 'digital',
    featured: false,
    icon: 'phone',
    title: 'Cross-Platform Mobile App Development',
    tag: 'React Native · Flutter · iOS & Android',
    summary: 'Bespoke mobile applications for on-demand logistics, loyalty systems, and internal field teams.',
    description:
      'Whether you need a dedicated customer mobile app for retail orders or a rugged field-worker tool for warehouse pickers and drivers, we build cross-platform mobile apps with offline capability and instant push notifications.',
    techStack: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'Apple / Google App Stores'],
    features: [
      'Single codebase delivering native-feel experiences across iOS and Android',
      'Offline-first data caching for areas with unstable mobile connectivity',
      'Native hardware integration (Bluetooth receipt printers, camera barcode scanners, GPS tracking)',
      'Automated App Store and Google Play deployment pipelines',
    ],
  },
  {
    id: 'offshore-development',
    category: 'digital',
    featured: false,
    icon: 'cpu',
    title: 'Offshore & Remote Engineering Pods',
    tag: '+05:30 IST · $1,500 – $3,500 / Dev / Mo',
    summary: 'Hire elite Sri Lankan Next.js, React, and Node engineers with smooth timezone overlap.',
    description:
      'Sri Lanka sits in the optimal +05:30 UTC timezone, allowing seamless real-time overlap with Australia/NZ, Singapore, Dubai/UAE, and the UK/Europe. Augment your overseas startup team or commission a full MVP sprint built in 3 to 4 weeks.',
    techStack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS / Vercel'],
    features: [
      'Dedicated engineering pods at predictable monthly retainers ($1,500 to $3,500 per dev/month)',
      'Timezone overlap with London (4–5 hours), Dubai (6 hours), Singapore (6 hours), and Sydney (5 hours)',
      'Rapid MVP sprint delivery for overseas tech startups within 3 to 4 weeks',
      'Fluent English-speaking senior engineers working in agile sprints via GitHub & Slack',
    ],
  },

  // --- On-Site IT Infrastructure & Field Support ---
  {
    id: 'emergency-it',
    category: 'infrastructure',
    featured: true,
    icon: 'zap',
    title: 'Emergency IT Support & Incident Dispatch',
    tag: '< 2h Response · Same-Day On-Site',
    summary: 'Rapid field deployment for mission-critical network, server, and system outages.',
    description:
      'When your payment terminal, main server, or office connection goes down, every minute costs money. SecureNet dispatches certified on-site engineers directly to your commercial premises with replacement hardware and diagnostics.',
    techStack: ['Hardware Diagnostics', 'Disaster Recovery', 'Server Restore', 'Failover Systems'],
    features: [
      'Under 2-hour emergency dispatch in Colombo; same-day response in Kandy and Galle',
      'Certified systems engineers equipped with portable diagnostic tools and backup components',
      'Immediate triage for POS downtime, server lockouts, and network collapses',
      'Comprehensive post-incident RCA (Root Cause Analysis) report',
    ],
  },
  {
    id: 'network-wifi',
    category: 'infrastructure',
    featured: false,
    icon: 'wifi',
    title: 'Enterprise Network & High-Density Wi-Fi',
    tag: 'Structured Cabling · UniFi · Mikrotik',
    summary: 'Robust office networking, rack cabling, and seamless Wi-Fi coverage across all floors.',
    description:
      'Eliminate dead zones, dropped Zoom calls, and messy server racks. We design, deploy, and manage enterprise network topologies using Ubiquiti UniFi, Mikrotik, and Cisco hardware tailored to high-density offices and hotels.',
    techStack: ['Ubiquiti UniFi', 'Mikrotik RouterOS', 'Cisco', 'Cat6A / Fiber', 'VLAN Segmentation'],
    features: [
      'End-to-end structured cabling, patch panel dressing, and server rack installations',
      'Guest Wi-Fi captive portals with speed-throttling and local voucher generation',
      'Isolated VLAN architecture separating sensitive POS/payment traffic from staff and guests',
      'Dual-ISP automatic failover configuration (e.g. SLT Fibre + Dialog 4G fallback)',
    ],
  },
  {
    id: 'managed-it',
    category: 'infrastructure',
    featured: false,
    icon: 'shield',
    title: 'Managed IT Support & Ongoing Workplace Care',
    tag: 'Proactive SLA · Helpdesk · Fleet Care',
    summary: 'A dedicated IT department supporting your workstations, printers, and cloud infrastructure.',
    description:
      'Skip the overhead of hiring an in-house IT person. Our managed service provides your staff with rapid remote helpdesk assistance, scheduled weekly preventative maintenance visits, and complete fleet health tracking.',
    techStack: ['Remote Helpdesk', 'MDM Fleet Management', 'Automated Patching', 'Asset Inventory'],
    features: [
      'Scheduled weekly/bi-weekly preventative maintenance visits by a dedicated engineer',
      'Unlimited remote helpdesk ticket support for everyday staff questions and printer jams',
      'Hardware asset inventory tracking and lifecycle replacement planning',
      'Cloud backup automation for QuickBooks, ERP data, and executive workstations',
    ],
  },
  {
    id: 'cybersecurity',
    category: 'infrastructure',
    featured: false,
    icon: 'lock',
    title: 'Cybersecurity, Endpoint Defense & Compliance',
    tag: 'Ransomware Shield · Firewall · Data Audits',
    summary: 'Protect your people, company secrets, and financial transactions from modern cyber threats.',
    description:
      'Local SMBs are increasingly targeted by ransomware, phishing emails, and malicious insider threats. We harden your perimeter with enterprise firewalls, automated endpoint protection, and employee security awareness training.',
    techStack: ['Next-Gen Firewalls', 'EDR Protection', 'Automated Offsite Backup', 'Audit Reports'],
    features: [
      'Complete security vulnerability assessment of your office network and routers',
      'Automated, immutable 3-2-1 off-site backups protected against ransomware encryption',
      'Zero-trust endpoint protection and phishing prevention across all company laptops',
      'Staff security drills and password vault deployments (Bitwarden / 1Password)',
    ],
  },
  {
    id: 'hardware-software',
    category: 'infrastructure',
    featured: false,
    icon: 'terminal',
    title: 'Workstation Fleet, Hardware & Business Software',
    tag: 'Fleet Procurement · OS Upgrades · Repairs',
    summary: 'Commercial workstation setups, licensed enterprise software, and board-level repairs.',
    description:
      'We supply, configure, and maintain business-grade hardware tailored for accounting teams, designers, and software engineers. We handle clean Windows/macOS provisioning, RAM/SSD upgrades, and software licensing.',
    techStack: ['Dell / Lenovo / HP Fleet', 'macOS MDM', 'Microsoft 365', 'Component Repair'],
    features: [
      'Custom workstation procurement with enterprise warranties and pre-configured corporate images',
      'Microsoft 365, Google Workspace, and licensed accounting software setup',
      'Rapid SSD upgrades and thermal re-pasting to extend existing laptop lifespan',
      'UPS power backup installations to protect systems from local grid brownouts',
    ],
  },
  {
    id: 'office-setup',
    category: 'infrastructure',
    featured: false,
    icon: 'building',
    title: 'Turnkey Office IT Setup & Branch Expansions',
    tag: 'Move-in Ready · Access Control · CCTV',
    summary: 'Everything your new commercial space needs: networking, IP phones, access control, and CCTV.',
    description:
      'Moving into a new office in Colombo, Rajagiriya, or Kandy? We manage the entire technology deployment before your staff walks in, coordinating internet leased lines, biometric access control, CCTV surveillance, and conference room AV.',
    techStack: ['Biometric Access', 'Hikvision CCTV', 'VoIP / IP-PBX', 'Conference Room AV'],
    features: [
      'Complete commercial move coordination with zero operational downtime for staff',
      'Biometric fingerprint/RFID time-and-attendance systems linked to your HR payroll',
      'High-definition IP CCTV camera security with secure remote smartphone viewing',
      'Meeting room video conferencing setup (Zoom Rooms / Google Meet displays)',
    ],
  },
];

export const serviceTiers = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    badge: 'Starter Engine',
    tagline: 'High-performance Next.js site, modern UI/UX, SEO, and WhatsApp inquiry integration.',
    bestFor: 'Local businesses, clinics, cafes, professionals',
    delivery: '7 to 10 days',
    accent: false,
    points: [
      'Bespoke Next.js 16 web application with sub-second page loads',
      'Linear/Apple-grade dark or light precision aesthetics',
      'Direct WhatsApp click-to-chat inquiry flow with prefilled service tags',
      'Complete local SEO setup (Google Business, meta tags, OpenGraph)',
      'Contact inquiry storage with instant email & SMS notifications',
      'Mobile-responsive design optimized for Dialog/Mobitel 4G',
    ],
  },
  {
    id: 'commerce-growth',
    name: 'Commerce & Growth',
    badge: 'Most Popular',
    tagline: 'Custom online store, PayHere/Koko/Mintpay, automated SMS, and inventory dashboard.',
    bestFor: 'Retail, fashion, consumer goods, cosmetics',
    delivery: '2 to 3 weeks',
    accent: true,
    points: [
      'Full headless e-commerce store with frictionless mobile checkout',
      'Integrated Sri Lankan payment gateways (PayHere, WebXPay, Sampath IPG)',
      'Built-in BNPL options (Mintpay & Koko integrations for higher checkout rates)',
      'Automated order confirmation and dispatch alerts via Notify.lk SMS',
      'Real-time inventory management dashboard with low-stock alerts',
      'Discount voucher codes and customer order tracking portal',
    ],
  },
  {
    id: 'hospitality-direct',
    name: 'Hospitality Direct',
    badge: 'Direct Revenue',
    tagline: 'Villa/Hotel booking platform, room management, and international multi-currency payments.',
    bestFor: 'Boutique villas, travel agencies, surf camps, resorts',
    delivery: '3 to 4 weeks',
    accent: false,
    points: [
      'Direct booking engine saving 15%–20% in OTA commissions',
      'Live two-way iCal sync with Booking.com, Airbnb, and Agoda',
      'Multi-currency processing (USD, EUR, GBP, LKR) via Stripe or local IPG',
      'Custom itinerary builder for incoming guest experiences and surf packages',
      'Automated guest pre-arrival emails and WhatsApp welcome messages',
      'High-resolution photo galleries and floorplan tours',
    ],
  },
  {
    id: 'custom-cloud-saas',
    name: 'Custom Cloud SaaS',
    badge: 'Enterprise Scale',
    tagline: 'Bespoke web apps, internal portals, ERP/CRM, and API integrations.',
    bestFor: 'Exporters, enterprise SMBs, foreign startups',
    delivery: '3 to 6 weeks',
    accent: false,
    points: [
      'Tailored ERP, CRM, or client portal matching your exact business workflows',
      'Multi-branch stock tracking, batch numbers, and warehouse dispatch',
      'Web-based POS system with local VAT/SVAT receipt compliance',
      'Role-based permissions (Cashier, Store Manager, Executive, Accountant)',
      'Export quote (RFQ) pipelines for international B2B buyers',
      'Option to retain dedicated offshore engineering pods ($1,500–$3,500/mo)',
    ],
  },
];

export const infrastructurePackages = [
  {
    name: 'On-demand visit',
    intro: 'For immediate technical disruptions requiring a certified engineer on-site.',
    points: [
      'Rapid emergency dispatch across Colombo, Kandy, Galle',
      'Full on-site diagnostic and component triage',
      'Fixed transparent quote before any work begins',
      'Post-incident resolution report provided',
    ],
    accent: false,
  },
  {
    name: 'Business care',
    intro: 'Comprehensive monthly support contract for ongoing workplace peace of mind.',
    points: [
      'Scheduled weekly/bi-weekly on-site preventative maintenance',
      'Unlimited remote helpdesk ticket coverage for all staff',
      'Automated offsite backup for critical ERP & financial databases',
      'Guaranteed SLA priority dispatch for any network interruption',
    ],
    accent: true,
  },
  {
    name: 'Project support',
    intro: 'Turnkey assistance for office relocations, cabling runs, and server setups.',
    points: [
      'Structured Cat6A cabling, patch rack dressing, and UniFi deployment',
      'Biometric access control and CCTV integration',
      'Dual-ISP automatic failover setup (Fibre + 4G)',
      'Zero-downtime weekend commercial migration planning',
    ],
    accent: false,
  },
];

export const packages = serviceTiers; // Default export alias for packages

export const locations = [
  { name: 'Colombo 01–15', response: '< 2 hours', coverage: 'Full on-site dispatch', status: 'live' },
  { name: 'Greater Colombo (Rajagiriya, Nugegoda, Dehiwala)', response: '< 2 hours', coverage: 'Full on-site dispatch', status: 'live' },
  { name: 'Kandy & Central Province', response: 'Same day', coverage: 'Hub stationed engineer', status: 'live' },
  { name: 'Galle & Southern Coast (Mirissa, Weligama)', response: 'Same day', coverage: 'Hub stationed engineer', status: 'live' },
  { name: 'Jaffna & Northern Province', response: 'Priority 24h', coverage: 'Scheduled dispatch', status: 'priority' },
  { name: 'Batticaloa & Eastern Province', response: 'Scheduled', coverage: 'Scheduled dispatch', status: 'priority' },
];

export const globalTimezones = [
  { region: 'United Kingdom & Europe', tz: 'GMT / BST', overlap: '4 – 5 Hours Daily', flag: '🇬🇧 🇪🇺' },
  { region: 'Dubai & UAE / GCC', tz: 'GST (UTC+4)', overlap: '6 – 7 Hours Daily', flag: '🇦🇪 🇸🇦' },
  { region: 'Singapore & ASEAN', tz: 'SGT (UTC+8)', overlap: '6 Hours Daily', flag: '🇸🇬 🇲🇾' },
  { region: 'Australia & New Zealand', tz: 'AEST (UTC+10)', overlap: '5 Hours Daily', flag: '🇦🇺 🇳🇿' },
];

export const initialRequests = [
  {
    id: 'SN-2419',
    company: 'Mirissa Blue Boutique Villa',
    contact: 'Kasun Jayawardena',
    email: 'stay@mirissablue.com',
    phone: '077 450 1199',
    service: 'Tourism, Villa & Boutique Hotel Booking Engines',
    staff: '11–50 people',
    location: 'Mirissa / Weligama',
    date: '2026-10-18',
    time: 'Morning (8am–12pm)',
    notes: 'Need direct booking with USD Stripe payments + Airbnb iCal sync to bypass 18% OTA fees.',
    status: 'New',
    created: '12 min ago',
  },
  {
    id: 'SN-2418',
    company: 'Ceylon Artisanal Spice Co.',
    contact: 'Ruwan Senanayake',
    email: 'ruwan@ceylonspice.lk',
    phone: '071 882 3400',
    service: 'High-Converting E-Commerce & Local Payment Solutions',
    staff: '11–50 people',
    location: 'Colombo 07',
    date: '2026-10-18',
    time: 'Afternoon (12pm–4pm)',
    notes: 'Require PayHere + Koko BNPL integration on our Next.js retail store with Notify.lk SMS.',
    status: 'Contacted',
    created: '1 hour ago',
  },
  {
    id: 'SN-2417',
    company: 'Lanka Logistics Hub',
    contact: 'Dinesh Perera',
    email: 'dinesh@lankahub.lk',
    phone: '077 123 4567',
    service: 'Emergency IT Support & Incident Dispatch',
    staff: '51–200 people',
    location: 'Peliyagoda / Kelaniya',
    date: '2026-10-17',
    time: 'Immediate',
    notes: 'Main distribution warehouse switch rack offline. 40 handheld scanners disconnected.',
    status: 'Dispatched',
    created: '3 hours ago',
  },
  {
    id: 'SN-2416',
    company: 'Aura Health Clinics',
    contact: 'Dr. Shenali De Silva',
    email: 'shenali@auraclinic.lk',
    phone: '070 334 5511',
    service: 'WhatsApp Business & Bulk SMS Automation',
    staff: '1–10 people',
    location: 'Colombo 03',
    date: '2026-10-19',
    time: 'Morning (8am–12pm)',
    notes: 'Need automated appointment reminders and Sinhala/English WhatsApp bot for lab reports.',
    status: 'Scheduled',
    created: 'Yesterday',
  },
];
