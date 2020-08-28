import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  //ALSO WE CAN DESTRUCTURE LIKE THIS
  // let id = props.id;
  // let title = props.title;
  // let price = props.price;
  // let rating = props.rating;

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
