import React from "react";
import Carousel from "better-react-carousel";
import h1 from "../../imgs/gallery/h1.jpg";
import h2 from "../../imgs/gallery/h2.jpg";
import h3 from "../../imgs/gallery/h3.jpg";
import h4 from "../../imgs/gallery/h4.jpg";
import h5 from "../../imgs/gallery/h5.jpg";
import h6 from "../../imgs/gallery/h6.jpg";
import h7 from "../../imgs/gallery/h7.jpg";
import h8 from "../../imgs/gallery/h8.jpg";
import h9 from "../../imgs/gallery/h9.jpg";
import h10 from "../../imgs/gallery/h10.jpg";
import h11 from "../../imgs/gallery/h11.jpg";
import h12 from "../../imgs/gallery/h12.jpg";
import { Container } from "reactstrap";
import "./gallery.css";

export default function Gallery() {
    return (
        <div className="gallery">
            <Container>
                <h3>CHECK OUT OUR GALLERY</h3>
                <p>Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu consequat ac.</p>
                <Carousel cols={6} rows={2} gap={10}>
                    <Carousel.Item>
                        <img width="100%" src={h1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h4} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h5} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h6} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h7} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h8} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h9} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h10} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h11} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={h12} />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}
