import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { addCarItem } from "../../store/modules/car/actions";
import { Link, useHistory } from "react-router-dom";

import { Container } from "./styles";

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

const ProductPreview: React.FC<{ item: IProduct }> = (
  { item }: { item: IProduct },
) => {
  const history = useHistory();

  function handleClickItem(event: any) {
    event.preventDefault();
    history.push("/product");
  }

  return (
    <>
      <Container>
        <Link
          to={{
            pathname: "/product",
            state: item,
          }}
        >
          <img
            src={item.images[0].url}
          />
          <h5>{item.name}</h5>
          <h6>{item.price}</h6>
        </Link>
      </Container>
    </>
  );
};

export default ProductPreview;
