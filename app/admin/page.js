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

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f9', padding: '30px 16px' }}>
      <div
        className="admin-modal"
        style={{ margin: '0 auto', minHeight: '80vh', maxWidth: '1200px' }}
      >
        <aside>
          <Logo />
          <div className="admin-user">
            <span>SN</span>
            <div>
              <b>SecureNet Admin</b>
              <small>Administrator</small>
            </div>
          </div>

          <nav>
            <button type="button" className="active">
              ▦ Requests {newCount > 0 && <em>{newCount}</em>}
            </button>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: '#b5c4db',
                padding: '10px 12px',
                fontSize: '12px',
                fontWeight: 600,
                display: 'block',
                borderRadius: '6px',
              }}
            >
              ← Back to Main Website
            </Link>
          </nav>

          <small className="demo-note">
            Next.js Dedicated Admin
            <br />
            Data persists in your browser.
          </small>
        </aside>

        <section className="admin-content">
          <div className="admin-title">
            <div>
              <span>ADMIN PORTAL</span>
              <h2>Support requests</h2>
              <p>Manage and process client support inquiries island-wide.</p>
            </div>
            <Link href="/" className="outline-button">
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
              placeholder="Search by company, ID, or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #d9e2ec',
                fontSize: '12px',
                width: '260px',
              }}
            />
          </div>

          <div className="request-table" style={{ marginTop: '16px' }}>
            <div className="table-head">
              <span>REQUEST</span>
              <span>COMPANY / CONTACT</span>
              <span>SERVICE</span>
              <span>VISIT DATE</span>
              <span>STATUS</span>
              <span>DETAILS</span>
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
                    <b>{r.date || 'To be confirmed'}</b>
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
                        color: '#135bc5',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '4px',
                      }}
                      title="View request details"
                    >
                      {selectedDetail?.id === r.id ? '▼' : '›'}
                    </button>
                  </span>
                </div>
              ))
            ) : (
              <div className="empty">
                No {filter.toLowerCase()} requests matching your search.
              </div>
            )}
          </div>

          {selectedDetail && (
            <div
              style={{
                marginTop: '18px',
                background: '#ffffff',
                border: '1px solid #dce4ef',
                borderRadius: '8px',
                padding: '20px 24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
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
                <h4 style={{ margin: 0, color: '#071e42', fontSize: '15px' }}>
                  Request Details — {selectedDetail.id} ({selectedDetail.company})
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedDetail(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#62718a',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  ✕
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  fontSize: '12px',
                  color: '#495a72',
                }}
              >
                <div>
                  <strong>Contact Name:</strong> {selectedDetail.contact}
                </div>
                <div>
                  <strong>Email:</strong> {selectedDetail.email || 'N/A'}
                </div>
                <div>
                  <strong>Phone:</strong> {selectedDetail.phone || 'N/A'}
                </div>
                <div>
                  <strong>Location:</strong> {selectedDetail.location || 'N/A'}
                </div>
                <div>
                  <strong>Company Size:</strong> {selectedDetail.staff || 'N/A'}
                </div>
                <div>
                  <strong>Preferred Time:</strong> {selectedDetail.time || 'Flexible'}
                </div>
              </div>

              {selectedDetail.notes && (
                <div
                  style={{
                    marginTop: '14px',
                    padding: '12px',
                    background: '#f8fafc',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#334155',
                  }}
                >
                  <strong>Customer Notes:</strong> {selectedDetail.notes}
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
