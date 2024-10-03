import React from "react";
import "../About/About.css";
import history from "../About/history.webp"
import vision from "../About/vision.webp"
import instagram from "../Home-section/img_2_8f97bd3be4.png"
import team1 from "../About/team1.png"
import team2 from "../About/team2.png"
import team3 from "../About/team3.png"
import office1 from "../About/gallery1.jpeg"
import office2 from "../About/gallery2.jpeg"
import office3 from "../About/gallery3.jpeg"
import office4 from "../About/gallery4.jpeg"
import Home from "../Home/Home";

const History = () => {
    return (

        <>
            <Home />
            <br />
            <br />
            <br />
            <div className="container">
                <div class="row featurette d-flex align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h1 class="featurette-heading crafted our-history">Our History</h1>
                        <br />
                        <p class="lead">A dynamic SaaS-based enterprise specializing in delivering cutting-edge digital products and business solutions. Founded in 2019, we have rapidly emerged as a trusted partner for enterprises seeking to innovate and streamline their operations in the digital age.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={history} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="700" alt="history" />
                        <p class="leads mt-4">A dynamic SaaS-based enterprise specializing in delivering cutting-edge digital products and business solutions. Founded in 2019, we have rapidly emerged as a trusted partner for enterprises seeking to innovate and streamline their operations in the digital age.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div class="row featurette d-flex align-items-center">
                    <div class="col-md-7">
                        <h1 class="featurette-heading crafted our-history">Our Vision & Mission</h1>
                        <br />
                        <p class="lead">To provide cutting-edge, scalable software solutions that drive efficiency, enhance productivity, and foster business growth, while delivering exceptional customer support and continuous improvement.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={vision} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" alt="" />

                        <p class="leads mt-4">To provide cutting-edge, scalable software solutions that drive efficiency, enhance productivity, and foster business growth, while delivering exceptional customer support and continuous improvement.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div class="row featurette d-flex align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h1 class="featurette-heading crafted our-history">Orufy products ecosystem </h1>
                        <br />
                        <p class="lead">Our product combines an AI chatbot, booking platform, website to app converter, and project management tools. Businesses can easily engage customers, convert leads and manage teams seamlessly. With all features integrated in an ecosystem, it offers a comprehensive solution for modern businesses.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img src={instagram} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="700" alt="history" />
                        <p class="leads mt-4">Our product combines an AI chatbot, booking platform, website to app converter, and project management tools. Businesses can easily engage customers, convert leads and manage teams seamlessly. With all features integrated in an ecosystem, it offers a comprehensive solution for modern businesses.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h1 class="featurette-heading crafted text-center">Meet the team </h1>
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-lg-2 all-team">
                            <div class="col shadow-sm p-3 border rounded-4 team-1">
                                <div class="">
                                    <img src={team1} class="bd-placeholder-img card-img-top rounded-4" width="100%" height="325" alt="" />
                                    <div class="card-body">
                                        <br />
                                        <h5>Akash Kamati</h5>
                                        <p class="card-text">iOS Developer</p>
                                        <p class="card-text">Working as an iOS developer at Orufy Tech has been an incredible experience, providing a dynamic environment for innovation and growth.</p>
                                        <a href="https://www.linkedin.com/in/akashkamati/" target="_blank">
                                            <span><i class="fa-brands fa-linkedin fs-3"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col shadow-sm p-3 border rounded-4 team-1">
                                <div class="">
                                    <img src={team2} class="bd-placeholder-img card-img-top rounded-4" width="100%" height="325" alt="" />
                                    <div class="card-body">
                                        <br />
                                        <h5>Rupali Bansal</h5>
                                        <p class="card-text">UI/UX Designer</p>
                                        <p class="card-text">Working as an iOS developer at Orufy Tech allows me to blend creativity with innovation, crafting exceptional user experiences.</p>
                                        <br />
                                        <a href="https://www.linkedin.com/in/rupali-bansal/" target="_blank">
                                            <span><i class="fa-brands fa-linkedin fs-3"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col shadow-sm p-3 border rounded-4 team-1">
                                <div class="">
                                    <img src={team3} class="bd-placeholder-img card-img-top rounded-4" width="100%" height="325" alt="" />
                                    <div class="card-body">
                                        <br />
                                        <h5>Himanshu Gunwat</h5>
                                        <p class="card-text">Full Stack Developer</p>
                                        <p class="card-text">Being a full stack developer at Orufy Tech offers an exciting and rewarding opportunity to engage in cutting-edge projects and continuous learning.</p>
                                        <a href="https://www.linkedin.com/in/himanshu-gunwat/" target="_blank">
                                            <span><i class="fa-brands fa-linkedin fs-3"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
            <h1 class="featurette-heading crafted text-center">Our office gallery </h1>
            <div class="album py-5 bg-light p-2">
                <div class="">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={office1} class="bd-placeholder-img card-img-top" width="100%" height="245" alt="" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={office2} class="bd-placeholder-img card-img-top" width="100%" height="245" alt="" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={office3} class="bd-placeholder-img card-img-top" width="100%" height="245" alt="" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={office4} class="bd-placeholder-img card-img-top" width="100%" height="245" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default History;