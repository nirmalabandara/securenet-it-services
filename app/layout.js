import './globals.css';

export const metadata = {
  title: 'SecureNet Technologies | On-Site IT, Digital Engineering & Software Solutions Sri Lanka',
  description:
    'Rapid on-site IT support across Sri Lanka (< 2h in Colombo) and bespoke digital engineering: PayHere/Koko e-commerce, WhatsApp automation, boutique hotel booking engines, ERP portals, and offshore engineering pods.',
  keywords: [
    'IT support Sri Lanka',
    'on-site IT services Colombo',
    'PayHere integration Sri Lanka',
    'Koko BNPL e-commerce',
    'WhatsApp automation Notify.lk',
    'villa booking engine Sri Lanka',
    'custom ERP software Sri Lanka',
    'Next.js developers Sri Lanka',
    'offshore engineering pods',
    'office network setup UniFi',
  ],
  authors: [{ name: 'SecureNet Technologies' }],
  openGraph: {
    title: 'SecureNet Technologies | On-Site IT & Digital Product Engineering',
    description:
      'From urgent physical IT dispatch across Sri Lanka to high-converting e-commerce, trilingual WhatsApp bots, and direct villa booking platforms.',
    type: 'website',
    locale: 'en_LK',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#0b0d10',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
