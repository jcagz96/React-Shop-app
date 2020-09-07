import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { addCarItem } from "../../store/modules/car/actions";
import ProductSizes from "../../components/ProductSizes/ProductSizes";
import { Link, useLocation } from "react-router-dom";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  availableSizes: number[];
  images: {
    id: number;
    url: string;
  }[];
}

interface IProduct2 {
  id: number;
  name: string;
  category: string;
  price: number;
  size: number;
  images: {
    id: number;
    url: string;
  }[];
}

function Product() {
  const { carElements } = useSelector((state: StoreState) => state.car);
  const dispatch = useDispatch();

  const location = useLocation();

  const [selectedSize, setSelectedSize] = useState("Choose your size:");

  function handleChange(event: React.FormEvent<HTMLSelectElement>) {
    setSelectedSize(event.currentTarget.value);
    console.log("--> ", selectedSize);
  }

  const currentProduct: IProduct = location.state;

  function addToCar(e: React.FormEvent) {
    e.preventDefault();

    if (selectedSize === "Choose your size:") {
      alert("Selecione um tamanho");
    } else {
      const produto = {
        id: location.state.id,
        name: location.state.name,
        category: location.state.category,
        price: location.state.price,
        size: Number(selectedSize),
        quantity: 1,
        images: location.state.images,
      };

      dispatch(addCarItem(produto));
    }
  }

  return (
    <>
      <div className="container">
        <div>
          <ul className="items-grid">
            {currentProduct.images.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  //handleSelectItem(item.id);
                }}
              >
                <img src={item.url} alt={item.url} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            style={{ padding: "34px", minWidth: "500px" }}
          >
            <div className="product-info">
              <div className="product-name-category">
                <h2>
                  {currentProduct.category}
                </h2>
                <h1>
                  {currentProduct.name}
                </h1>
              </div>
              <div className="product-price">
                {currentProduct.price}
              </div>
            </div>
            <form onSubmit={addToCar}>
              <label>
                Choose your size:
                <select
                  value={selectedSize}
                  onChange={handleChange}
                >
                  <option
                    style={{ display: "none" }}
                    disabled
                    value="Choose your size:"
                  >
                    Choose your size:
                  </option>
                  {currentProduct.availableSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>
              <input type="submit" value="Add to Cart" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
