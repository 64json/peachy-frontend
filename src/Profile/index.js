import React from 'react';
import './stylesheet.scss';
import { classes } from '../utils';

function Profile({ className, user, description, traveller, planner }) {
  return (
    <div className={classes('Profile', traveller && 'traveller', planner && 'planner', className)}>
      <div className="picture" style={{ backgroundImage: `url(${user.picture})` }}/>
      <div className="name">
        <div className="primary">{user.name}</div>
        <div className="secondary">{description}</div>
      </div>
      <div className="role">{traveller ? 'Traveller' : planner ? 'Planner' : ''}</div>
    </div>
  );
}

export default Profile;
