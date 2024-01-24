import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Post_detail from "../post_detail/Post_detail";
import blog01 from "../../imgs/blog01.jpg";
import blog02 from "../../imgs/blog02.jpg";
import blog03 from "../../imgs/blog03.jpg";

export default function Posts() {
    const [data, setData] = useState([]);
    let arr = [blog01, blog02, blog03];
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Post_detail key={index} img={arr[index]} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}
