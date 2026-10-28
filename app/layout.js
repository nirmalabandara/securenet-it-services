import './globals.css';

export const metadata = {
  title: 'SecureNet Technologies | Web & Software Engineering Studio Colombo',
  description:
    'Colombo engineering studio for web platforms, workplace IT support, payment integration, and practical business systems.',
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
      'Web platforms, workplace IT support, payment integration, and practical business systems from Colombo.',
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
