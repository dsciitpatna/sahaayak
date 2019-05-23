import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import './SlideShow.css';

function Slideshow(props) {
    return (
        <div className="parentDiv">
            <Carousel effect="fade" autoplay 
                style={{position: 'relative', width: '100%', height: '100%'}}
            >
                <div className="container blur">
                    <img
                        src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
                <div className="container blur">

                    <img
                        src="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
                <div className="container blur">

                    <img
                        src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
                <div className="container blur">

                    <img
                        src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
            </Carousel>
            <span className="hoverShow">COME GET YOUR WORK DONE</span>
        </div>
    )
}

export default Slideshow;

