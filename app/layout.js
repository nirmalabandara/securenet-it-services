import './globals.css';

export const metadata = {
  title: 'SecureNet IT Services | On-site IT Support Across Sri Lanka',
  description:
    'Rapid and dependable on-site IT support for businesses across Sri Lanka. Emergency fixes, network & Wi-Fi setup, managed IT, cybersecurity, and hardware solutions.',
  keywords: [
    'IT support Sri Lanka',
    'on-site IT services Colombo',
    'office network setup',
    'business Wi-Fi Kandy Galle',
    'managed IT services',
    'cybersecurity Sri Lanka',
  ],
  authors: [{ name: 'SecureNet IT Services' }],
  openGraph: {
    title: 'SecureNet IT Services | On-site IT Support Across Sri Lanka',
    description:
      'From urgent fixes to ongoing technology care, SecureNet sends experienced IT professionals directly to your workplace anywhere in Sri Lanka.',
    type: 'website',
    locale: 'en_LK',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#071e42',
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
