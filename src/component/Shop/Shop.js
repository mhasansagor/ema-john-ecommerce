import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts]=useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {setProducts(data); setDisplayProducts(data)});
  }, []);
  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storeCart = [];
      for (const key in saveCart) {
        const addProduct = products.find((product) => product.key === key);
        if (addProduct) {
          const quantity = saveCart[key];
          addProduct.quantity = quantity;
          storeCart.push(addProduct);
        }
      }
      setCart(storeCart);
    };
  }, [products]);
  const handleAddToCart = (product) => {
    const exist=cart.find(pd=>pd.key===product.key);
    let newCart=[];
    if(exist){
      const rest=cart.filter(pd=>pd.key!==product.key)
      exist.quantity=exist.quantity+1;
      newCart=[...rest,product];
    }
    else{
      product.quantity=1;
      newCart=[...cart,product];
    }
    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch=event=>{
      const searchText=event.target.value;
      const matchedProducts=products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
      setDisplayProducts(matchedProducts);
  }
  return (
    <div>
      <div>
        <form className="d-flex bg-dark p-4">
          <input
            className="form-control mx-auto  w-75"
            type="search"
            onChange={handleSearch}
            placeholder="type here to search"
            aria-label="Search"
          />
          <Link to="/orders">
          <FontAwesomeIcon  icon={faShoppingCart} color="white"/>
          </Link>
        </form>
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
           <Link to="/orders">
             <button className="btn-regular">Review your order</button>
           </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
