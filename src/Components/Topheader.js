import React from 'react'

const TopNavBar = () => {
    return (
        <>
            <section id="top-nav">
                <div class="container">
                    <div class="top">
                        <div class="row">
                            <div class="col-lg-6 col-md-7">
                                <div class="left">
                                    <ul class="list-unstyled m-b-0">
                                        <li><a href="#" class="btn btn-link"><i class="zmdi zmdi-email m-r-5"></i>info@example.com</a>
                                            <a href="#" class="btn btn-link"><i class="zmdi zmdi-phone m-r-5"></i>+
                                                202-555-0191</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="text-right d-none d-md-block">
                                    <ul class="list-unstyled m-b-0">
                                        <li><a href="Login" class="btn btn-link">Sign in</a>
                                            <a href="Register" class="btn btn-link">sign
                                                up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopNavBar
