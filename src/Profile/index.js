import React from 'react';
import './stylesheet.scss';
import { classes } from '../utils';

function Profile({ className, picture, primary, secondary, role, traveller, planner }) {
  return (
    <div className={classes('Profile', traveller && 'traveller', planner && 'planner', className)}>
      <div className="picture" style={{ backgroundImage: `url(${picture})` }}/>
      <div className="name">
        <div className="primary">{primary}</div>
        <div className="secondary">{secondary}</div>
      </div>
      <div className="role">{traveller ? 'Traveller' : planner ? 'Planner' : ''}</div>
    </div>
  );
}

export default Profile;
