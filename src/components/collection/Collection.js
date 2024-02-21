import React from "react";
import "./collection.css";
import pic01 from "../../imgs/collection/pic01.jpg";
import pic02 from "../../imgs/collection/pic02.jpg";

export default function Collection() {
    return (
        <div className="collection">
            <div className="collection-card-1">
                <img src={pic01} />
                <div className="text">
                    <h4>Best baby environment setting</h4>
                    <p>Metus aliquam eleifend mi in nulla cras sedo fel.</p>
                    <button>VIEW COLLECTION</button>
                </div>
            </div>
            <div className="collection-card-2">
                <img src={pic02} />
                <div className="text">
                    <h4>Make a dreamy nursery</h4>
                    <p>Convallis a cras semper auctor neque vita teme.</p>
                    <button>VIEW COLLECTION</button>
                </div>
            </div>
        </div>
    );
}
