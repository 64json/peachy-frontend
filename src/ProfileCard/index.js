import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { classes } from '../utils';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

function ProfileCard({ className, user, active, liked }) {
  return (
    <div className={classes('ProfileCard', className, active && 'active', liked && 'liked')}>
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
        <div className="section sectionCities">
          <div className="title">12 Completed Itineraries</div>
          <div className="cityContainer">
            {
              user.completedCities.map((city, i) => (
                <div className="city" key={i} style={{ backgroundImage: `url(${city.image})` }}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="like">
        <FontAwesomeIcon icon={faHeart}/>
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

export default ProfileCard;
