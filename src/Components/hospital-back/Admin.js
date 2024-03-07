import { useState } from 'react';
import '../hospital-back/assets/css/main.css';
import './assets/css/authentication.css'
import './assets/css/color_skins.css';
import axios from 'axios';
function Admin() {
  let [name, setname] = useState("");
  let [password, setpassword] = useState("");

  const btn = (e) => {
    
    if (name == "" || password == "") {

      alert('Please, Enter your data...!')
    }
    else {
      axios.post('http://localhost:5000/register', {name:name,password:password})
        .then(function (response) {
          console.log(response);
          if (response) {
            if (response.data.name == name &&response.data.password == password) {
              alert("Your data is currected...!");
              window.location.href = "index";
            } else {
              alert("Please, Check your data...!");
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  return (
    <>
      {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:08 GMT */}

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
        <div className="container">
          <div className="navbar-translate n_logo col-8">
            <a
              className="navbar-brand text-center"
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
                  Search
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
                <a className="nav-link btn btn-white btn-round" href="/">
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="page-header">
        <div className="page-header-image" />
        <div className="container">
          <div className="col-lg-3 content-center">
            <div className="card-plain">

              <div className="header">
                <div className="logo-container">
                  <img
                    src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
                    alt=""
                  />
                </div>
                <h5 className="m-4 fs-3">Log in</h5>
              </div>
              <div className="col-5 container">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-account-circle" />
                  </span>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-lock" />
                  </span>
                </div>
              </div>
              <div className="footer text-center">
                <input type='button'
                  value="SIGN IN"
                  href={"index"}
                  className="btn btn-primary btn-round btn-block  waves-effect waves-light"
                  style={{ width: '326px' }}
                  onClick={() => btn()}
                >
                </input>
                <h5>
                  <a href="forgot-password" className="link">
                    Forgot Password?
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
      {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:08 GMT */}
    </>

  )
}
export default Admin;