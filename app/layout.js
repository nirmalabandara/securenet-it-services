import './globals.css';

export const metadata = {
  title: 'SecureNet Technologies | Web & Software Engineering Studio Colombo',
  description:
    'Colombo Engineering Studio delivering bespoke web platforms, e-commerce with PayHere & Koko BNPL, WhatsApp automation, direct villa booking engines, and < 2h architecture reviews.',
  keywords: [
    'Web development Sri Lanka',
    'Next.js developers Colombo',
    'PayHere integration Sri Lanka',
    'Koko BNPL e-commerce',
    'WhatsApp automation Notify.lk',
    'villa booking engine Sri Lanka',
    'Web POS software Sri Lanka',
    'offshore engineering pods',
    'MikroTik network architecture',
    'UniFi VLAN security consulting',
  ],
  authors: [{ name: 'SecureNet Technologies' }],
  openGraph: {
    title: 'SecureNet Technologies | Colombo Engineering Studio & Software Platforms',
    description:
      'Turnkey web engineering: < 2h architecture review, 7-day web platform delivery, PayHere/Koko checkouts, and offshore engineering pods.',
    type: 'website',
    locale: 'en_LK',
  },
  icons: {
    icon: '/securenet-icon.svg',
    shortcut: '/securenet-icon.svg',
    apple: '/securenet-app-icon.svg',
  },
};

export const viewport = {
  themeColor: '#0c0e12',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('securenet-theme')||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
