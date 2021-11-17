
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";




const fadeImages = [
    "https://unsplash.com/photos/OF2YeWzvwJk",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

function Slider() {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <img src={fadeImages[0]} alt="slider" />
                </div>
                <div className="each-fade">
                    <img src={fadeImages[1]} alt="slider" />
                </div>
                <div className="each-fade">
                    <img src={fadeImages[2]} alt="slider" />
                </div>
            </Fade>
        </div>
    )
}
export default Slider;
