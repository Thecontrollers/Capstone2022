import React from "react";

export default class product extends React.Component {
  state = {
    productImage: [
      { id: "1", img: "/imgs/jersey.jpg" },
      { id: "2", img: "/imgs/pins.jpg" },
      { id: "3", img: "/imgs/stickers.jpg" },
    ],
    productName: [
      { id: "1", string: "Esport Jersey" },
      { id: "2", string: "Pins (3Pk" },
      { id: "3", string: "Stickers (2Pk)" },
    ],
    productPrice: [
      { id: "1", string: "$69.99" },
      { id: "2", string: "$9.99" },
      { id: "3", string: "$5.99" },
    ],
  };
}
