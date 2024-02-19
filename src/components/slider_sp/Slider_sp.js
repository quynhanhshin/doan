import React from "react";
import Slider from "react-slick";
import "./slider_sp.css";
import pic01 from "../../imgs/slider-img1.png";
import pic02 from "../../imgs/slider-img2.png";
import pic03 from "../../imgs/slider-img3.png";
import pic04 from "../../imgs/slider-img4.png";
import pic05 from "../../imgs/slider-img5.png";
import pic06 from "../../imgs/slider-img6.png";
import pic07 from "../../imgs/slider-img7.png";
export default function Responsive() {
        const settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 8,
                slidesToScroll: 1,
                responsive: [
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        infinite: true,
                                        dots: true,
                                },
                        },
                        {
                                breakpoint: 600,
                                settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                        initialSlide: 2,
                                },
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                },
                        },
                ],
        };
        return (
                <div className="meo">
                        <div className="slider2">
                                <Slider {...settings}>
                                        <div>
                                                <img src={pic01} />
                                                <p>Other</p>
                                        </div>
                                        <div>
                                                <img src={pic02} />
                                                <p>Specials</p>
                                        </div>
                                        <div>
                                                <img src={pic03} />
                                                <p>Carriage</p>
                                        </div>
                                        <div>
                                                <img src={pic01} />
                                                <p>New</p>
                                        </div>
                                        <div>
                                                <img src={pic05} />
                                                <p>Bottles</p>
                                        </div>
                                        <div>
                                                <img src={pic06} />
                                                <p>Cribs</p>
                                        </div>
                                        <div>
                                                <img src={pic07} />
                                                <p>Beds</p>
                                        </div>
                                        <div>
                                                <img src={pic01} />
                                                <p>Toys</p>
                                        </div>
                                </Slider>
                        </div>
                </div>
        );
}
