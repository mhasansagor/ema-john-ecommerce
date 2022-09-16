import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const { name, img, price, seller, stock, star, features } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h5 className="product-name">{name}</h5>
        <div className="product-feature">
          <div className="gap">
            <p>
              <small>by: {seller}</small>
            </p>
            <p>${price}</p>
            <p>
              <small>only {stock} left in stock - order soon</small>
            </p>
            <button
              onClick={() => props.handleAddToCart(props.product)}
              className="btn-regular"
            >
              {element} add to cart
            </button>
          </div>
          <div>
            <Rating
              initialRating={star}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            />
            <br />
            <p>
              <strong>Features</strong>
            </p>
            
            <ul className="feature-name">
              {features.map((ftr) => (
                <li key={ftr.description}>
               {ftr.description}: <strong>{ftr.value}</strong>
             </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
