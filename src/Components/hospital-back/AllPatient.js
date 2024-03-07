import logo from '.././assets/images/logo.svg'
import '../hospital-back/assets/css/main.css'

function AllPatient()
{
    return(
<>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/patients.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:14 GMT */}
  <div className="main_header">
      <section id="top-nav">
        <div className="container">
          <div className="top">
            <div className="row">
            <div className="col-lg-6 col-md-7">
                <div className="start">
                  <ul className="list-unstyled m-b-0">
                    <li>
                      <a href="#" className="btn btn-link">
                        <i className="zmdi zmdi-email m-r-5" />
                        info@example.com
                      </a>
                      <a href="#" className="btn btn-link">
                        <i className="zmdi zmdi-phone m-r-5" />+ 202-555-0191
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="text-end d-none d-md-block">
                  <ul className="list-unstyled m-b-0">
                    <li>
                      <a href="admin" className="btn btn-link">
                        Sign in
                      </a>{" "}
                      <a href="/" className="btn btn-link">
                        sign up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header id="header">
        <div className="container">
          <div className="head">
            <div className="row">
              <div className="col-lg-5 col-sm-5">
                <div className="start">
                  <a href="index.html" className="navbar-brand">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-sm-7">
                <div className="text-end d-none d-md-block">
                  <p className="col-white m-b-0 p-t-5">
                    <i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
                    Sunday CLOSED{" "}
                  </p>
                  <p className="col-white m-b-0">
                    <i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
                    94559. United States{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="navbar" data-aos="fade-down">
        <div className="container">
          <nav className="navbar navbar-expand-lg just">
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mr-auto col-lg-9">
                <li className="nav-item">
                  <a className="nav-link" href="home">
                    Appointment
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="pageMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Departments
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="all-department">
                      All Departments
                    </a>
                    <a className="dropdown-item" href="add-department">
                      Add Departments
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="pageMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Doctors
                    </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="all-doctor">
                      All Doctors
                    </a>
                    <a className="dropdown-item" href="add-doctor">
                      Add Doctors
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="pageMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Patients
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="add-patient">
                      Add Patients
                    </a>
                    <a className="dropdown-item" href="all-patient">
                      All Patients
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pageMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Payments
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="payment">
                      Payments
                    </a>
                    <a className="dropdown-item" href="add-payment">
                      Add Payments
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pageMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Authentication
                    </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="admin">
                      Sign In
                    </a>
                    <a className="dropdown-item" href="/">
                      Sign Up
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block ms-2">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  {/* Chat-launcher */}
  <section className="content container">
  <h5 className='text-center'>All Patient</h5>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="card patients-list">
            <div className="header">
              <h2>
                <strong>Patients</strong> List
              </h2>
              <ul className="header-dropdown">
                <li className="dropdown">
                  {" "}
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="zmdi zmdi-more" />{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right slideUp">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else</a>
                    </li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close">
                    <i className="zmdi zmdi-close" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="body">
              {/* Nav tabs */}
              <ul className="nav nav-tabs padding-0">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#All">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#USA">
                    USA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#India">
                    India
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content m-t-10">
                <div className="tab-pane table-responsive active" id="All">
                  <table className="table m-b-0 table-hover">
                    <thead>
                      <tr>
                        <th>Media</th>
                        <th>Patients ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Last Visit</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00598</span>
                        </td>
                        <td>Daniel</td>
                        <td>32</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>11 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00258</span>
                        </td>
                        <td>Alexander</td>
                        <td>22</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>15 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00369</span>
                        </td>
                        <td>Richard</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>16 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00147</span>
                        </td>
                        <td>Samuel</td>
                        <td>45</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>17 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar5.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00123</span>
                        </td>
                        <td>Stephen</td>
                        <td>55</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>18 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00456</span>
                        </td>
                        <td>Joseph</td>
                        <td>27</td>
                        <td>70 Bowman St. South Windsor, CT 06074</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00789</span>
                        </td>
                        <td>Cameron</td>
                        <td>38</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00987</span>
                        </td>
                        <td>Alex</td>
                        <td>39</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>20 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00951</span>
                        </td>
                        <td>James</td>
                        <td>32</td>
                        <td>44 Shirley Ave. West Chicago, IL 60185</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00953</span>
                        </td>
                        <td>charlie</td>
                        <td>51</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar5.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00984</span>
                        </td>
                        <td>William</td>
                        <td>35</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00934</span>
                        </td>
                        <td>thomas</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane table-responsive" id="USA">
                  <table className="table m-b-0 table-hover">
                    <thead>
                      <tr>
                        <th>Media</th>
                        <th>Patients ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Last Visit</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00598</span>
                        </td>
                        <td>Daniel</td>
                        <td>32</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>11 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00258</span>
                        </td>
                        <td>Alexander</td>
                        <td>22</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>15 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00456</span>
                        </td>
                        <td>Joseph</td>
                        <td>27</td>
                        <td>70 Bowman St. South Windsor, CT 06074</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00789</span>
                        </td>
                        <td>Cameron</td>
                        <td>38</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00987</span>
                        </td>
                        <td>Alex</td>
                        <td>39</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>20 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00951</span>
                        </td>
                        <td>James</td>
                        <td>32</td>
                        <td>44 Shirley Ave. West Chicago, IL 60185</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00953</span>
                        </td>
                        <td>charlie</td>
                        <td>51</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00934</span>
                        </td>
                        <td>thomas</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-content m-t-10">
                <div className="tab-pane table-responsive" id="USA">
                  <table className="table m-b-0 table-hover">
                    <thead>
                      <tr>
                        <th>Media</th>
                        <th>Patients ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Last Visit</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00598</span>
                        </td>
                        <td>Daniel</td>
                        <td>32</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>11 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00258</span>
                        </td>
                        <td>Alexander</td>
                        <td>22</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>15 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00369</span>
                        </td>
                        <td>Richard</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>16 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00147</span>
                        </td>
                        <td>Samuel</td>
                        <td>45</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>17 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar5.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00123</span>
                        </td>
                        <td>Stephen</td>
                        <td>55</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>18 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00456</span>
                        </td>
                        <td>Joseph</td>
                        <td>27</td>
                        <td>70 Bowman St. South Windsor, CT 06074</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00789</span>
                        </td>
                        <td>Cameron</td>
                        <td>38</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00987</span>
                        </td>
                        <td>Alex</td>
                        <td>39</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>20 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00951</span>
                        </td>
                        <td>James</td>
                        <td>32</td>
                        <td>44 Shirley Ave. West Chicago, IL 60185</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00953</span>
                        </td>
                        <td>charlie</td>
                        <td>51</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar5.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00984</span>
                        </td>
                        <td>William</td>
                        <td>35</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00934</span>
                        </td>
                        <td>thomas</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane table-responsive" id="USA">
                  <table className="table m-b-0 table-hover">
                    <thead>
                      <tr>
                        <th>Media</th>
                        <th>Patients ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Last Visit</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00598</span>
                        </td>
                        <td>Daniel</td>
                        <td>32</td>
                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                        <td>404-447-6013</td>
                        <td>11 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00258</span>
                        </td>
                        <td>Alexander</td>
                        <td>22</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>15 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00456</span>
                        </td>
                        <td>Joseph</td>
                        <td>27</td>
                        <td>70 Bowman St. South Windsor, CT 06074</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00789</span>
                        </td>
                        <td>Cameron</td>
                        <td>38</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>19 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar3.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00987</span>
                        </td>
                        <td>Alex</td>
                        <td>39</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>20 Jan 2018</td>
                        <td>
                          <span className="badge badge-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar4.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00951</span>
                        </td>
                        <td>James</td>
                        <td>32</td>
                        <td>44 Shirley Ave. West Chicago, IL 60185</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar1.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00953</span>
                        </td>
                        <td>charlie</td>
                        <td>51</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>22 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="list-icon">
                            <img
                              className="patients-img"
                              src={require("../hospital-back/assets/images/xs/avatar2.jpg")}
                              alt=""
                            />
                          </span>
                        </td>
                        <td>
                          <span className="list-name">KU 00934</span>
                        </td>
                        <td>thomas</td>
                        <td>26</td>
                        <td>123 6th St. Melbourne, FL 32904</td>
                        <td>404-447-6013</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Jquery Core Js */}
  {/* Bootstrap JS and jQuery v3.2.1 */}
  {/* slimscroll, waves Scripts Plugin Js */}
  {/* Custom Js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/patients.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:14 GMT */}
</>

    )
}
export default AllPatient;