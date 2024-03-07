import { useState } from 'react';
import '../hospital-back/assets/css/main.css'
import axios from 'axios';
function Sign_up()
{
  let[name,setname]=useState("");
  let [email,setemail]=useState("");
  let [password,setpassword]=useState("");

  const btn=()=>
  {
    if (name=="" || email=="" || password=="") {
                    
      alert('Please, Enter your data...!')
    }
   else{
    axios.post('http://localhost:5000/register',{name,email,password})
      .then(function (response) {
        console.log(response);
        if(response){
          alert('Your data is Submited...!')
          window.location.href = 'index'
      }
      })
      .catch(function (error) {
        console.log(error);
      })
   }
  }
    return(
        <>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-up.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:17 GMT */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    name="viewport"
  />
  <meta
    name="description"
    content="Responsive Bootstrap 4 and web Application ui kit."
  />
  <title>:: Oreo Hospital :: </title>
  {/* Favicon*/}
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  {/* Custom Css */}
  <link
    rel="stylesheet"
    href="../assets/plugins/bootstrap/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/authentication.css" />
  <link rel="stylesheet" href="assets/css/color_skins.css" />
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
    <div className="container">
      <div className="navbar-translate n_logo col-7">
        <a
          className="navbar-brand text-start"
          href="#"
          title=""
          target="_blank"
        >
          Oreo
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Search Result
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="Follow us on Twitter"
              href="#"
              target="_blank"
            >
              <i className="zmdi zmdi-twitter" />
              <p className="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="Like us on Facebook"
              href="#"
              target="_blank"
            >
              <i className="zmdi zmdi-facebook" />
              <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="Follow us on Instagram"
              href="#"
              target="_blank"
            >
              <i className="zmdi zmdi-instagram" />
              <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-white btn-round" href="admin">
              SIGN IN
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <div className="page-header">
    <div  className="page-header-image"/>
    <div className="container">
      <div className="col-lg-4 content-center">
        <div className="card-plain">
            <div className="header m-3">
              <div className="logo-container m-3">
                <img
                  src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
                  alt=""
                />
              </div>
              <h5 className="fs-3">Sign Up</h5>
              <span>Register a new membership</span>
            </div>
            <div className="container col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  onChange={(e)=>setname(e.target.value)}
                />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-account-circle" />
                </span>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e)=>setemail(e.target.value)}
                />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-email" />
                </span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e)=>setpassword(e.target.value)}
                />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-lock" />
                </span>
              </div>
            </div>
            <div className="checkbox">
              <input id="terms" type="checkbox" />
              <label htmlFor="terms">
                I read and agree to the{" "}
                <a href="#">terms of usage</a>
              </label>
            </div>
            <div className="footer text-center">
              <input type='button'
                value="SIGN UP"
                className="btn btn-primary btn-round btn-block  waves-effect waves-light"
                style={{width:'326px'}}
                onClick={()=>btn()}
              >
              </input>
              <h5>
                <a className="link" href="login">
                  You already have a membership?
                </a>
              </h5>
            </div>
        
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="http://thememakker.com/contact/" target="_blank">
                Contact Us
              </a>
            </li>
            <li>
              <a href="http://thememakker.com/about/" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          © ,
          <span>
            Designed by{" "}
            <a href="http://thememakker.com/" target="_blank">
              ThemeMakker
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
  {/* Jquery Core Js */}
  {/* Lib Scripts Plugin Js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-up.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:17 GMT */}
</>

    )
}
export default Sign_up;