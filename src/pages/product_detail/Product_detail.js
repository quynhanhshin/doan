import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img01 from "../../imgs/img01.jpg"
import axios from "axios";

export default function Product_detail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const url = `https://658c2957859b3491d3f59c3a.mockapi.io/Product/${id}`;
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    return (
        <div>
            <Header />
            {/* <h1>Product_detail, Id: {id}</h1> */}
            <div className="product-info">
                <div className="info-left">
                <img src={img01} />
                </div>
                <div className="info-right"></div>
            </div>
            <Footer />
        </div>
    );
}
