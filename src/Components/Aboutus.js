import logo from './assets/images/logo.svg'
import "../Components/assets/css/main.css"
function About()
{
    return(
        <>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/about.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:42 GMT */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>:: Oreo Hospital :: About</title>
  <link rel="icon" href="favicon.ico" />
  {/* start linking */}
  <link
    rel="stylesheet"
    href="assets/plugins/bootstrap/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="assets/plugins/aos/aos.min.css" />
  <link
    rel="stylesheet"
    href="assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.css"
  />
  <link rel="stylesheet" href="assets/css/main.css" />
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
      <div className="inner-banner">
          <img src={require("./assets/images/banner-about.jpg")} style={{backgroundRepeat:'no-repeat',maxHeight:'300px',height: '300px',}}></img>
        <div className="container">
          <h3 className="title">
            About Us
            <br />
            <big>
              Oreo <strong>Hospital</strong>
            </big>
          </h3>
        </div>
      </div>
    </section>
    {/* Content Area */}
    <section className="main-section">
      {/* About Us Section */}
      <div className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="section-title col-12" data-aos="fade-right">
              <h2>
                <span>About </span>Us
              </h2>
              <p>Description text here...</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-4 col-sm-6">
              <div className="box-img box-shadow" data-aos="fade-up">
                <img src={require("./assets/images/about-page-img.jpg")} alt="" />
                <span className="section-line" data-aos="fade-right" />
              </div>
            </div>
            <div className="col-md-7 col-sm-6">
              <div className="page-text">
                <div
                  className="section-top"
                  data-aos="fade-up"
                  data-aos-duration={4000}
                >
                  <p>
                    <strong>Oreo Hospital</strong> isIt is a long established
                    fact that a reader will be distracted by the readable
                    content.
                  </p>
                </div>
                <p data-aos="fade-up" data-aos-duration={4000}>
                  It is a long established fact that a reader will be distracted
                  by the readable content more or less normal distribution of
                  letters opposed.
                </p>
                <div
                  className="mission-vision"
                  data-aos="fade-up"
                  data-aos-duration={4000}
                >
                  <div className="grp-area mission">
                    <i className="zmdi zmdi-favorite" />
                    <h5>Our Mission</h5>
                    <p>
                      Reader will be distracted by the readable content of a
                      page when looking at its layout the point of using more or
                      less normal distribution.
                    </p>
                  </div>
                  <div className="grp-area vision">
                    <i className="zmdi zmdi-eye" />
                    <h5>Our Vision</h5>
                    <p>
                      Reader will be distracted by the readable content of a
                      page when looking at its layout the point of using more or
                      less normal distribution.
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="zmdi zmdi-thumb-up" />
                        <p>Idea of denouncing pleasure and praising.</p>
                      </li>
                      <li>
                        <i className="zmdi zmdi-thumb-up" />
                        <p>Pleasure and praising pain was complete system.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="opening-hours"
                  data-aos="fade-up"
                  data-aos-duration={4000}
                >
                  <h6>
                    <i className="zmdi zmdi-time" /> Opening Hours
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <label>
                        <i className="zmdi zmdi-chevron-right" /> Saturday
                      </label>
                      <span>9:00 - 20:00</span>
                    </li>
                    <li>
                      <label>
                        <i className="zmdi zmdi-chevron-right" /> Sunday
                      </label>
                      <span>9:00 - 20:00</span>
                    </li>
                    <li>
                      <label>
                        <i className="zmdi zmdi-chevron-right" /> Monday -
                        Friday
                      </label>
                      <span>9:00 - 20:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      {/* Why choose us */}
      <div className="what-we-do">
        <div className="container">
          <div className="row">
            <div className="section-title col-12" data-aos="fade-right">
              <h2>
                <span>Why </span>Choose Us
              </h2>
              <p>Description text here...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-account-add" />
                <h6>Qualified Doctors</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-collection-add" />
                <h6>Blood Bank</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-hospital-alt" />
                <h6>Modren Clinic</h6>
                <p>
                  How all this mistaken idea denoucing pleasure and praisings
                  pain was born complete account expound.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-thumb-up" />
                <h6>Emergency</h6>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-headset-mic" />
                <h6>24x7 Service</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="what-we-box"
                data-aos="fade-right"
                data-aos-duration={5000}
              >
                <i className="zmdi zmdi-shield-check" />
                <h6>Health Care</h6>
                <p>
                  How all this mistaken idea denoucing pleasure and praisings
                  pain was born complete account expound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why choose us */}
      {/* Fun Fact */}
      <div className="fun-fact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="fun-fact-box text-center">
                <i className="zmdi zmdi-account" />
                <span
                  className="counter timer"
                  data-from={0}
                  data-to={652}
                  data-speed={2500}
                  data-fresh-interval={700}
                >
                  652
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="fun-fact-box text-center">
                <i className="zmdi zmdi-favorite" />
                <span
                  className="counter timer"
                  data-from={0}
                  data-to={7652}
                  data-speed={2500}
                  data-fresh-interval={700}
                >
                  7652
                </span>
                <p>Heart Transplant</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="fun-fact-box text-center">
                <i className="zmdi zmdi-thumb-up" />
                <span
                  className="counter timer"
                  data-from={0}
                  data-to={52}
                  data-speed={2500}
                  data-fresh-interval={700}
                >
                  52
                </span>
                <p>Years Of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="fun-fact-box text-center">
                <i className="zmdi zmdi-mood" />
                <span
                  className="counter timer"
                  data-from={0}
                  data-to={7652}
                  data-speed={2500}
                  data-fresh-interval={700}
                >
                  7652
                </span>
                <p>Well Smiley Faces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fun Fact */}
      {/* Our Location */}
      <div className="our_location">
        <div className="container">
          <div className="row justify-content-between">
            <div className="section-title col-4" data-aos="fade-right">
              <h2>
                <span>Our </span>Location
              </h2>
              <p>Description text here...</p>
            </div>
            <div className="section-title col-7" data-aos="fade-left">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div style={{margin:'30px 0'}}><img  src={require("../Components/assets/images/map.jpg")} style={{height:'300px'}}></img></div>
            </div>
            <div className="col-lg-12 col-md-12">
              <ul className="row location_list list-unstyled">
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-turquoise">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={453}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      453
                    </h4>
                    <span>America</span>
                  </div>
                </li>
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-khaki">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={124}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      124
                    </h4>
                    <span>Australia</span>
                  </div>
                </li>
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-parpl">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={215}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      215
                    </h4>
                    <span>Canada</span>
                  </div>
                </li>
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-salmon">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={155}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      155
                    </h4>
                    <span>India</span>
                  </div>
                </li>
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-blue">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={78}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      78
                    </h4>
                    <span>UK</span>
                  </div>
                </li>
                <li className="col-lg-2 col-md-4 col-6">
                  <div className="body xl-slategray">
                    <i className="zmdi zmdi-pin" />
                    <h4
                      className="counter timer"
                      data-from={0}
                      data-to={55}
                      data-speed={2500}
                      data-fresh-interval={700}
                    >
                      55
                    </h4>
                    <span>Other</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Our Location */}
      {/* Our Team */}
      <div className="our-team about-team">
        <div className="container">
          <div className="row justify-content-between">
            <div className="section-title left col-lg-4" data-aos="fade-right">
              <h2>
                <span>Meet </span>Our Team
              </h2>
              <p>Description text here...</p>
            </div>
            <div className="section-title right col-lg-8" data-aos="fade-left">
              <p>
                <span className="color-212121">Oreo Hospital</span> The wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-box text-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={5000}
              >
                <div className="doctor-pic">
                  <img src={require("./assets/images/team-member-01.png")} alt="Dr. John" />
                </div>
                <div className="doctor-info">
                  <h4>
                    Dr. John <span>Dentist</span>
                  </h4>
                  <ul className="clearfix">
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn btn-simple btn-primary btn-round"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-box text-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={4000}
              >
                <div className="doctor-pic">
                  <img
                    src={require("./assets/images/team-member-02.png")}
                    alt="Dr. Amelia"
                  />
                </div>
                <div className="doctor-info">
                  <h4>
                    Dr. Amelia <span>Gynecologist</span>
                  </h4>
                  <ul className="clearfix">
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn btn-simple btn-primary btn-round"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-box text-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={5000}
              >
                <div className="doctor-pic">
                  <img src={require("./assets/images/team-member-03.png")} alt="Dr. Jack" />
                </div>
                <div className="doctor-info">
                  <h4>
                    Dr. Jack <span>Audiology</span>
                  </h4>
                  <ul className="clearfix">
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-google-plus" />
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn btn-simple btn-primary btn-round"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-box text-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={3000}
              >
                <div className="doctor-pic">
                  <img
                    src={require("./assets/images/team-member-04.png")}
                    alt="Dr. Charlie"
                  />
                </div>
                <div className="doctor-info">
                  <h4>
                    Dr. Charlie<span>Dentist</span>
                  </h4>
                  <ul className="clearfix">
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn btn-simple btn-primary btn-round"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Team */}
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
  {/* JVectorMap Plugin Js */}
  {/* my js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/about.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:43 GMT */}
</>

    )
}
export default About;