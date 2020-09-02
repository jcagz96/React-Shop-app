import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { addCarItem } from "../../store/modules/car/actions";

import "./styles.css";

const ProductSizes: React.FC<any> = () => {
  const items = [
    {
      id: 1,
      size: 36,
    },
    {
      id: 2,
      size: 37,
    },
    {
      id: 3,
      size: 38,
    },
    {
      id: 4,
      size: 39,
    },
    {
      id: 5,
      size: 40,
    },
  ];

  return (
    <>
      <ul className="sizes-grid">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              //handleSelectItem(item.id);
            }}
          >
            <span>{item.size}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductSizes;
