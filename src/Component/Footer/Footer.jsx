import React from "react";
import "../Footer/Footer.css"
import logo from "../Navbar/Image/logo.png"


const Footer = () => {
    return (
        <>
            <div class="container">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div class="col mb-3 fotter-logo-sec">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <h3 className="fw-bold Orufy-ft">Orufy </h3>
                        </a>
                        <p>Transforming your Digital Vision into Reality.</p>
                    </div>

                    <div class="col mb-3">

                    </div>

                    <div class="col mb-3">
                        <h5>Company</h5>
                        <br />
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Teams</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Refund Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Blog</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <h5>Products</h5>
                        <br />
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Webtonative</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Orufy Connect</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Bookings</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Projects</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <h5>Contact Information</h5>
                        <br />
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><span><i class="fa-solid fa-envelope px-2"></i></span>support@orufy.com</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><span><i class="fa-solid fa-phone px-2"></i></span>+91-12345678900</a></li>
                        </ul>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <div className="col logos d-flex gap-4">
                        <span><i class="fa-brands fa-facebook-f fs-5"></i></span>
                        <span><i class="fa-brands fa-linkedin fs-4"></i></span>
                        <span><i class="fa-brands fa-x-twitter fs-4"></i></span>
                        <span><i class="fa-brands fa-instagram fs-4"></i></span>
                    </div>
                    <hr />
                    <div class="flex justify-center">
                        <p class="text-center md:text-xs text-gray-600 pl-1">ⓒ2024 Orufy Technologies All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Footer;