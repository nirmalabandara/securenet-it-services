'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientStrip from '@/components/ClientStrip';
import AboutShowcase from '@/components/AboutShowcase';
import Services from '@/components/Services';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import Coverage from '@/components/Coverage';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';
import AdminModal from '@/components/AdminModal';
import Toast from '@/components/Toast';
import { initialRequests } from '@/lib/constants';

export default function HomePage() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requests, setRequests] = useState(initialRequests);
  const [toast, setToast] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Load saved requests from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('securenet-requests');
      if (saved) {
        setRequests(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  // Save requests to localStorage when updated
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('securenet-requests', JSON.stringify(requests));
    } catch (e) {
      console.warn('Could not write to localStorage', e);
    }
  }, [requests, isMounted]);

  // Toast auto-dismissal
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  const newCount = useMemo(
    () => requests.filter((r) => r.status === 'New').length,
    [requests]
  );

  const openRequest = (service = '') => {
    setRequestOpen(service || true);
  };

  const submitRequest = (payload) => {
    const nextNumber = 2409 + requests.length;
    const item = {
      ...payload,
      id: `SN-${String(nextNumber).padStart(4, '0')}`,
      status: 'New',
      created: 'Just now',
    };

    setRequests([item, ...requests]);
    setRequestOpen(false);
    setToast(`Request ${item.id} received. Our IT dispatch team will contact you shortly.`);
  };

  const setStatus = (id, newStatus) => {
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setToast(`Updated ticket ${id} status to "${newStatus}"`);
  };

  return (
    <>
      <Navbar
        onOpenRequest={openRequest}
      />

      <main id="top">
        <Hero onOpenRequest={openRequest} />
        <ClientStrip />
        <AboutShowcase onOpenRequest={openRequest} />
        <Services onOpenRequest={openRequest} />
        <PortfolioShowcase onOpenRequest={openRequest} />
        <Process />
        <Packages onOpenRequest={openRequest} />
        <Coverage onOpenRequest={openRequest} />
        <CtaBanner onOpenRequest={openRequest} />
      </main>

      <Footer />

      {requestOpen && (
        <RequestModal
          initialService={typeof requestOpen === 'string' ? requestOpen : ''}
          onClose={() => setRequestOpen(false)}
          onSubmit={submitRequest}
        />
      )}

      {adminOpen && (
        <AdminModal
          requests={requests}
          newCount={newCount}
          onClose={() => setAdminOpen(false)}
          onStatus={setStatus}
        />
      )}

      <Toast message={toast} />
    </>
  );
}
