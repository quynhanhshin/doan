import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import product_detail from "./product_detail.css";

export default function Product_detail(props) {
        const { product, img } = props;
        return (
                <Col sm={6} md={4} lg={props.a}>
                        {/* a là tham số   */}
                        <div className="product-detail">
                                <Link to={`/product/${product.id}`}>
                                        <Card className="product">
                                                <img alt="Img" src={img} />
                                                <CardBody>
                                                        <CardSubtitle className="mb-2 text-type" tag="h6">
                                                                {product.type}
                                                        </CardSubtitle>
                                                        <CardTitle className="title-product" tag="h5">
                                                                {product.name}
                                                        </CardTitle>
                                                        <div className="price-cart">
                                                                <CardSubtitle className="mb-2 text-price" tag="h6">
                                                                        ${product.price}
                                                                </CardSubtitle>
                                                                <CardSubtitle className="mb-2 btn-cart" tag="h6">
                                                                        ADD TO CART
                                                                </CardSubtitle>
                                                        </div>
                                                        {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText> */}
                                                        {/* <Button>Button</Button> */}
                                                </CardBody>
                                        </Card>
                                </Link>
                        </div>
                </Col>
        );
}
