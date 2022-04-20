import React from 'react';
import './Notification.scss';

export default function Notification( props ) {
  const { message, status } = props.notification;
  const { className } = props;
  return (
    <div className={`Notification ${status} ${className}`}>{ message }</div>
  )
}
