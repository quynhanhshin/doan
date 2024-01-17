import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Product_detail from "../product_detail/Product_detail";
import img1 from "../../imgs/img01.jpg";
import img2 from "../../imgs/img02.jpg";
import img3 from "../../imgs/img03.jpg";
import img4 from "../../imgs/img04.jpg";
import img5 from "../../imgs/img05.jpg";
import img6 from "../../imgs/img06.jpg";
import img7 from "../../imgs/img07.jpg";
import img8 from "../../imgs/img08.jpg";
import img9 from "../../imgs/img09.jpg";
import img10 from "../../imgs/img10.jpg";
import img11 from "../../imgs/img11.jpg";
import img12 from "../../imgs/img12.jpg";
import img13 from "../../imgs/img13.jpg";
import img14 from "../../imgs/img14.jpg";
import img15 from "../../imgs/img15.jpg";
import img16 from "../../imgs/img16.jpg";
import img17 from "../../imgs/img17.jpg";
import img18 from "../../imgs/img18.jpg";
import img19 from "../../imgs/img19.jpg";
import img20 from "../../imgs/img20.jpg";
export default function Products() {
    const [data, setData] = useState([]);
    const url = "https://658c2957859b3491d3f59c3a.mockapi.io/Product";
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
    return (
        <div>
            {/* để canh lề thì phải bọc bằng Container */}
            <Container>
                {/* nằm trong cột thì bọc bằng Row */}
                <Row>
                    {data.map((item, index) => (
                        <Product_detail key={index} product={item} img={arr[index]} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}
