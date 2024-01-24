import React from "react";
import "./post_detail.css";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";

export default function Post_detail(props) {
    const { img } = props;
    return (
        <div>
            <Col>
                <Card>
                    <img alt="Sample" src={img} />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        </div>
    );
}
