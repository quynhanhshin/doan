import React from "react";
import { useParams } from "react-router-dom";

export default function Post_detail() {
        const { id } = useParams();
        return <div>Post_detail, ID: {id}</div>;
}
