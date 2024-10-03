import React from "react";
import "../Home/Home.css";
import hero from "../Home/Image/home.webp"

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container ">
                    <div class="row featurette d-flex align-items-center">
                        <div class="col-md-7 ">
                            <h1 class="featurette-heading crafted">Crafted by Team Designed for Future </h1>
                            <br />
                            <p class="lead">Orufy Technology fuses human insight with AI, delivering seamless, scalable customer service. Our innovative platform adapts to every need, shaping a future of continuous learning and exceptional experiences.</p>
                        </div>
                        <div class="col-md-5">
                            <img src={hero} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700"alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;