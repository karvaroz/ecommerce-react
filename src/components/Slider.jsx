import React from "react";

function Slider() {
    return (
            <section className="home" id="home">
                <div className="swiper-container home-slider">
                    <div className="swiper-wrapper wrapper">
                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>hot pizza</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <a href="#home" className="btn">order now</a>
                            </div>
                            <div className="image">
                                <img src="home-img-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
    )
}

export default Slider;
