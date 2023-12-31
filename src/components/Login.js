import React, { useState } from 'react'
import "./login.css";

function Login() {

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    console.log(isSignUp);
  };

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">log In</button>
        <button type="button" className="fb-btn">
          Connect with <span>facebook</span>
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div className="img__btn" onClick={toggleSignUp}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Log In</span>
          </div>
        </div>
        <div className={`{isSignUp ? 'cont.s--signup form sign-up' : 'form sign-up'}`}>
          <h2>Let your beauty speak for you</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <button type="button" className="submit">Sign Up</button>
          <button type="button" className="fb-btn">
            Join with
            <span>
                <a href="https://www.facebook.com/groups/freewebsitecode">facebook</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;