import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Post_detail from "../post_detail/Post_detail";
import { PostList } from "../post_detail/DataPost";
export default function Posts() {
        return (
                <div>
                        <Container>
                                <Row>
                                        {PostList.map((item, index) => (
                                                <Post_detail key={index} blog={item} />
                                        ))}
                                </Row>
                        </Container>
                </div>
        );
}
