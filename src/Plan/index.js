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
import * as markerMap from '../img/category';
import { classes } from '../utils';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import Event from '../Event';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { Marker, Polyline } from 'react-google-maps';
import { faHotel } from '@fortawesome/free-solid-svg-icons/faHotel';
import { faLandmark } from '@fortawesome/free-solid-svg-icons/faLandmark';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { faHiking } from '@fortawesome/free-solid-svg-icons/faHiking';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const categoryMap = {
  accomodations: {
    marker: markerMap.accomodations,
    color: '#0C9C71',
    icon: faHotel,
    name: 'Accommodations',
  },
  food_and_beverage: {
    marker: markerMap.food_and_beverage,
    color: '#C43636',
    icon: faUtensils,
    name: 'Food & Beverage',
  },
  landmarks: {
    marker: markerMap.landmarks,
    color: '#2199BF',
    icon: faLandmark,
    name: 'Landmarks',
  },
  shopping: {
    marker: markerMap.shopping,
    color: '#C6379E',
    icon: faShoppingBag,
    name: 'Shopping',
  },
  outdoor_activities: {
    marker: markerMap.outdoor_activities,
    color: '#DD8D30',
    icon: faHiking,
    name: 'Outdoor Activities',
  },
  others: {
    marker: markerMap.others,
    color: '#7310A2',
    icon: faEllipsisH,
    name: 'Others',
  },
};

function Plan() {
  const calendarRef = useRef(null);
  const [activeDay, setActiveDay] = useState(0);
  const [activeEvent, setActiveEvent] = useState(-1);
  const [adding, setAdding] = useState(false);
  const [events, setEvents] = useState([{
    id: 'awgeioja',
    category: categoryMap.outdoor_activities,
    cover: coverBukak,
    name: 'Hiking Bukak Skyway',
    venue: '267 Bugaksan-ro, Pyeongchang-dong',
    position: {
      lat: 37.602199,
      lng: 126.980590,
    },
    start: 10,
    duration: 2,
  }, {
    id: 'hiuheww',
    category: categoryMap.food_and_beverage,
    cover: coverSchoolfood,
    name: 'Lunch at School Food',
    venue: '27 Myeongdong 8-gil, Myeongdong 2(i)-ga',
    position: {
      lat: 37.562577,
      lng: 126.985144,
    },
    start: 12.5,
    duration: 1.5,
  }, {
    id: 'hijesrer',
    category: categoryMap.food_and_beverage,
    cover: coverBeer,
    name: 'Beer at the Best Rooftop in Seoul',
    venue: '15 Gangnam-daero 94-gil, Yeoksam-dong',
    position: {
      lat: 37.499748,
      lng: 127.028594,
    },
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
              events.map(event => (
                <Event className={classes('event', activeEvent === event.id && 'active')} key={event.id} event={event}
                       onMouseDown={e => {
                         setActiveEvent(event.id);
                         const initY = e.target.closest('.event').offsetTop;
                         const offsetY = e.clientY;
                         const onMouseMove = e => {
                           const newY = initY + e.clientY - offsetY;
                           const start = (newY / 72 * 6 | 0) / 6;
                           if (start !== event.start) {
                             const newEvents = events.map(oldEvent => event.id === oldEvent.id ? {
                               ...oldEvent,
                               start,
                             } : oldEvent).sort((e1, e2) => e1.start - e2.start);
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
                             const newEvents = events.map(oldEvent => event.id === oldEvent.id ? {
                               ...oldEvent,
                               duration,
                             } : oldEvent);
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
            mapElement={<div style={{ height: `100%` }}/>}>
            {
              events.slice(1).map((to, i) => {
                const from = events[i];
                return (
                  <Polyline path={[from.position, to.position]} options={{
                    strokeColor: '#4a752d',
                    strokeOpacity: .5,
                  }}/>
                );
              })
            }
            {
              events.map(event => (
                <Marker key={event.id} position={event.position} icon={{
                  url: event.category.marker,
                  anchor: { x: 24, y: 24 },
                  scaledSize: { width: 48, height: 48 },
                }}/>
              ))
            }
          </Map>
        }
        <div className="searchContainer">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} fixedWidth/>
          </div>
          <input className="search" type="text"/>
        </div>
        <div className={classes('addContainer', adding && 'active')}>
          <div className="categoryContainer">
            {
              Object.values(categoryMap).map(category => (
                <Category key={category.name} icon={category.icon} color={category.color} name={category.name}/>
              ))
            }
          </div>
          <div className="icon add" onClick={() => setAdding(!adding)}>
            <FontAwesomeIcon icon={faPlus} fixedWidth/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category({ icon, color, name }) {
  return (
    <div className="category">
      <div className="name">{name}</div>
      <div className="icon" style={{ backgroundColor: color }}>
        <FontAwesomeIcon icon={icon} fixedWidth/>
      </div>
    </div>
  );
}

export default Plan;
