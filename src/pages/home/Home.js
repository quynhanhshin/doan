import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SliderImg from "../../components/sliderimg/SliderImg";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import axios from "axios";
import Product_detail from "../../components/product_detail/Product_detail";
import img1 from "../../imgs/img01.jpg";
import img2 from "../../imgs/img02.jpg";
import img3 from "../../imgs/img03.jpg";
import img4 from "../../imgs/img04.jpg";
import feedback01 from "../../imgs/feedback-1.png";
import feedback02 from "../../imgs/feedback-2.png";
import feedback03 from "../../imgs/feedback-3.png";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Form_email from "../../components/form-email/Form_email";
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
                        <div className="feedback">
                                <Container>
                                        <h3>HAPPY CUSTOMERS</h3>
                                        <Row>
                                                <Col sm={12} lg={4}>
                                                        <Card>
                                                                <CardBody>
                                                                        <div className="icon-feedback">
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                        </div>
                                                                        <CardText className="text-feedback">
                                                                                "Donec pretium vulputate sapien necen sagittis aliquam hac habitass platea dictumst quisque sagit."
                                                                        </CardText>
                                                                        <CardSubtitle className="person-feedback">PAWEL, CHICAGO</CardSubtitle>
                                                                </CardBody>
                                                        </Card>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                        <Card>
                                                                <CardBody>
                                                                        <div className="icon-feedback">
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                        </div>
                                                                        <CardText className="text-feedback">
                                                                                "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id donec ultricese tincidunt aru."
                                                                        </CardText>
                                                                        <CardSubtitle className="person-feedback">JASMINE, CALIFORNIA</CardSubtitle>
                                                                </CardBody>
                                                        </Card>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                        <Card>
                                                                <CardBody>
                                                                        <div className="icon-feedback">
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <i class="fa-solid fa-star"></i>
                                                                        </div>
                                                                        <CardText className="text-feedback">
                                                                                "Massa eget egestas purus viverra a in nisl nisi. Ut tortor pretium viverra suspendise potenti tempor orc ed."
                                                                        </CardText>
                                                                        <CardSubtitle className="person-feedback">LOLA, LONDON</CardSubtitle>
                                                                </CardBody>
                                                        </Card>
                                                </Col>
                                        </Row>
                                        <img className="img-feedback01" src={feedback01} />
                                        <img className="img-feedback02" src={feedback02} />
                                        <img className="img-feedback03" src={feedback03} />
                                </Container>
                        </div>
                        <div className="email">
                                <Form_email />
                        </div>
                        <Footer />
                </div>
        );
}
