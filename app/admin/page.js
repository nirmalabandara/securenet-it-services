'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Toast from '@/components/Toast';
import { initialRequests } from '@/lib/constants';

export default function AdminPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedAuth = sessionStorage.getItem('securenet-admin-auth');
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
      }
      const saved = localStorage.getItem('securenet-requests');
      if (saved) {
        setRequests(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read from storage', e);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Default admin access key (customizable via env or local setting)
    if (passwordInput === 'securenet2026' || passwordInput === 'admin@123') {
      setIsAuthenticated(true);
      setAuthError('');
      try {
        sessionStorage.setItem('securenet-admin-auth', 'true');
      } catch (e) {}
    } else {
      setAuthError('Incorrect security key. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem('securenet-admin-auth');
    } catch (e) {}
  };

  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('securenet-requests', JSON.stringify(requests));
    } catch (e) {
      console.warn('Could not write to localStorage', e);
    }
  }, [requests, isMounted]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  const newCount = useMemo(
    () => requests.filter((r) => r.status === 'New').length,
    [requests]
  );

  const setStatus = (id, newStatus) => {
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setToast(`Ticket ${id} status updated to ${newStatus}`);
  };

  const filtered = requests.filter((r) => {
    const matchesFilter = filter === 'All' ? true : r.status === filter;
    const matchesSearch =
      search === '' ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.company.toLowerCase().includes(search.toLowerCase()) ||
      r.contact.toLowerCase().includes(search.toLowerCase()) ||
      r.service.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusCount = (st) => {
    if (st === 'All') return requests.length;
    return requests.filter((r) => r.status === st).length;
  };

  if (!isMounted) return null;

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '420px', width: '100%', background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: '12px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          <div style={{ marginBottom: '24px', textAlign: 'center' }}>
            <Logo />
            <h2 style={{ fontSize: '20px', marginTop: '16px', color: 'var(--t1)' }}>Operations Dispatch Login</h2>
            <p style={{ fontSize: '13px', color: 'var(--t2)', marginTop: '4px' }}>Please enter your authorized security key to access tickets.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                Admin Security Key
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--b1)', background: 'var(--s2)', color: 'var(--t1)', fontSize: '14px' }}
              />
            </div>

            {authError && (
              <div style={{ color: '#ef4444', fontSize: '12px', marginBottom: '16px', fontWeight: 500 }}>
                {authError}
              </div>
            )}

            <button type="submit" className="button" style={{ width: '100%' }}>
              Authenticate &amp; Open Portal
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--t3)', fontSize: '12px', textDecoration: 'none' }}>
              &larr; Return to Live Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '30px 16px' }}>
      <div
        className="admin-modal"
        style={{ margin: '0 auto', minHeight: '80vh', maxWidth: '1200px' }}
      >
        <aside>
          <Logo />
          <div className="admin-user">
            <span>SN</span>
            <div>
              <b>SecureNet Operations</b>
              <small>Dispatch &amp; Dev Desk</small>
            </div>
          </div>

          <nav>
            <button type="button" className="active">
              <span>&#9638; Inquiries &amp; Tickets</span>
              {newCount > 0 && <em>{newCount}</em>}
            </button>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'var(--t2)',
                padding: '10px 12px',
                fontSize: '12px',
                fontWeight: 600,
                display: 'block',
                borderRadius: '6px',
                border: '1px solid var(--b1)',
                background: 'var(--s2)',
                marginTop: '12px',
              }}
            >
              Return to Live Site
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'transparent',
                border: '1px solid var(--b1)',
                color: '#ef4444',
                padding: '10px 12px',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '8px',
              }}
            >
              Sign Out
            </button>
          </nav>

          <small className="demo-note">
            SecureNet Central Console
            <br />
            Data persists in your browser storage.
          </small>
        </aside>

        <section className="admin-content">
          <div className="admin-title">
            <div>
              <span>DISPATCH &amp; DEV OPERATIONS</span>
              <h2>Client inquiries &amp; requests</h2>
              <p>Review, filter and manage incoming Sri Lankan &amp; global inquiries.</p>
            </div>
            <Link href="/" className="button button-ghost button-small">
              Visit Website
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div className="request-tabs" style={{ margin: 0 }}>
              {['All', 'New', 'Contacted', 'Quoted', 'Closed'].map((x) => {
                const count = getStatusCount(x);
                return (
                  <button
                    type="button"
                    key={x}
                    onClick={() => setFilter(x)}
                    className={filter === x ? 'selected' : ''}
                  >
                    {x} {count > 0 ? `(${count})` : ''}
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              placeholder="Search by company, ID, or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid var(--b1)',
                background: 'var(--s2)',
                color: 'var(--t1)',
                fontSize: '12px',
                width: '280px',
              }}
            />
          </div>

          <div className="request-table" style={{ marginTop: '16px' }}>
            <div className="table-head">
              <span>TICKET</span>
              <span>COMPANY / CLIENT</span>
              <span>SERVICE / TIER</span>
              <span>DATE / TIME</span>
              <span>STATUS</span>
              <span>VIEW</span>
            </div>

            {filtered.length ? (
              filtered.map((r) => (
                <div className="table-row" key={r.id}>
                  <span>
                    <b>{r.id}</b>
                    <small>{r.created}</small>
                  </span>
                  <span>
                    <b>{r.company}</b>
                    <small>
                      {r.contact} {r.phone ? `· ${r.phone}` : ''}
                    </small>
                  </span>
                  <span>
                    <b>{r.service}</b>
                    {r.location && <small>{r.location}</small>}
                  </span>
                  <span>
                    <b>{r.date || 'To be scheduled'}</b>
                    {r.time && <small>{r.time}</small>}
                  </span>
                  <span>
                    <select
                      aria-label={`Status for ${r.id}`}
                      value={r.status}
                      onChange={(e) => setStatus(r.id, e.target.value)}
                      className={`status ${r.status.toLowerCase()}`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </span>
                  <span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDetail(selectedDetail?.id === r.id ? null : r)
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--a)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '4px',
                      }}
                      title="Toggle details"
                    >
                      {selectedDetail?.id === r.id ? '▲' : '▼'}
                    </button>
                  </span>
                </div>
              ))
            ) : (
              <div style={{ padding: '32px', textAlign: 'center', color: 'var(--t3)' }}>
                No {filter.toLowerCase()} inquiries found matching &ldquo;{search}&rdquo;.
              </div>
            )}
          </div>

          {selectedDetail && (
            <div
              style={{
                marginTop: '18px',
                background: 'var(--s2)',
                border: '1px solid var(--b1)',
                borderRadius: '8px',
                padding: '20px 24px',
                boxShadow: 'var(--sh-md)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <h4 style={{ margin: 0, color: 'var(--t1)', fontSize: '15px' }}>
                  Inquiry Details &mdash; {selectedDetail.id} ({selectedDetail.company})
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedDetail(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--t2)',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  &times;
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  fontSize: '12px',
                  color: 'var(--t2)',
                }}
              >
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Contact Name:</strong> {selectedDetail.contact}
                </div>
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Email:</strong> {selectedDetail.email || 'N/A'}
                </div>
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Phone:</strong> {selectedDetail.phone || 'N/A'}
                </div>
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Location:</strong> {selectedDetail.location || 'N/A'}
                </div>
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Organization Size:</strong> {selectedDetail.staff || 'N/A'}
                </div>
                <div>
                  <strong style={{ color: 'var(--t1)' }}>Preferred Time:</strong> {selectedDetail.time || 'Flexible'}
                </div>
              </div>

              {selectedDetail.notes && (
                <div
                  style={{
                    marginTop: '14px',
                    padding: '12px',
                    background: 'var(--s1)',
                    border: '1px solid var(--b0)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: 'var(--t1)',
                  }}
                >
                  <strong style={{ color: 'var(--a)' }}>Client Requirements Notes:</strong>{' '}
                  {selectedDetail.notes}
                </div>
              )}
            </div>
          )}
        </section>
      </div>
      <Toast message={toast} />
    </div>
  );
}
