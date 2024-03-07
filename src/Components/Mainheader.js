import React from 'react'
import {Link} from 'react-router-dom'
const MainNavBar = () => {
    return (
        <>
            <div id="navbar" data-aos="fade-down">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/department">Departments</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/doctors">Doctors</Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="Blog">Blog</a>
                                        <a className="dropdown-item" href="">Blog Detail</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">About Us</a>
                                        <a className="dropdown-item" href="#">FAQs</a>
                                        <a className="dropdown-item" href="#">Galary</a>
                                        <a className="dropdown-item" href="#">Price list</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                                <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="">Sign in</a></li>
                                <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="">Sign up</a></li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MainNavBar
