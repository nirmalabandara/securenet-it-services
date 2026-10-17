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
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Admin portal"
        >
          &times;
        </button>

        <aside>
          <Logo />
          <div className="admin-user">
            <span>SN</span>
            <div>
              <b>SecureNet Central</b>
              <small>Operations Desk</small>
            </div>
          </div>

          <nav>
            <button type="button" className="active">
              <span>&#9638; Inquiries &amp; Tickets</span>
              {newCount > 0 && <em>{newCount}</em>}
            </button>
            <button
              type="button"
              onClick={() => alert('Activity logging is active. All status updates are saved in browser.')}
            >
              &#9700; Activity Log
            </button>
            <button
              type="button"
              onClick={() => alert('SecureNet Settings: Island-wide dispatch active & +05:30 bridge standby.')}
            >
              &#9881; System Config
            </button>
          </nav>

          <small className="demo-note">
            SecureNet In-Page Console
            <br />
            Data persists in browser storage.
          </small>
        </aside>

        <section className="admin-content">
          <div className="admin-title">
            <div>
              <span>CENTRAL COMMAND</span>
              <h2 id="admin-portal-title">Client inquiries &amp; tickets</h2>
              <p>Review, filter and manage incoming Sri Lankan &amp; global inquiries.</p>
            </div>
            <button type="button" className="button button-ghost button-small" onClick={onClose}>
              Back to site
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
                border: '1px solid var(--b1)',
                background: 'var(--s2)',
                color: 'var(--t1)',
                fontSize: '12px',
                width: '240px',
              }}
            />
          </div>

          <div className="request-table" style={{ marginTop: '16px' }}>
            <div className="table-head">
              <span>TICKET</span>
              <span>COMPANY / CONTACT</span>
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
                        color: 'var(--a)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '4px',
                      }}
                      title="View request details"
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
                  <strong style={{ color: 'var(--t1)' }}>Company Size:</strong> {selectedDetail.staff || 'N/A'}
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
    </div>
  );
}
