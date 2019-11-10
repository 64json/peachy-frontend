import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import userMap from '../data/userMap';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

function MyProfile() {
  const user = userMap.jason;

  return (
    <div className="MyProfile">
      <Nav user={user}/>
      <div className="content">
        <div className="profile">
          <div className="picture" style={{ backgroundImage: `url(${user.picture})` }}/>
          <div className="info">
            <div className="name">{user.name}</div>
            <Item icon={faLocationArrow} text={user.location}/>
            <Item icon={faSuitcase} text={user.occupation}/>
            <Item icon={faThumbsUp} text={user.hobby}/>
            <div className="section sectionInterests">
              <div className="title">Interests</div>
              <div className="tagContainer">
                {
                  user.interests.map((interest, i) => (
                    <div className="tag" key={i} style={{ backgroundColor: interest.category.color }}>
                      <div className="text">{interest.name}</div>
                      <div className="icon">
                        <FontAwesomeIcon icon={interest.category.icon} fixedWidth/>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="section sectionCities">
            <div className="title">{user.upcomingCities.length} Upcoming Itineraries</div>
            <div className="cityContainer">
              {
                user.upcomingCities.map((city, i) => (
                  <Link className="city" key={i} to="/plan">
                    <div className="cover" style={{ backgroundImage: `url(${city.image})` }}/>
                    <div className="cityInfo">
                      <div className="name">{city.name}</div>
                      <div className="location">{city.location}</div>
                      <div className="date">{city.date}</div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="section sectionCities">
            <div className="title">{user.completedCities.length} Completed Itineraries</div>
            <div className="cityContainer">
              {
                user.completedCities.map((city, i) => (
                  <Link className="city" key={i} to="/plan">
                    <div className="cover" style={{ backgroundImage: `url(${city.image})` }}/>
                    <div className="cityInfo">
                      <div className="name">{city.name}</div>
                      <div className="location">{city.location}</div>
                      <div className="date">{city.date}</div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ icon, text }) {
  return (
    <div className="item">
      <div className="icon">
        <FontAwesomeIcon icon={icon} fixedWidth/>
      </div>
      <div className="text">{text}</div>
    </div>
  );
}

export default MyProfile;
