'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function AdminModal({
  requests = [],
  newCount = 0,
  onClose,
  onStatus,
  onDelete,
}) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
    <div
      className="modal-backdrop admin-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-portal-title"
    >
      <div className="admin-modal">
        <button
          type="button"
          className="close"
          onClick={onClose}
          aria-label="Close Admin portal"
        >
          ×
        </button>

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
            <button
              type="button"
              onClick={() => alert('Activity logging is active. All status updates are stored locally.')}
            >
              ◴ Activity
            </button>
            <button
              type="button"
              onClick={() => alert('SecureNet Settings: Island-wide dispatch active.')}
            >
              ⚙ Settings
            </button>
          </nav>

          <small className="demo-note">
            Next.js Admin Dashboard
            <br />
            Data persists in your browser.
          </small>
        </aside>

        <section className="admin-content">
          <div className="admin-title">
            <div>
              <span>ADMIN PORTAL</span>
              <h2 id="admin-portal-title">Support requests</h2>
              <p>Review, filter and manage incoming client IT service requests.</p>
            </div>
            <button type="button" className="outline-button" onClick={onClose}>
              Back to website
            </button>
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
                width: '240px',
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
                      onChange={(e) => onStatus(r.id, e.target.value)}
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
    </div>
  );
}
