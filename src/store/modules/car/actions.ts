import { action } from "typesafe-actions";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: string;
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
export function removeCarItem({ carItem }: { carItem: string }) {
  return action("@car/REMOVE", {
    carItem,
  });
}
