import React, { useState } from 'react';
import './stylesheet.scss';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';

function Login() {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="Login">
      <div className="left">
        <div className="slogan">Plan easy, travel Peachy!</div>
        <div className="description">
          Nobody likes to be disappointed by tourists traps during their holidays. Let a local plan an itinerary that is
          tailored uniquely to you.
        </div>
        <div className="findOut">
          Find Out More
        </div>
      </div>
      <div className="divider">
      </div>
      <div className="right">
        <div className="loginContainer">
          <div className="message">“Don’t keep your local waiting!”</div>
          {
            signUp &&
            <InputContainer label="Name" value="Jason Park"/>
          }
          <InputContainer label="Email" value="jason.park@gatech.edu"/>
          <InputContainer label="Password" type="password" value="password"/>
          {
            signUp ? (
              <div className="buttonContainer">
                <Link className="button primary" to="/main">Sign Up</Link>
                <div className="button" onClick={() => setSignUp(false)}>Log In</div>
              </div>
            ) : (
              <div className="buttonContainer">
                <div className="button" onClick={() => setSignUp(true)}>Sign Up</div>
                <Link className="button primary" to="/main">Enter</Link>
              </div>
            )
          }
          {
            signUp &&
            <div className="terms">By clicking Sign Up, you agree to our Terms and Conditions.</div>
          }
        </div>
      </div>
      <Link className="logo" to="/">
        <img className="image" src={logo}/>
      </Link>
      <div className="location">
        <div className="label">Tokyo, Shibuya</div>
        <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth/>
      </div>
    </div>
  );
}

function InputContainer({ label, type = 'text', value }) {
  return (
    <div className="inputContainer">
      <div className="label">{label}</div>
      <input className="input" type={type} value={value}/>
    </div>
  );
}

export default Login;
