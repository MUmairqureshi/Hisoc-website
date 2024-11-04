import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import logo from '../src/Assets/images/logo.png'
// import 'swiper/swiper-bundle.min.css';

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
// import {  SwiperSlide } from 'swiper/react';
// import  {  Autoplay } from 'swiper';


function App() {
    return (
        <>

            <section className='header-section'>

                <div className="container  py-2">
                    <div className="d-flex flex-wrap justify-content-between align-items-center text-white">
                        <div className="header-item d-flex align-items-center">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            PO Box 1293, Placentia, CA 92871
                        </div>
                        <div className="header-item d-flex align-items-center">
                            <i className="bi bi-clock me-2"></i>
                            Mon – Thu 9AM – 5PM, Fri 9AM – 4PM
                        </div>
                        <div className="header-item d-flex align-items-center">
                            <i className="bi bi-telephone-fill me-2"></i>
                            (714) 993-5774
                        </div>
                        <div className="header-item d-flex align-items-center">
                            <i className="bi bi-envelope me-2"></i>
                            info@his-oc.org
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                    <div className="container">
                        {/* First logo: visible only in responsive mode */}
                        <a className="navbar-brand d-flex align-items-center d-lg-none" href="/">
                            <img src={logo} alt="Logo" style={{ height: '40px' }} />
                        </a>

                        {/* Navbar Toggler */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                            {/* Navigation Links */}
                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            About
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Our Works
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Get Help</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Donate
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Second logo: visible only in full-screen mode */}
                            <div className="d-none d-lg-block">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="Logo" style={{ height: '40px' }} />
                                </a>
                            </div>

                            {/* Right-aligned buttons and icons */}
                            <div className="d-flex align-items-center">
                                <a href="/" className="text-dark me-3">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="/" className="text-dark me-3">
                                    <i className="bi bi-x"></i>
                                </a>
                                <a href="/" className="text-dark me-3">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <button className="btn btn-outline-primary me-2">Events</button>
                                <button className="btn btn-warning text-dark">Donate</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>








            <section>
                <Swiper pagination={true} modules={[Pagination]} slidesPerView={'auto'} className="mySwiper">
                    <SwiperSlide>


                        <div className='inerhero'>

                            <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <h5 className="text-info mb-2">Helping Them Home For Good</h5>
                                        <h1 className="display-4 fw-bold mb-3">
                                            We Transition People out of <span className="text-warning">Homelessness</span>
                                        </h1>
                                        <p className="mb-4">
                                            Our shelters and supportive service programs assist people who are homeless or at risk of being homeless.
                                        </p>
                                        <div className="d-flex">
                                            <button className="btn btn-warning text-dark me-3">Give Help</button>
                                            <button className="btn btn-outline-light">Get Help</button>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>


                        <div className='inerhero'>

                            <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <h5 className="text-info mb-2">Helping Them Home For Good</h5>
                                        <h1 className="display-4 fw-bold mb-3">
                                            We Transition People out of <span className="text-warning">Homelessness</span>
                                        </h1>
                                        <p className="mb-4">
                                            Our shelters and supportive service programs assist people who are homeless or at risk of being homeless.
                                        </p>
                                        <div className="d-flex">
                                            <button className="btn btn-warning text-dark me-3">Give Help</button>
                                            <button className="btn btn-outline-light">Get Help</button>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>


                        <div className='inerhero'>

                            <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <h5 className="text-info mb-2">Helping Them Home For Good</h5>
                                        <h1 className="display-4 fw-bold mb-3">
                                            We Transition People out of <span className="text-warning">Homelessness</span>
                                        </h1>
                                        <p className="mb-4">
                                            Our shelters and supportive service programs assist people who are homeless or at risk of being homeless.
                                        </p>
                                        <div className="d-flex">
                                            <button className="btn btn-warning text-dark me-3">Give Help</button>
                                            <button className="btn btn-outline-light">Get Help</button>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>





                </Swiper>


            </section>


            <section className="how-we-do-it py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold">How <span className="text-primary">We Do</span> It</h2>
                        <p>
                            Homeless Intervention Services of Orange County (HIS-OC) currently runs four programs that assist people who are homeless or at risk of being homeless. Our shelters and supportive service programs provide assistance to our community's most vulnerable population. HIS-OC does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
                        </p>
                    </div>
                    {/* Right Section */}
                    <div className="col-md-6 text-center text-md-start position-relative">
                        <div className="overlay-content">
                            <h2 className="fw-bold">
                                You Must Be The <span className="text-warning">Change</span> You Wish To See In The <span className="text-primary">World</span>
                            </h2>
                            <a href="#!" className="contact-badge">
                                <img src="/path/to/donate-badge.png" alt="Contact Us" className="contact-img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


















        <section className="what-sets-us-apart text-white py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-3">
                    What Sets Us <span className="text-warning">Apart</span>
                </h2>
                <p className="mb-0">
                    We are different from an emergency shelter or single program shelter because we provide a longer-term guided process to achieve self-sufficiency. Our programs require a commitment on the part of our clients and provide tools so that a return to homelessness is prevented. Homeless Intervention Services of Orange County integrates job training, therapy, case management, and education into a continuum of care that addresses each client’s specific needs.
                </p>
            </div>
        </section>









<section className='footer'>



<footer className="footer py-4 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h3 className="fw-bold">HIS<span className="text-primary">OC</span></h3>
                        <p className="fw-bold mb-2">Building A Future Without <span className="text-primary">Homelessness.</span></p>
                        <p>
                            <a href="#!" className="text-decoration-none text-primary">HISOC</a> helps people experiencing or at risk of homelessness build new lives through construction, community engagement, and education.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>About HomeAid</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-decoration-none">About Us</a></li>
                            <li><a href="#!" className="text-decoration-none">Board & Team</a></li>
                            <li><a href="#!" className="text-decoration-none">News & Announcements</a></li>
                            <li><a href="#!" className="text-decoration-none">Become A Volunteer</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Our Impact</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-decoration-none">Projects</a></li>
                            <li><a href="#!" className="text-decoration-none">Community</a></li>
                            <li><a href="#!" className="text-decoration-none">HISOC Works</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Get Involved</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-decoration-none">Ways To Give</a></li>
                            <li><a href="#!" className="text-decoration-none">Events</a></li>
                            <li><a href="#!" className="text-decoration-none">Make A Donation</a></li>
                            <li><a href="#!" className="text-decoration-none">Be A Sponsor</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-decoration-none">Get Help?</a></li>
                            <li><a href="#!" className="text-decoration-none">Financials</a></li>
                            <li><a href="#!" className="text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>













        <footer className="footer-bottom bg-dark text-white py-3">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                {/* Left section with logos */}
                <div className="d-flex align-items-center">
                    <img src="/path/to/logo1.png" alt="501(c)(3)" className="footer-logo me-3" />
                    <img src="/path/to/logo2.png" alt="Nonprofit Central" className="footer-logo me-3" />
                    <img src="/path/to/logo3.png" alt="Gold Transparency 2024" className="footer-logo" />
                </div>
                {/* Center section for copyright text */}
                <div className="text-center">
                    <p className="mb-0">
                        © Copyright 2007-2022, HISOC America. All Rights Reserved.
                        <br />
                        Designed by United Design Group | <a href="#!" className="text-decoration-none text-white">Legal</a> | <a href="#!" className="text-decoration-none text-white">Privacy</a>
                    </p>
                </div>
                {/* Right section with social icons and donate button */}
                <div className="d-flex align-items-center">
                    <FaFacebookF className="footer-icon me-2" />
                    <FaInstagram className="footer-icon me-2" />
                    <FaLink className="footer-icon" />
                    <a href="#!" className="donate-button ms-3 text-decoration-none">
                        <img src="/path/to/donate-badge.png" alt="Donate" className="donate-badge" />
                    </a>
                </div>
            </div>
        </footer>
</section>










        </>

    );
}

export default App;
