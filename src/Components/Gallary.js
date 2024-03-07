import logo from './assets/images/logo.svg'
function Gallary()
{
    return(
<>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/galary.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:44 GMT */}

  {/* start linking */}
 
  <div className="wrapper">
    {/* start loading */}
   
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mr-auto col-lg-9">
                <li className="nav-item">
                  <a className="nav-link" href="services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="department">
                    Departments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="doctors">
                    Doctors
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
                    Blog
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="blog">
                      Blog
                    </a>
                    <a className="dropdown-item" href="blog-detail">
                      Blog Detail
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
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="aboutus">
                      About Us
                    </a>
                    <a className="dropdown-item" href="faq">
                      FAQs
                    </a>
                    <a className="dropdown-item" href="gallary">
                      Galary
                    </a>
                    <a className="dropdown-item" href="price-list">
                      Price list
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item d-md-none d-lg-none d-xl-none">
                  <a className="nav-link" href="login">
                    Sign in
                  </a>
                </li>
                <li className="nav-item d-md-none d-lg-none d-xl-none">
                  <a className="nav-link" href="signup">
                    Sign up
                  </a>
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
    {/* start hero */}
    <section id="hero">
      <div
        className="inner-banner">
          <img src={require("./assets/images/banner-gallery.jpg")} style={{backgroundRepeat:'no-repeat',maxHeight:'300px',height: '300px',}}></img>
        <div className="container">
          <h3 className="title">
            Oreo
            <br />
            <strong>Gallery</strong>
          </h3>
        </div>
      </div>
    </section>
    {/* Content Area */}
    <section className="main-section">
      {/* FAQs */}
      <div className="img-gallery">
        <div className="container">
          <div className="row">
            <div className="section-title col-12" data-aos="fade-right">
              <h2>
                <span>View</span> our best Gallery
              </h2>
              <p>Description text here...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic1.jpg")}
                >
                  {" "}
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic1.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic2.jpg")}
                >
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic2.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic3.jpg")}
                >
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic3.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic4.jpg")}
                >
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic4.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic5.jpg")}
                >
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic5.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="popup-gallery">
                {" "}
                <a
                  className="popup2"
                  href={require("./assets/images/gallery/Portfolio-pic6.jpg")}
                >
                  <img
                    src={require("./assets/images/gallery/Portfolio-pic6.jpg")}
                    alt="pic"
                  />
                  <span className="eye-wrapper">
                    <i className="zmdi zmdi-eye" />
                  </span>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs */}
    </section>
    {/* start footer */}
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form" data-aos="fade-up" data-aos-duration={3000}>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="form-group m-b-0">
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="your name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="form-group m-b-0">
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="your email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <button className="btn btn-primary btn-round btn-block margin-0 col-lg-12 col-md-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-12">
            <div className="fcard about">
              <h5 className="title">About Hospitals</h5>
              <p>
                The relentless service of Hospitals in the past 25 years taken
                health care to the most modern levels in the region catering to
                urban &amp; rural.
              </p>
              <p>
                A Health Care Provider of Western Approach, Hospitals is the
                most trusted multispecialty hospital.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="fcard links">
              <h5 className="title">Usefull Links</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="about">About Us</a>
                    </li>
                    <li>
                      <a href="">Consultants</a>
                    </li>
                    <li>
                      <a href="">Working Hours</a>
                    </li>
                    <li>
                      <a href="">Procedures</a>
                    </li>
                    <li>
                      <a href="">Special Offers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Healthy Foods</a>
                    </li>
                    <li>
                      <a href="">Appointments</a>
                    </li>
                    <li>
                      <a href="">Latest News</a>
                    </li>
                    <li>
                      <a href="">Certificates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="fcard contact links">
              <h5 className="title">Contact Details</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="zmdi zmdi-pin" />
                  Park Drive, Varick Str NY 10012, USA
                </li>
                <li>
                  <i className="zmdi zmdi-email" />
                  Getwell@Hospitals.com
                </li>
                <li>
                  <i className="zmdi zmdi-phone" />
                  (123) 0200 12345 &amp; 7890
                </li>
                <li>
                  <i className="zmdi zmdi-time" />
                  Mon-Friday: 9am to 18pm
                </li>
                <li>
                  <i className="zmdi zmdi-time" />
                  Sat-Sunday: 10am to 16pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <small>
                Copyright © 2018 Oreo Theme by{" "}
                <a href="http://thememakker.com/" target="_blank">
                  ThemeMakker
                </a>
              </small>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="up">
                <a href="#header">
                  <i className="zmdi zmdi-caret-up-circle" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="social float-md-right text-end">
                <a href="#">
                  <i className="zmdi zmdi-facebook m-r-10" />
                </a>{" "}
                <a href="#">
                  <i className="zmdi zmdi-twitter m-r-10" />
                </a>{" "}
                <a href="#">
                  <i className="zmdi zmdi-dribbble m-r-10" />
                </a>{" "}
                <a href="#">
                  <i className="zmdi zmdi-behance m-r-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* start screpting */}
  {/* my js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/galary.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:46 GMT */}
</>

    )
}
export default Gallary;