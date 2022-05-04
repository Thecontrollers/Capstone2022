import React from "react";
import "../../App.css";
import "./Merchandise.css";
import product from "../product";

function Merchandise() {
  return (
    <div>
      <h1 className="Merchandise">Merchandise</h1>
      <product />
      <div>
        <br />
        <br />
        <br />
        <li className="liClass">
          <img src="images/jersey.jpg" className="productImage" />
          <h3 className="productName">Wildcat Esports Jersey</h3>
          <br />
          <h4 className="productPrice">$69.99</h4>
        </li>
      </div>
    </div>
  );
}
export default Merchandise;
