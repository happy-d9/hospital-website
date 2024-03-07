import React from 'react'
import {Link} from 'react-router-dom';
import logo from './assets/images/logo.svg'
const MiddleNavBar = () => {
  return (
    <>
     <header id="header">
  <div className="container">
    <div className="head">
      <div className="row">
        <div className="col-lg-5 col-sm-5">
          <div className="left">
            <Link to="/" className="navbar-brand"><img src={require("./assets/images/logo.svg")} alt="logo" /></Link>
          </div>
        </div>
        <div className="col-lg-7 col-sm-7">
          <div className="text-right d-none d-md-block">
            <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
              Sunday CLOSED </p>
            <p className="col-white m-b-0"><i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
              94559. United States </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default MiddleNavBar
