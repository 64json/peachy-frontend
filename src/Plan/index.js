import React, { useEffect, useRef, useState } from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons/faSeedling';
import Profile from '../Profile';
import Map from '../Map';
import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import coverBeer from '../img/cover_beer.jpg';
import coverBukak from '../img/cover_bukak.jpg';
import coverSchoolfood from '../img/cover_schoolfood.jpg';
import { classes } from '../utils';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faBeer } from '@fortawesome/free-solid-svg-icons/faBeer';
import Event from '../Event';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

function Plan() {
  const calendarRef = useRef(null);
  const [activeDay, setActiveDay] = useState(0);
  const [activeEvent, setActiveEvent] = useState(-1);
  const [events, setEvents] = useState([{
    icon: faMountain,
    color: '#337719',
    cover: coverBukak,
    name: 'Hiking Bukak Skyway',
    venue: '267 Bugaksan-ro, Pyeongchang-dong',
    start: 10,
    duration: 2,
  }, {
    icon: faUtensils,
    color: '#BB3F2E',
    cover: coverSchoolfood,
    name: 'Lunch at School Food',
    venue: '27 Myeongdong 8-gil, Myeongdong 2(i)-ga',
    start: 12.5,
    duration: 1.5,
  }, {
    icon: faBeer,
    color: '#775447',
    cover: coverBeer,
    name: 'Beer at the Best Rooftop in Seoul',
    venue: '15 Gangnam-daero 94-gil, Yeoksam-dong',
    start: 20,
    duration: 3,
  }]);

  useEffect(() => {
    calendarRef.current.scrollTop = 72 * 7;
  }, []);

  return (
    <div className="Plan">
      <div className="sidebar">
        <div className="logo">
          <div className="icon">
            <FontAwesomeIcon icon={faSeedling} fixedWidth/>
          </div>
          <div className="text">Peachy</div>
        </div>
        <div className="trip">
          <div className="cover">
            <div className="info">
              <div>November 8 - 10th</div>
              <div>Seoul, South Korea</div>
            </div>
            <div className="name">
              Weekend Getaway to Seoul
            </div>
          </div>
          <div className="participants">
            <Profile className="profile" picture={profile2} primary="Jake Wilkerson" secondary="and 3 others"
                     traveller/>
            <Profile className="profile" picture={profile1} primary="Jason Park" secondary="living in Seoul"
                     planner/>
          </div>
        </div>
        <div className="chat">
          <div className="history">
            {
              ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam.', 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Excepteur sint occaecat cupidatat non proident.', 'sunt in culpa qui officia deserunt mollit anim id est laborum.'].map((message, i) => (
                <div key={i} className={classes('balloon', i % 2 === 1 ? 'traveller' : 'planner')}>{message}</div>
              ))
            }
          </div>
          <div className="message">
            <input className="input" type="text"/>
            <div className="send">
              <FontAwesomeIcon icon={faPaperPlane} fixedWidth/>
            </div>
          </div>
        </div>
      </div>
      <div className="calendarWrapper" ref={calendarRef}
           onScroll={() => setActiveDay((calendarRef.current.scrollTop + 8) / 1728 | 0)}>
        <div className="calendar">
          <div className="timeline">
            {
              new Array(72).fill(0).map((_, i) => {
                const day = i / 24 | 0;
                const time = i % 24;
                const timeLabel = `${time % 12 === 0 ? 12 : time % 12} ${time < 12 ? 'A' : 'P'}M`;
                return (
                  <div className="timeLabel" key={i}>
                    {timeLabel}
                  </div>
                );
              })
            }
          </div>
          <div className="days">
            {
              new Array(3).fill(0).map((_, day) => {
                return (
                  <div className="dayLabelWrapper" key={day}>
                    <div className={classes('dayLabel', activeDay === day && 'active')}>
                      Nov. {8 + day}th
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="eventContainer">
            {
              events.map((event, i) => (
                <Event className={classes('event', activeEvent === i && 'active')} key={i} event={event}
                       onMouseDown={e => {
                         setActiveEvent(i);
                         const initY = e.target.closest('.event').offsetTop;
                         const offsetY = e.clientY;
                         const onMouseMove = e => {
                           const newY = initY + e.clientY - offsetY;
                           const start = (newY / 72 * 6 | 0) / 6;
                           if (start !== event.start) {
                             const newEvents = events.map((event, j) => i === j ? {
                               ...event,
                               start,
                             } : event);
                             setEvents(newEvents);
                           }
                         };
                         const onMouseUp = e => {
                           setActiveEvent(-1);
                           window.removeEventListener('mousemove', onMouseMove);
                           window.removeEventListener('mouseup', onMouseUp);
                         };
                         window.addEventListener('mousemove', onMouseMove);
                         window.addEventListener('mouseup', onMouseUp);
                       }}
                       onResize={e => {
                         e.stopPropagation();
                         const initHeight = e.target.closest('.event').clientHeight + 8;
                         console.log(initHeight);
                         const offsetY = e.clientY;
                         const onMouseMove = e => {
                           const newHeight = initHeight + e.clientY - offsetY;
                           const duration = (newHeight / 72 * 6 | 0) / 6;
                           if (duration !== event.start) {
                             const newEvents = events.map((event, j) => i === j ? {
                               ...event,
                               duration,
                             } : event);
                             setEvents(newEvents);
                           }
                         };
                         const onMouseUp = e => {
                           setActiveEvent(-1);
                           window.removeEventListener('mousemove', onMouseMove);
                           window.removeEventListener('mouseup', onMouseUp);
                         };
                         window.addEventListener('mousemove', onMouseMove);
                         window.addEventListener('mouseup', onMouseUp);
                       }}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="handle"/>
      </div>
      <div className="mapWrapper">
        {
          // false &&
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfhWtYTdL75LXpJ-TxTKsg3V2RXdHniGQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }}/>}
            containerElement={<div style={{ height: `100%` }}/>}
            mapElement={<div style={{ height: `100%` }}/>}/>
        }
      </div>
      <div className="add">
        <FontAwesomeIcon icon={faPlus} fixedWidth/>
      </div>
    </div>
  );
}

export default Plan;
