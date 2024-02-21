import React from "react";
import "./collection.css";
import pic01 from "../../imgs/collection/pic01.jpg";
import pic02 from "../../imgs/collection/pic02.jpg";
import pin from "../../imgs/collection/pin.png";
import product01 from "../../imgs/collection/product01.png";
import product02 from "../../imgs/collection/product02.png";
import product03 from "../../imgs/collection/product03.png";
import product04 from "../../imgs/collection/product04.png";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Button, CardLink } from "reactstrap";

export default function Collection() {
        return (
                <div className="contain-card">
                        <Row>
                                <Col sm={12} lg={6}>
                                        <Card>
                                                <img src={pic01} />
                                                <CardBody>
                                                        <CardTitle tag="h5">Best baby environment setting</CardTitle>
                                                        <CardText>Metus aliquam eleifend mi in nulla cras sedo fel.</CardText>
                                                        <CardLink href="#">VIEW COLLECTION</CardLink>
                                                </CardBody>
                                                <div className="product-collection-1">
                                                        <img className="pin-1" src={pin} />
                                                        <Card className="card-product-collection-1">
                                                                <img src={product01} />
                                                                <CardBody>
                                                                        <CardTitle className="title-product">Pink Chair</CardTitle>
                                                                        <CardText className="price-product">$189.00</CardText>
                                                                        <CardSubtitle className="read-more-collection" tag="h6">
                                                                                READ MORE
                                                                        </CardSubtitle>
                                                                </CardBody>
                                                        </Card>
                                                </div>

                                                <img className="pin-2" src={pin} />
                                        </Card>
                                </Col>
                                <Col sm={12} lg={6}>
                                        <Card>
                                                <img src={pic02} />
                                                <CardBody>
                                                        <CardTitle tag="h5">Make a dreamy nursery</CardTitle>
                                                        <CardText>Convallis a cras semper auctor neque vita teme.</CardText>
                                                        <CardLink href="#">VIEW COLLECTION</CardLink>
                                                </CardBody>
                                                <img className="pin-3" src={pin} />
                                                <img className="pin-4" src={pin} />
                                        </Card>
                                </Col>
                        </Row>
                </div>
        );
}
