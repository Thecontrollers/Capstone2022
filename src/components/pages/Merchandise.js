import React from "react";
import "../../App.css";
import "./Merchandise.css";
import product from "../product";

function Merchandise() {
  return (
    <div>
      <h1 className="productName">Merchandise</h1>
      <product />
      <div>
        <br />
        <br />
        <br />
        <li className="liClass">
          <img src="images/jersey.jpg" className="productImage" />
          <h3 className="productName">Wildcat Esports Jersey</h3>
          <br />
          <h4 className="productPrice">$69.99 (out of stock)</h4>
        </li>
        <br />
        <br />
        <br />
        <li className="liClass">
          <img src="images/pins.jpg" className="productImage" />
          <h3 className="productName">Pack of 3 Pins</h3>
          <br />
          <h4 className="productPrice">$9.99 (out of stock)</h4>
        </li>
        <br />
        <br />
        <br />
        <li className="liClass">
          <img src="images/stickers.jpg" className="productImage" />
          <h3 className="productName">Pack of 2 Stickers</h3>
          <br />
          <h4 className="productPrice">$5.99 (out of stock)</h4>
        </li>
      </div>
    </div>
  );
}
export default Merchandise;
