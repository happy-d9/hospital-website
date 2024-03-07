import logo from '.././assets/images/logo.svg'
import '../hospital-back/assets/css/main.css'

function AllDepartment()
{
    return(
<>
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
    <>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/all-Departments.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:15 GMT */}
  {/* Chat-launcher */}
 
  {/* Main Content */}
  <section className="content container">
  <h5 className='text-center'>All Departments</h5>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image1.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Cardiology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar2.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar3.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar4.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar6.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  How all this mistaken al idea of denouncing pleasure praisings
                  pain was complete[...]
                </p>
                <a
                  href="more-Departments.html"
                  className="btn btn-primary btn-simple btn-round"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image2.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Pulmonology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar2.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar3.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar4.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar6.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Who chooses to enjoy a pleasure that has consquences, or one
                  who avoids a pain.[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image3.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Gynecology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar2.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar3.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar4.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar6.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Who chooses to enjoy a pleasure that has annoying, or one who
                  avoids a pain.[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image4.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Neurology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar9.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar10.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  How all this mistaken al idea of denouncing pleasure praisings
                  pain was complete[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image5.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Urology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar5.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar7.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar8.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Who chooses to enjoy a pleasure that has consquences, or one
                  who avoids a pain.[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image6.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Gastrology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar1.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar2.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar8.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar6.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar10.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Who chooses to enjoy a pleasure that has annoying, or one who
                  avoids a pain.[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image7.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Pediatrician</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar9.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  There anyone loves pursue or desires to pain sed of itself
                  because pain occasionally[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image1.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Laboratory</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar5.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar8.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Who chooses to enjoy a pleasure that has consquences, or one
                  who avoids a pain.[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card project_widget">
            <div className="pw_img">
              <img
                className="img-fluid"
                src={require("../hospital-back/assets/images/image8.jpg")}
                alt="About the image"
              />
            </div>
            <div className="pw_content">
              <div className="pw_header">
                <h6>Gastrology</h6>
                <ul className="list-unstyled team-info margin-0 p-t-15">
                  <li className="m-r-15">
                    <small>Team</small>
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar1.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar2.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar8.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <img src={require("../hospital-back/assets/images/xs/avatar10.jpg")} alt="Avatar" />
                  </li>
                  <li>
                    <a href="#" title="Add Member">
                      <i className="zmdi zmdi-plus-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pw_meta">
                <p>
                  Take a trivial example, which of ever undertake laborous
                  physically exercise some[...]
                </p>
                <button className="btn btn-primary btn-simple btn-round">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Jquery Core Js */}
  {/* Lib Scripts Plugin Js */}
  {/* Lib Scripts Plugin Js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/all-Departments.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:17 GMT */}
</>

</>
    )
}
export default AllDepartment;