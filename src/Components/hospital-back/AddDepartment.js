import logo from '.././assets/images/logo.svg'
import '../hospital-back/assets/css/main.css'

function AddDepartment()
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
  
  {/* Left Sidebar */}
 
  {/* Right Sidebar */}
  
  {/* Chat-launcher */}
  <section className="content container">
  <h5 className='text-center'>Add Department</h5>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2>
                <strong>Add</strong> Departments
                <small>Description text here...</small>{" "}
              </h2>
              <ul className="header-dropdown">
                <li className="remove">
                  <a role="button" className="boxs-close">
                    <i className="zmdi zmdi-close" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix text-center">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Departments Name"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      rows={4}
                      className="form-control no-resize"
                      placeholder="Please type what you want..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <form
                    action="https://thememakker.com/"
                    id="frmFileUpload"
                    className="dropzone m-b-20"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="dz-message">
                      <div className="drag-icon-cph">
                        {" "}
                        <i className="material-icons">touch_app</i>{" "}
                      </div>
                      <h3>Drop files here or click to upload.</h3>
                      <em>
                        (This is just a demo dropzone. Selected files are{" "}
                        <strong>not</strong> actually uploaded.)
                      </em>{" "}
                    </div>
                    <div className="fallback">
                      <input name="file" type="file" multiple="" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary btn-round">
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-default btn-round btn-simple"
                  >
                    Cancel
                  </button>
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
  {/* Dropzone Plugin Js */}
  {/* Moment Plugin Js */}
  {/* Custom Js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/add-departments.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:15 GMT */}
</>

        </>
    )
}
export default AddDepartment;