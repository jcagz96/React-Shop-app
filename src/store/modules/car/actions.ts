import { action } from "typesafe-actions";

interface IProduct {
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

export function addCarItem(carItem: IProduct) {
  return action("@car/ADD", {
    carItem,
  });
}
export function removeCarItem(id: number) {
  return action("@car/REMOVE", {
    id,
  });
}
