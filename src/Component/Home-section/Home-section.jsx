import React from "react";
import "../Home-section/Home-section.css"
import image1 from "../Home-section/img1.png"
import image2 from "../Home-section/img2.png"
import image3 from "../Home-section/img3.png"
import image4 from "../Home-section/img4.png"
import image5 from "../Home-section/img5.png"
import image6 from "../Home-section/img6.png"
import image7 from "../Home-section/img7.png"
import image8 from "../Home-section/img8.png"
import bookingimg from "../Contact/3.png"
import bookingimg1 from "../Contact/1.png"
import bookingimg2 from "../Contact/2.png"
import bookingimg3 from "../Contact/4.png"
import calenderimg from "../Home-section/calender.webp"
import assignment from "../Home-section/Assignment.webp"
import convert from "../Home-section/convert.webp"
import manage from "../Home-section/manage.webp"
import single from "../Home-section/single.png"
import instagram from "../Home-section/img_2_8f97bd3be4.png"

const Homesec = () => {
    return (
        <>
            <div id="contentCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="mask">
                            <div class="d-flex justify-content-center align-items-center h-80">
                                <div class="text-white text-centers" data-mdb-theme="dark">
                                    <div className="insidetext">
                                        <h1 class="mb-3 text-dark build">Build your business with powerful digital products</h1>
                                        <h5 class="mb- smart">Smart products designed to make operation easier and increase productivity. Achieve more with our AI-driven solutions.</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="container p-3 rounded-4 border mainsec mt-4">
                                <div className="d-flex justify-content-evenly text-center maininside">

                                    {/* First column */}
                                    <div className="p-2 d-flex flex-column justify-content-between align-items-center">
                                        <p className="h4 fw-bold text-primarys">5+ </p>
                                        <p className=" trusted">Years of Experience</p>
                                        <div className="hr-line position-absolute d-none d-md-block"></div>
                                    </div>

                                    {/* Second column */}
                                    <div className="p-2 d-flex flex-column justify-content-center align-items-center position-relative">
                                        <p className="h4 fw-bold  text-primarys">5k </p>
                                        <p className=" trusted">Trusted Businesses</p>
                                        <div className="hr-line position-absolute d-none d-md-block"></div>
                                    </div>

                                    {/* Third column */}
                                    <div className="p-2 d-flex flex-column justify-content-center align-items-center">
                                        <p className="h4 fw-bold text-primarys">98% </p>
                                        <p className=" trusted">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* animation */}
            <div class=" py-5">
                <div className="marquee">
                    <div className="marquee-inner">
                        <div className="d-flex justify-content-center gap-5 align-items-center">
                            <div className="col-auto text-center">
                                <img src={image1} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image2} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image3} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image4} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image5} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image6} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image7} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                            <div className="col-auto text-center">
                                <img src={image8} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* project */}
            <div className="container">
                <section class="pb-4 ">
                    <div class=" jw">
                        <br />
                        <br />
                        <section class="d-flex justify-content-center text-center ">
                            <div class="multi-carousel">
                                <div class="multi-carousel-inner">
                                    <div class="multi-carousel-item position-relative border inner-imgs">
                                        <div className="inner-img">
                                            <img src={bookingimg} alt="Table Full of Spices" class="img-fluida" />
                                            <h4 className="">Bookings</h4>
                                        </div>
                                        <div class="overlay d-flex flex-column justify-content-center">

                                        </div>
                                    </div>

                                    <div class="multi-carousel-item position-relative border inner-imgs">
                                        <div className="inner-img">
                                            <img src={bookingimg1} alt="Table Full of Spices" class="img-fluida" />
                                            <h4 className="">Connect</h4>
                                        </div>
                                        <div class="overlay d-flex flex-column justify-content-center">

                                        </div>
                                    </div>

                                    <div class="multi-carousel-item position-relative border inner-imgs">
                                        <div className="inner-img">
                                            <img src={bookingimg2} alt="Table Full of Spices" class="img-fluida" />
                                            <h4 className="">Webtonative</h4>
                                        </div>
                                        <div class="overlay d-flex flex-column justify-content-center">

                                        </div>
                                    </div>
                                    <div class="multi-carousel-item position-relative border inner-imgs">
                                        <div className="inner-img">
                                            <img src={bookingimg3} alt="Table Full of Spices" class="img-fluida" />
                                            <h4 className="">Projects</h4>
                                        </div>
                                        <div class="overlay d-flex flex-column justify-content-center">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            {/* projject all */}
            <div className="container mt-5">
                <div class="row featurette">
                    <div class="col-md-7">
                        <br />
                        <span className="imgcount">
                            <img src={bookingimg} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg p-2 rounded-2" width="50" height="50" alt="" />
                        </span>
                        <br />
                        <br />
                        <h2 class="featurette-heading fw-bold">Easy scheduling for easy access</h2>
                        <img src="" alt="" />

                        <p class="lead">Orufy Bookings is user-friendly appointment scheduling software that simplifies meeting planning. Avoid phone calls, back-and-forth emails, and repetitive tasks with ease. Let customers self-schedule while you focus on growing your business.</p>
                        <br />
                        <div className="try">
                            <button type="button" class="btn btn-primarys">Try Bookings</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src={calenderimg} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="500" alt="" />
                        <p class="leads">Orufy Bookings is user-friendly appointment scheduling software that simplifies meeting planning. Avoid phone calls, back-and-forth emails, and repetitive tasks with ease. Let customers self-schedule while you focus on growing your business.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div class="row featurette">
                    <div class="col-md-7">
                        <br />
                        <span className="imgcount">
                            <img src={bookingimg1} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg p-2 rounded-2" width="50" height="50" alt="" />
                        </span>
                        <br />
                        <br />
                        <h2 class="featurette-heading fw-bold">Chatbot solution for your customer support</h2>
                        <img src="" alt="" />

                        <p class="lead">Orufy Connect equips your marketing, sales, and support teams to engage every site visitor at any stage of the customer lifecycle. This all-in-one live chat and analytics platform enhances proactive customer interaction, enabling you to start the right conversation at the perfect moment.</p>
                        <br />
                        <div className="try">
                            <button type="button" class="btn btn-primarys">Try Connect</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src={assignment} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="500" alt="" />
                        <p class="leads">Orufy Connect equips your marketing, sales, and support teams to engage every site visitor at any stage of the customer lifecycle. This all-in-one live chat and analytics platform enhances proactive customer interaction, enabling you to start the right conversation at the perfect moment.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div class="row featurette">
                    <div class="col-md-7">
                        <br />
                        <span className="imgcount">
                            <img src={bookingimg2} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg p-2 rounded-2" width="50" height="50" alt="" />
                        </span>
                        <br />
                        <br />
                        <h2 class="featurette-heading fw-bold">Convert your website into mobile app</h2>
                        <img src="" alt="" />

                        <p class="lead">WebToNative offer an affordable solution for mobile app development by converting websites into iOS and Android apps. With a simple process and personalized service, we make mobile app development accessible to all businesses.</p>
                        <br />
                        <div className="try">
                            <button type="button" class="btn btn-primarys">Try Webtonative</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src={convert} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="500" alt="" />
                        <p class="leads">WebToNative offer an affordable solution for mobile app development by converting websites into iOS and Android apps. With a simple process and personalized service, we make mobile app development accessible to all businesses.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div class="row featurette">
                    <div class="col-md-7">
                        <br />
                        <span className="imgcount">
                            <img src={bookingimg3} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg p-2 rounded-2" width="50" height="50" alt="" />
                        </span>
                        <br />
                        <br />
                        <h2 class="featurette-heading fw-bold">Manage teams and tasks with easy workflow</h2>
                        <img src="" alt="" />

                        <p class="lead">Orufy Projects is a game-changing task management tool that boosts your efficiency at work. Easily create tasks, assign them, and track progress. With features like subtasks, due dates, and comments, managing tasks has never been smoother.</p>
                        <br />
                        <div className="try">
                            <button type="button" class="btn btn-primarys">Try Projects</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src={manage} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="500" alt="" />
                        <p class="leads">Orufy Projects is a game-changing task management tool that boosts your efficiency at work. Easily create tasks, assign them, and track progress. With features like subtasks, due dates, and comments, managing tasks has never been smoother.</p>
                    </div>
                </div>
            </div>

            <div className="container singlesec">
                <h2 class="featurette-heading fw-bold text-center pb-4">One account for all</h2>
                <p>Orufy's Single Sign-On (SSO) technology merges multiple application login screens into one, simplifying user access. With SSO, users only need to enter their credentials once on a single page to access our all SaaS applications.</p>
                <img src={single} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="" />
            </div>
            <div className="container">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2 mt-5">
                        <br />
                        <h2 class="featurette-heading fw-bold">Orufy products ecosystem</h2>
                        <br />
                        <p class="lead">Orufy's integrated ecosystem includes an AI chatbot, booking platform, app converter, and project management tools, all accessible with one login. It helps businesses engage customers, manage teams, and improve productivity seamlessly and efficiently.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={instagram} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="500" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};


export default Homesec;
