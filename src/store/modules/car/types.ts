import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CarAction = ActionType<typeof actions>;

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

export interface CarState {
  emptyCar: boolean;
  totalPrice: number;
  carSize: number;
  carElements: IProduct[];
}
