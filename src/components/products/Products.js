import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Product_detail from "../product_detail/Product_detail";
export default function Products() {
        const [data, setData] = useState([]);
        const url = "https://658c2957859b3491d3f59c3a.mockapi.io/Product";
        useEffect(() => {
                axios.get(url).then(function (res) {
                        setData(res.data);
                });
        }, []);
        return (
                <div>
                        {/* để canh lề thì phải bọc bằng Container */}
                        <Container>
                                {/* nằm trong cột thì bọc bằng Row */}
                                <Row>
                                        {data.map((item, index) => (
                                                <Product_detail key={index} product={item} />
                                        ))}
                                </Row>
                        </Container>
                </div>
        );
}
