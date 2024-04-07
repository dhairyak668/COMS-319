import React, { useState, useEffect } from "react";
import items from "./products.json";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function Browse({ handleSubmit, onSubmit, register, errors, updateHooks }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal.toFixed(2));
  };
  

  const removeFromCart = (el) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== el.id);
    setCart(newCart);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const listItems = items
    .filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((el) => (
      <div className="row border-top border-bottom" key={el.id}>
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={el.image} alt={el.title} />
          </div>
          <div className="col">
            <div className="row text-muted">{el.title}</div>
            <div className="row">{el.category}</div>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => removeFromCart(el)}
            >{" "}-{" "}</button>
            {" "}
            <button
              type="button"
              className="btn btn-light"
              onClick={() => addToCart(el)}
            >{" "}+{" "}
            </button>
          </div>
          <div className="col">
            ${el.price} <span className="close">&#10005;</span>
            {howManyofThis(el.id)}
          </div>
        </div>
      </div>
    ));

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const handleClick = () => {
    cart.forEach((item) => {
        item.quantity = howManyofThis(item.id)
      });
      const uniqueCart = [...new Set(cart)]; //removes non unique cart items after setting quantity
    onSubmit(uniqueCart);
  };

  return (
    <div className="container">
      <h1>STORE SE/ComS319</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Checkout
      </button>
      <div className="card">
        <div className="row">
          {/* HERE, IT IS THE SHOPPING CART */}
          <div className="col-md-4">
            <p className="mb-0 d-flex align-items-center">
              <span className="small text-muted me-2">Order total:</span>
              <span className="lead fw-normal">${cartTotal}</span>
            </p>
          </div>
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>319 Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  Products selected {cart.length}
                </div>
              </div>
            </div>
            <div>{listItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;