import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, key, seller } = props.product;
  const { handleRemove } = props;
  return (
    <div className="review">
      <h4 className="product-name">{name}</h4>
      <div className="product">
        <div>
          <h6 style={{ color: "#b12704" }}>
            <small>${price}</small>
          </h6>
          <p>
            <small>sold by:</small>
            {seller}
          </p>
          <h5>
            <small>Quantity:{quantity}</small>
          </h5>
          <button onClick={() => handleRemove(key)} className="btn-regular">
            Remove
          </button>
        </div>
        <div>
          <h6>
            <small>Shipping options</small>
          </h6>
          <div>
            <div>
            <input type="radio" name={key} value="0"/>
            <span style={{color:'#090'}}><strong>8-10 business days</strong></span>
            <p className="shopping-gap"><small>$0 - Free Shipping</small></p>
            </div>
            <div className="newgap">
            <input type="radio" name={key} value="15" checked/>
              <span style={{color:'#090'}}><strong>5-7 business days</strong></span>
            <p className="shopping-gap">
              <small>$15 - Regular Shipping</small>
            </p>
            </div>
            <div className="newgap">
            <input type="radio" name={key} value="50"/>
            <span style={{color:'#090'}}><strong>2-4 business days</strong></span>
            <p className="shopping-gap">
              <small>$50 - Standard Shipping</small>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
