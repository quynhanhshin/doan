import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import product_detail from "./product_detail.css";

export default function Product_detail(props) {
    const { product } = props;
    return (
        <Col sm={6} md={4} lg={4}>
            <div className="product-detail">
                <Link to={`/product-detail/${product.id}`}>
                    <Card>
                        <img alt="Sample" src="https://picsum.photos/300/200" />
                        <CardBody>
                            <CardSubtitle className="mb-2 text-type" tag="h6">
                                {product.type}
                            </CardSubtitle>
                            <CardTitle tag="h5">{product.name}</CardTitle>
                            <CardSubtitle className="mb-2 text-price" tag="h6">
                                ${product.price}
                            </CardSubtitle>
                            {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText> */}
                            {/* <Button>Button</Button> */}
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </Col>
    );
}
