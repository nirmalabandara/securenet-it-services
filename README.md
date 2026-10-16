# SecureNet IT Services

> **Professional on-site IT support for businesses across Sri Lanka.**

SecureNet provides rapid, reliable, and enterprise-grade on-site technology support for small-to-medium businesses and enterprises. From network setups and urgent hardware fixes to ongoing managed IT contracts, our field team supports businesses island-wide.

---

## 🚀 Features

- **Public Landing Page**:
  - **Hero & Value Proposition**: Clear overview of on-site IT capabilities and trust badges.
  - **Service Offerings**: Emergency IT Support, Network & Wi-Fi Setup, Managed IT, Cybersecurity, Hardware/Software Support, and Office IT Setups.
  - **Engagement Packages**: Flexible On-demand Visits, Business Care subscriptions, and Custom Project Support.
  - **Island-wide Coverage Map**: Highlighting operations across Colombo, Kandy, Galle, Jaffna, Batticaloa, and beyond.
  - **Support Request Modal**: Interactive quotation and booking form collecting contact details, company size, service tier, preferred date/time, and problem descriptions.

- **Private Admin Portal (`/admin`)**:
  - Secure, hidden management interface accessible directly via `/admin`.
  - Filter incoming requests by status (`All`, `New`, `Contacted`, `Quoted`, `Closed`).
  - Search requests by ticket ID, company, contact name, or service.
  - Update ticket statuses and manage customer interactions.
  - Data persisted in local storage with API support.

- **Modern Stack**:
  - Built with **Next.js (App Router)** and **React**.
  - Optimized for fast load times and clean responsiveness across desktop and mobile devices.
  - Designed for straightforward deployment on **Vercel**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: Modern vanilla CSS with responsive layout grids & custom variables
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
├── app/
│   ├── admin/
│   │   └── page.js           # Admin portal dashboard
│   ├── api/
│   │   └── requests/
│   │       └── route.js      # API route for handling service requests
│   ├── globals.css           # Global application styles
│   ├── layout.js             # Root HTML layout & metadata
│   └── page.js               # Main public landing page
├── components/
│   ├── AdminModal.jsx        # Admin dashboard modal
│   ├── ClientStrip.jsx       # Industry trust strip
│   ├── Coverage.jsx          # Island-wide coverage section & map
│   ├── CtaBanner.jsx         # Bottom call-to-action banner
│   ├── Footer.jsx            # Application footer
│   ├── Hero.jsx              # Hero section with quick actions
│   ├── Logo.jsx              # Brand logo component
│   ├── Navbar.jsx            # Top bar and navigation header
│   ├── Packages.jsx          # Service tier cards
│   ├── Process.jsx           # 3-step workflow section
│   ├── RequestModal.jsx      # Customer booking / quote request form
│   ├── Services.jsx          # Grid of available IT services
│   └── Toast.jsx             # Notification toast alerts
├── lib/
│   └── constants.js          # Shared constants, contact info, and initial data
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
└── README.md
```

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nirmalabandara/securenet-it-services.git
   cd securenet-it-services
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔒 Accessing the Admin Portal

The Admin Portal button is intentionally hidden from public view in the website header and footer. Authorized personnel can access the management portal directly by navigating to:

```text
http://localhost:3000/admin   (or your production domain /admin)
```

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is proprietary and developed for SecureNet IT Services. All rights reserved.
