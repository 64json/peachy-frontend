import React, { useEffect, useRef, useState } from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { classes } from '../utils';
import interestMap from '../data/interestMap';
import userMap from '../data/userMap';
import ProfileCard from '../ProfileCard';
import Nav from '../Nav';

function Main() {
  const [selectedMap, setSelectedMap] = useState({});
  const [dialog, setDialog] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [likedMap, setLikedMap] = useState({});
  const [profiles, setProfiles] = useState([]);
  const interests = Object.values(interestMap);
  const profileContainerRef = useRef(null);
  const user = userMap.jason;

  useEffect(() => {
    profileContainerRef.current.scrollTo({ left: (892 + 20) * activeIndex, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div className="Main">
      <Nav user={user}/>
      <div className="body">
        <div className="searchContainer">
          <label className="pax">
            <select className="input">
              <option>1 person</option>
              <option>2 people</option>
              <option>3 people</option>
              <option>4 people</option>
            </select>
            <div className="icon">
              <FontAwesomeIcon icon={faCaretDown} fixedWidth/>
            </div>
          </label>
          <div className="row">
            <div className="inputContainer">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} fixedWidth/>
              </div>
              <div className="input">
                <input type="text"
                       onKeyDown={e => {
                         if (e.keyCode === 13) {
                           setTimeout(() => {
                             setProfiles([userMap.jakelee, userMap.jake, userMap.joowon, userMap.wenghei, userMap.varisa]);
                           }, 300);
                         }
                       }}/>
              </div>
            </div>
            <div className="inputContainer dateContainer">
              <div className="icon">
                <FontAwesomeIcon icon={faCalendar} fixedWidth/>
              </div>
              <DateInput input="Fri, Nov. 15th"/>
              <div className="divider"/>
              <DateInput input="Sun, Nov. 17th"/>
            </div>
          </div>
        </div>
        <div className="search" onClick={() => {
          setTimeout(() => {
            setProfiles([userMap.jakelee, userMap.jake, userMap.joowon, userMap.wenghei, userMap.varisa]);
          }, 300);
        }}>
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} fixedWidth/>
          </div>
          <div className="label">Search</div>
        </div>
        <div className="matching">
          <div className="profileContainer" ref={profileContainerRef}>
            {
              profiles.map((user, i) => (
                <ProfileCard key={user.name} className="profileCard" user={user} active={i === activeIndex}
                             liked={likedMap[i]}/>
              ))
            }
            <div className="dummy"/>
          </div>
          {
            profiles.length > 0 &&
            <div className="buttonContainer">
              <div className="button pass" onClick={() => setActiveIndex(activeIndex + 1)}>
                <div className="icon">
                  <FontAwesomeIcon icon={faTimes} fixedWidth/>
                </div>
                <div className="label">Pass</div>
              </div>
              <div className="button like"
                   onClick={() => {
                     setLikedMap({ ...likedMap, [activeIndex]: !likedMap[activeIndex] });
                     setTimeout(() => {
                       setActiveIndex(activeIndex + 1);
                     }, 500);
                   }}>
                <div className="icon">
                  <FontAwesomeIcon icon={faHeart} fixedWidth/>
                </div>
                <div className="label">Like</div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className={classes('dialogContainer', dialog && 'active')}>
        <div className="dialog">
          <div className="questionContainer">
            <div className="icon">
              <FontAwesomeIcon icon={faQuestion}/>
            </div>
            <div className="question">Almost there!<br/>What are you interested in?</div>
          </div>
          <div className="interestContainer">
            {
              new Array(interests.length / 5 | 0).fill(0).map((_, i) => (
                <div className="row" key={i}>
                  {
                    interests.slice(i * 5, i * 5 + 5).map((interest, j) => (
                      <div className={classes('interest', selectedMap[interest.name] && 'active')}
                           key={interest.name} onClick={() => {
                        const newSelectedMap = {
                          ...selectedMap,
                          [interest.name]: !selectedMap[interest.name],
                        };
                        setSelectedMap(newSelectedMap);
                        if (Object.values(newSelectedMap).filter(v => v).length === 3) {
                          setTimeout(() => {
                            setDialog(false);
                          }, 300);
                        }
                      }}>
                        <div className="image" style={{ backgroundImage: `url(${interest.image})` }}/>
                        <div className="name">{interest.name}</div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div className="message">Please select {3 - Object.values(selectedMap).filter(v => v).length} more.</div>
        </div>
      </div>
    </div>
  );
}

function DateInput({ input }) {
  return (
    <div className="dateInput">
      <div className="input">
        {input}
      </div>
      <div className="controlContainer">
        <div className="control prev">
          <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
        <div className="control next">
          <FontAwesomeIcon icon={faAngleRight}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
