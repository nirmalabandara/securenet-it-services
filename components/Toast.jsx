'use client';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <b>✓</b>
      <span>{message}</span>
    </div>
  );
}
