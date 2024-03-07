import logo from './assets/images/logo.svg'
function faq()
{
    return(
<>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/faq.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:43 GMT */}

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
          <img src={require("./assets/images/banner-faqs.jpg")} style={{backgroundRepeat:'no-repeat',maxHeight:'300px',height: '300px',}}></img>
        <div className="container">
          <h3 className="title">
            Oreo
            <br />
            <strong>FAQs</strong>
          </h3>
        </div>
      </div>
    </section>
    {/* Content Area */}
    <section className="main-section">
      {/* FAQs */}
      <div className="faqs">
        <div className="container">
          <div className="row">
            <div className="section-title col-12" data-aos="fade-right">
              <h2>
                <span>FAQs </span>
              </h2>
              <p>Description text here...</p>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-md-12 col-lg-12">
              <div
                className="panel-group"
                id="accordion_1"
                role="tablist"
                aria-multiselectable="true"
              >
                <div
                  className="panel panel-primary"
                  data-aos="fade-up"
                  data-aos-duration={5000}
                >
                  <div className="panel-heading" role="tab" id="headingOne_1">
                    <h4 className="panel-title">
                      {" "}
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion_1"
                        href="#collapseOne_1"
                        aria-expanded="true"
                        aria-controls="collapseOne_1"
                      >
                        {" "}
                        Using This Dedicated Purpose Theme?
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseOne_1"
                    className="panel-collapse collapse in show"
                    role="tabpanel"
                    aria-labelledby="headingOne_1"
                  >
                    <div className="panel-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-primary"
                  data-aos="fade-up"
                  data-aos-duration={5000}
                >
                  <div className="panel-heading" role="tab" id="headingTwo_1">
                    <h4 className="panel-title">
                      {" "}
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion_1"
                        href="#collapseTwo_1"
                        aria-expanded="false"
                        aria-controls="collapseTwo_1"
                      >
                        Do You Examine Children At Your Clinic?
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseTwo_1"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo_1"
                  >
                    <div className="panel-body">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                      <img
                        src="assets/images/banner-doctors-detail.jpg"
                        className="m-t-10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-primary"
                  data-aos="fade-up"
                  data-aos-duration={4000}
                >
                  <div className="panel-heading" role="tab" id="headingThree_1">
                    <h4 className="panel-title">
                      {" "}
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion_1"
                        href="#collapseThree_1"
                        aria-expanded="false"
                        aria-controls="collapseThree_1"
                      >
                        Do You Have Imaging (X-Rays, Ultrasonography, CT-Scan)
                        Facilities?
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseThree_1"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree_1"
                  >
                    <div className="panel-body">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                      <blockquote>
                        <p className="blockquote blockquote-primary m-t-15">
                          "I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers.
                          I understand culture. I am the nucleus. I think that’s
                          a responsibility that I have, to push possibilities,
                          to show people, this is the level that things could be
                          at."
                          <br />
                          <br />
                          <small>- Oreo</small>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-primary"
                  data-aos="fade-up"
                  data-aos-duration={3000}
                >
                  <div className="panel-heading" role="tab" id="headingfour_1">
                    <h4 className="panel-title">
                      {" "}
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion_1"
                        href="#collapsefour_1"
                        aria-expanded="false"
                        aria-controls="collapsefour_1"
                      >
                        Do You Examine Children At Your Clinic?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsefour_1"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingfour_1"
                  >
                    <div className="panel-body">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                      <img
                        src="assets/images/doctor-detail-map.png"
                        className="m-t-10"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
  {/* Mirrored from thememakker.com/templates/oreo/hospital/front/faq.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:42:43 GMT */}
</>

    )
}
export default faq;