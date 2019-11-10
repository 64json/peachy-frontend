import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classes, formatTime } from '../utils';

function Event({ className, event, onMouseDown, onResize, onClick, active, onChange }) {
  const { category, cover, name, venue, start, duration, memo } = event;
  const end = start + duration;
  const time = `November ${15 + start / 24 | 0}th, ${formatTime(start)} - ${formatTime(end)} ${end < 12 ? 'A' : 'P'}M`;
  return (
    <div className={classes('Event', active && 'active', className)} style={{
      top: 72 * start,
      height: 72 * duration,
      borderColor: category.color,
    }} onMouseDown={onMouseDown}>
      <div className="icon" style={{ backgroundColor: category.color }}>
        <FontAwesomeIcon icon={category.icon} fixedWidth/>
      </div>
      <div className="content" style={{ backgroundColor: category.color }}>
        <div className="cover" style={{
          backgroundImage: `url(${cover})`,
          height: 72 * duration - 8,
        }} onClick={onClick}>
          <div className="info">
            {
              active ? (
                <input className="name" type="text" value={name} onClick={e => e.stopPropagation()}
                       onChange={e => {
                         const name = e.target.value;
                         if (onChange) onChange({ ...event, name });
                       }}/>
              ) : (
                <div className="name">{name}</div>
              )
            }
            <div className="time">{time}</div>
            <div className="venue">{venue}</div>
          </div>
          <div className="resize" onMouseDown={onResize}/>
        </div>
        <textarea className="memo" defaultValue={memo} placeholder="Feel free to leave any requests!"/>
      </div>
    </div>
  );
}

export default Event;
