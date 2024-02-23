import React from "react";
import "./post_detail.css";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { PostList } from "../post_detail/DataPost";

export default function Post_detail(props) {
    const { blog } = props;
    return (
        <Col md={6} lg={4}>
            <Link to={`/blog/${blog.id}`}>
                <Card className="post-detail">
                    <div className="img">
                        <img alt="Sample" src={blog.img} />
                    </div>

                    <CardBody className="body-post">
                        <CardTitle className="title-post" tag="h5">
                            {blog.title}
                        </CardTitle>
                        <CardText className="content-post">{blog.content}</CardText>
                        <CardText className="btn-post">READ MORE</CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    );
}
