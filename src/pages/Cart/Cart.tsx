import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { removeCarItem } from "../../store/modules/car/actions";
import ProductSizes from "../../components/ProductSizes/ProductSizes";
import { Link, useLocation } from "react-router-dom";

function Cart() {
  const { carElements, totalPrice } = useSelector((state: StoreState) =>
    state.car
  );
  const dispatch = useDispatch();

  function removeItemFromCart(item: any) {
    dispatch(removeCarItem(item));
  }

  return (
    <>
      <div className="container">
        <div className="left-container">
          <ul>
            {carElements.map((item) => (
              <li key={item.id}>
                <img
                  src={item.images[0].url}
                  alt={item.name}
                />
                <div className="product-info">
                  <h6>{item.name}</h6>
                  <h6>{item.category}</h6>
                </div>
                <div className="product-price">
                  <h6>{item.price}</h6>
                </div>
                <div className="product-size">
                  <h6>Size: {item.size}</h6>
                  <h6>Quantidade: 1</h6>
                </div>
                <div className="product-size">
                  <button
                    onClick={() => {
                      removeItemFromCart(item);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            style={{ padding: "34px", minWidth: "500px" }}
          >
            <div className="product-info">
              <h2 style={{ marginBottom: "30px" }}>Summary</h2>
              <div className="product-name-category">
                <h1>
                  Subtotal: {totalPrice}€
                </h1>
                <h2>
                  Shipping: 10€
                </h2>
              </div>
              <div className="product-price">
                Total: {totalPrice + 10}€
              </div>
            </div>
            <form onSubmit={() => {}}>
              <input type="submit" value="Checkout" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
