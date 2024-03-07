import logo from '.././assets/images/logo.svg'
import '../hospital-back/assets/css/main.css'

function AllDoctor()
{
    return(
<>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/doctors.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:11 GMT */}
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
  <div className="chat-launcher" />
  
  <section className="content container">
  <h5 className='text-center'>All Doctors</h5>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="body">
              <ul className="nav nav-tabs padding-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#Permanent"
                  >
                    Permanent
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="consult">
                    Consultant
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content m-t-10">
            <div className="tab-pane active" id="Permanent">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member1.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. John</h4>
                        <p className="text-muted">Dentist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-khaki member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member2.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Amelia</h4>
                        <p className="text-muted">Gynecologist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member3.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Jack </h4>
                        <p className="text-muted">Dentist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-parpl member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member4.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Jessica </h4>
                        <p className="text-muted">Nursing</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-pink member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member5.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Joseph </h4>
                        <p className="text-muted">Audiology</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-seagreen member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member6.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Charlie </h4>
                        <p className="text-muted">Physical Therapy</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member7.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. William </h4>
                        <p className="text-muted">Dentist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-seagreen member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member8.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Sophie </h4>
                        <p className="text-muted">Physical Therapy</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="Consultant">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-khaki member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member2.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Amelia</h4>
                        <p className="text-muted">Gynecologist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member3.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Jack </h4>
                        <p className="text-muted">Dentist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-pink member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member5.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Joseph </h4>
                        <p className="text-muted">Audiology</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-seagreen member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img
                          src={require("../hospital-back/assets/images/doctors/member6.png")}
                          className="img-fluid"
                          alt="profile-image"
                        />
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Charlie </h4>
                        <p className="text-muted">Physical Therapy</p>
                        <ul className="social-links list-inline m-t-20">
                          <li>
                            <a title="facebook" href="#">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a title="twitter" href="#">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="instagram" href="#">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p className="text-muted">
                          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                        </p>
                        <a
                          href="profile.html"
                          className="btn btn-default btn-round btn-simple"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
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
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/doctors.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:13 GMT */}
</>

    )
}
export default AllDoctor;