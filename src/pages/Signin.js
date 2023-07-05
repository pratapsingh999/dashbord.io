import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter , faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault(); // thise for donot relode
    const newentry = { Email: Email, Password: Password };
    setallEntry([...allEntry, newentry]);
    //   ...allEntry storing the data
    console.log(allEntry);
  };
  return (
    <>
      <form className="form1" onSubmit={submitForm}>
        <h1 className="loginname">LOG IN </h1>
        <div className="container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Email address"
              autoComplete="off"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              class="form-control"
              id="exampleInputPassword1"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn"
            type="submit"
            class="btn btn-primary btn_custmise"
          >
            login
          </button>
          <div className="alr">
            <span>
              Not a member?{" "}
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </span>
          </div>
          <hr/>
          <p className="text-center">Login with social media</p>
          {/* <div class="d-flex flex-row mb-5 justify-content-evenly social-media">
    <button className='social-media-icon facebook'>
    <FontAwesomeIcon icon={faFacebookF}/> 
    </button>
    <button className='social-media-icon Twitter '>
    <FontAwesomeIcon  icon={faTwitter}/>
    </button>
    <button className='social-media-icon Google '>
    <FontAwesomeIcon icon={faGoogle} />
    </button>
    <button className='social-media-icon Github '>
    <FontAwesomeIcon icon={faGithub}/>
    </button>
    <button className='social-media-icon Instagram'>
    <FontAwesomeIcon icon={faInstagram}/>
    </button>
    </div> */}
    <div class="d-flex flex-row mb-5 justify-content-evenly ">
    <button className='social-media-icon facebooks'>
    <a href="https://www.facebook.com/" >
    <FontAwesomeIcon className="font" icon={faFacebookF}/> 
    </a>
    </button>
    <button className='social-media-icon Twitter'>
    <a href="https://twitter.com/i/flow/login">
    <FontAwesomeIcon className="font" icon={faTwitter}/> 
    </a>
    </button>
    <button className='social-media-icon Google'>
    <a href="https://www.youtube.com/">
    <FontAwesomeIcon className="font" icon={faYoutube}/> 
    </a>
    </button>
    <button className='social-media-icon Github'>
    <a href="https://github.com/login">
    <FontAwesomeIcon className="font" icon={faGithub}/> 
    </a>
    </button>
    <button className='social-media-icon Instagram'>
    <a href="https://www.instagram.com/">
    <FontAwesomeIcon className="font" icon={faInstagram}/> 
    </a>
    </button>
    </div>
        </div>
      </form>

      <div>
        {allEntry.map((curElem) => {
          return (
            <div>
              <p className="text">{curElem.Email}</p>
              <p className="text">{curElem.Password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Signin;
