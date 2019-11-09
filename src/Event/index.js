import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classes, formatTime } from '../utils';

function Event({ className, event, onMouseDown, onResize }) {
  const { icon, color, cover, name, venue, start, duration } = event;
  const end = start + duration;
  const time = `November ${8 + start / 24 | 0}th, ${formatTime(start)} - ${formatTime(end)} ${end < 12 ? 'A' : 'P'}M`;
  return (
    <div className={classes('Event', className)} style={{
      backgroundImage: `url(${cover})`,
      top: 72 * start,
      height: 72 * duration,
      borderColor: color,
    }} onMouseDown={onMouseDown}>
      <div className="icon" style={{ backgroundColor: color }}>
        <FontAwesomeIcon icon={icon} fixedWidth/>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="time">{time}</div>
        <div className="venue">{venue}</div>
      </div>
      <div className="resize" onMouseDown={onResize}/>
    </div>
  );
}

export default Event;
