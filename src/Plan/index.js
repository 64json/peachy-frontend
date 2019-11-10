import React, { useEffect, useRef, useState } from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../Profile';
import Map from '../Map';
import coverBeer from '../img/cover/beer.jpg';
import coverBukak from '../img/cover/bukak.jpg';
import coverSchoolfood from '../img/cover/schoolfood.jpg';
import coverAndywarhol from '../img/cover/andywarhol.jpg';
import coverGarosugil from '../img/cover/garosugil.jpg';
import coverPcbang from '../img/cover/pcbang.jpg';
import { classes } from '../utils';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import Event from '../Event';
import { Marker, Polyline } from 'react-google-maps';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { Link } from 'react-router-dom';
import categoryMap from '../data/categoryMap';
import userMap from '../data/userMap';


function Plan() {
  const calendarRef = useRef(null);
  const [activeDay, setActiveDay] = useState(0);
  const [movingEventId, setMovingEventId] = useState(null);
  const [activeEventId, setActiveEventId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [validClick, setValidClick] = useState(false);
  const [chats, setChats] = useState([
    [0, 'Hey there! I see that we share many similar interests, would you be able to plan a unique itinerary for me'],
    [1, 'Of course! Do you already have any existing plans?'],
    [0, 'Not at the moment, you are free to plan it out whatever way you want.'],
    [1, 'Alright, I will start doing it right now, you will be able to see it being updated in real time!'],
  ]);
  const [events, setEvents] = useState([{
    id: 'bukak',
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
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }, {
    id: 'schoolfood',
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
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }, {
    id: 'ddp',
    category: categoryMap.landmarks,
    cover: coverAndywarhol,
    name: 'Andy Warhol Exhibition at Dongdaemun Design Plaza',
    venue: '281 Eulji-ro, Euljiro 7(chil)-ga',
    position: {
      lat: 37.566921,
      lng: 127.009485,
    },
    start: 14.5,
    duration: 2.5,
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }, {
    id: 'garosugil',
    category: categoryMap.shopping,
    cover: coverGarosugil,
    name: 'Shopping in Garosugil',
    venue: '13 Dosan-daero 13-gil, Sinsa-dong',
    position: {
      lat: 37.518847,
      lng: 127.022995,
    },
    start: 17.5,
    duration: 1.5,
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }, {
    id: 'rooftop',
    category: categoryMap.food_and_beverage,
    cover: coverBeer,
    name: 'Beer at the Best Rooftop in Seoul',
    venue: '15 Gangnam-daero 94-gil, Yeoksam-dong',
    position: {
      lat: 37.499748,
      lng: 127.028594,
    },
    start: 22,
    duration: 2,
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }]);

  const getModifiedEvents = newEvent => {
    return events.map(oldEvent => newEvent.id === oldEvent.id ? newEvent : oldEvent).sort((e1, e2) => e1.start - e2.start);
  };

  const mockResults = () => {
    setTimeout(() => {
      const results = [];
      const center = { lat: 37.544328, lng: 126.980319 };
      const radius = .03;
      while (results.length < 20) {
        const pos = {
          lat: center.lat - radius + Math.random() * radius * 2,
          lng: center.lng - radius + Math.random() * radius * 2,
        };
        if (Math.pow(pos.lat - center.lat, 2) + Math.pow(pos.lng - center.lng, 2) > radius * radius) continue;
        results.push(pos);
      }
      setResults(results);
    }, 300);
  };

  useEffect(() => {
    if (activeEventId !== null) {
      const event = events.find(event => event.id === activeEventId);
      calendarRef.current.scrollTo({ top: 72 * event.start, behavior: 'smooth' });
    }
  }, [activeEventId]);

  useEffect(() => {
    calendarRef.current.scrollTop = 72 * 7;
  }, []);

  let activeEvent = events.find(event => event.id === activeEventId);

  return (
    <div className="Plan">
      <div className="sidebar">
        <div className="trip">
          <div className="cover">
            <div className="header">
              <Link className="back" to="/">
                <FontAwesomeIcon icon={faArrowLeft} fixedWidth/>
              </Link>
              <div className="info">
                <div>November 15 - 17th</div>
                <div>Seoul, South Korea</div>
              </div>
            </div>
            <div className="name">
              Weekend Getaway to Seoul
            </div>
          </div>
          <div className="participants">
            <Profile className="profile" user={userMap.jason} description="and 3 others"
                     traveller/>
            <Profile className="profile" user={userMap.jake} description="living in Seoul"
                     planner/>
          </div>
        </div>
        <div className="chat">
          <div className="history">
            {
              chats.map(([index, message], i) => (
                <div key={i} className={classes('balloon', ['traveller', 'planner'][index])}>{message}</div>
              ))
            }
          </div>
          <div className="message">
            <input className="input" type="text" value={message}
                   onChange={e => setMessage(e.target.value)}
                   onKeyDown={e => {
                     if (e.keyCode === 13) {
                       setChats([...chats, [0, message]]);
                       setMessage('');
                     }
                   }}/>
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
                      Nov. {15 + day}th
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="eventContainer">
            {
              events.map(event => {
                const moving = movingEventId === event.id;
                const active = activeEventId === event.id;
                return (
                  <Event
                    className={classes('event', moving && 'moving')}
                    active={active}
                    key={event.id} event={event}
                    onChange={event => {
                      setEvents(getModifiedEvents(event));
                    }}
                    onMouseDown={active ? undefined : e => {
                      setValidClick(true);
                      setMovingEventId(event.id);
                      const initY = e.target.closest('.event').offsetTop;
                      const offsetY = e.clientY;
                      const onMouseMove = e => {
                        setValidClick(false);
                        const newY = initY + e.clientY - offsetY;
                        const start = (newY / 72 * 6 | 0) / 6;
                        if (start !== event.start) {
                          setEvents(getModifiedEvents({ ...event, start }));
                        }
                      };
                      const onMouseUp = e => {
                        setMovingEventId(null);
                        window.removeEventListener('mousemove', onMouseMove);
                        window.removeEventListener('mouseup', onMouseUp);
                      };
                      window.addEventListener('mousemove', onMouseMove);
                      window.addEventListener('mouseup', onMouseUp);
                    }}
                    onResize={active ? undefined : e => {
                      e.stopPropagation();
                      setMovingEventId(event.id);
                      const initHeight = e.target.closest('.event').clientHeight + 8;
                      const offsetY = e.clientY;
                      const onMouseMove = e => {
                        const newHeight = initHeight + e.clientY - offsetY;
                        const duration = (newHeight / 72 * 6 | 0) / 6;
                        if (duration !== event.start) {
                          setEvents(getModifiedEvents({ ...event, duration }));
                        }
                      };
                      const onMouseUp = e => {
                        setMovingEventId(null);
                        window.removeEventListener('mousemove', onMouseMove);
                        window.removeEventListener('mouseup', onMouseUp);
                      };
                      window.addEventListener('mousemove', onMouseMove);
                      window.addEventListener('mouseup', onMouseUp);
                    }}
                    onClick={() => validClick && setActiveEventId(active ? null : event.id)}/>
                );
              })
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
            mapElement={<div style={{ height: `100%` }}/>}
            center={activeEvent && activeEvent.position}>
            {
              events.slice(1).map((to, i) => {
                const from = events[i];
                return (
                  <Polyline key={`${to.id}<-${from.id}`} path={[from.position, to.position]} options={{
                    strokeColor: '#4a752d',
                    strokeOpacity: .8,
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
            {
              results.map((position, i) => (
                <Marker key={i} position={position} draggable
                        onDragStart={(a, b, c) => {
                          const event = {
                            id: 'pcbang',
                            category: categoryMap.others,
                            cover: coverPcbang,
                            name: 'Big O Gaming Cafe',
                            venue: 'Jangmun-ro 15na-gil, Bogwang-dong',
                            position,
                            start: 0,
                            duration: 2,
                          };
                          const newEvents = [
                            ...events,
                            event,
                          ].sort((e1, e2) => e1.start - e2.start);
                          let firstMove = true;
                          const onMouseMove = e => {
                            if (firstMove) {
                              setResults([]);
                              setMovingEventId(event.id);
                              setEvents(newEvents);
                              firstMove = false;
                            }
                            const y = calendarRef.current.scrollTop + e.clientY;
                            const start = (y / 72 * 6 | 0) / 6;
                            if (start !== event.start) {
                              const modifiedEvents = newEvents.map(oldEvent => event.id === oldEvent.id ? {
                                ...oldEvent,
                                start,
                              } : oldEvent).sort((e1, e2) => e1.start - e2.start);
                              setEvents(modifiedEvents);
                            }
                          };
                          const onMouseUp = e => {
                            setValidClick(true);
                            setActiveEventId(event.id);
                            setMovingEventId(null);
                            calendarRef.current.removeEventListener('mousemove', onMouseMove);
                            window.removeEventListener('mouseup', onMouseUp);
                          };
                          calendarRef.current.addEventListener('mousemove', onMouseMove);
                          window.addEventListener('mouseup', onMouseUp);
                        }}
                        onDragEnd={() => {
                          setKeyword('');
                          setResults([]);
                        }}/>
              ))
            }
          </Map>
        }
        <div className="searchContainer">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} fixedWidth/>
          </div>
          <input className="search" type="text" value={keyword} onChange={e => setKeyword(e.target.value)}
                 onKeyDown={e => {
                   if (e.keyCode === 13) {
                     if (keyword === '') {
                       setResults([]);
                       return;
                     }
                     mockResults();
                   }
                 }}/>
        </div>
        <div className={classes('addContainer', adding && 'active')}>
          <div className="categoryContainer">
            {
              Object.values(categoryMap).map(category => (
                <div className="category" key={category.name} onClick={() => {
                  setKeyword(category.name);
                  setAdding(false);
                  mockResults();
                }}>
                  <div className="name">{category.name}</div>
                  <div className="icon" style={{ backgroundColor: category.color }}>
                    <FontAwesomeIcon icon={category.icon} fixedWidth/>
                  </div>
                </div>
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

export default Plan;
