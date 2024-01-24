import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SliderImg from "../../components/sliderimg/SliderImg";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Container, Row } from "reactstrap";
import axios from "axios";
import Product_detail from "../../components/product_detail/Product_detail";
import img1 from "../../imgs/img01.jpg";
import img2 from "../../imgs/img02.jpg";
import img3 from "../../imgs/img03.jpg";
import img4 from "../../imgs/img04.jpg";
import blog01 from "../../imgs/blog01.jpg";
import blog02 from "../../imgs/blog02.jpg";
import blog03 from "../../imgs/blog03.jpg";
import "./home.css";
import Posts from "../../components/posts/Posts";
export default function Home() {
    const [data, setData] = useState([]);
    const url = "https://658c2957859b3491d3f59c3a.mockapi.io/Product";
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    let arr = [img1, img2, img3, img4];
    return (
        <div>
            <Header />
            <SliderImg />
            <div className="best-seller">
                <h3>CRIS & BASKETS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp.</p>
                <div className="card-sp-best-seller">
                    <Container>
                        <Row>
                            {data.slice(0, 4).map((item, index) => (
                                <Product_detail key={index} product={item} img={arr[index]} a={3} /> 
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="home-blog">
                <h3>READ OUR BLOG</h3>
                <p>Dignissim enim sit amet venenatis urna convallis ae nean et tortor etiam non qu.</p>
                <div className="card-home-blog">
                    <Posts />
                </div>
            </div>
            <Footer />
        </div>
    );
}
