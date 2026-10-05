import React from 'react';
import { CheckCircle2, Clock, Check, AlertCircle, WifiOff } from 'lucide-react';

export default function StatusBadge({ status, size = 'normal' }) {
  const normStatus = (status || '').toLowerCase().replace(/\s+/g, '-');

  let config = {
    className: 'status-badge submitted',
    icon: <CheckCircle2 size={13} />,
    label: status
  };

  if (normStatus === 'submitted') {
    config = {
      className: 'status-badge submitted',
      icon: <CheckCircle2 size={13} />,
      label: 'Submitted'
    };
  } else if (normStatus === 'under-review' || normStatus === 'in-progress') {
    config = {
      className: 'status-badge under-review',
      icon: <Clock size={13} />,
      label: status || 'Under Review'
    };
  } else if (normStatus === 'resolved' || normStatus === 'completed') {
    config = {
      className: 'status-badge resolved',
      icon: <Check size={13} />,
      label: status || 'Resolved'
    };
  } else if (normStatus === 'pending') {
    config = {
      className: 'status-badge pending',
      icon: <AlertCircle size={13} />,
      label: 'Pending'
    };
  } else if (normStatus === 'offline' || normStatus === 'offline-mode') {
    config = {
      className: 'status-badge offline',
      icon: <WifiOff size={13} />,
      label: 'Offline Mode'
    };
  }

  return (
    <span className={config.className} style={size === 'sm' ? { fontSize: '11px', padding: '2px 8px' } : {}}>
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
}
