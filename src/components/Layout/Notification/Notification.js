import React from 'react';
import './Notification.scss';

export default function Notification( props ) {
  const { text, status, className } = props;
  return (
    <div className={`Notification ${status} ${className}`}>{ text }</div>
  )
}
