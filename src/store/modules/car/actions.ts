import { action } from "typesafe-actions";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  size: number;
  quantity: number;
  images: {
    id: number;
    url: string;
  }[];
}

export function addCarItem(carItem: IProduct) {
  return action("@car/ADD", {
    carItem,
  });
}
export function removeCarItem(carItem: IProduct) {
  return action("@car/REMOVE", {
    carItem,
  });
}
