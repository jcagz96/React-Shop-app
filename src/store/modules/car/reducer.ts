import { CarState, CarAction } from "./types";

const initialState: CarState = {
  emptyCar: true,
  totalPrice: 0,
  carSize: 0,
  carElements: [],
};

export default function auth(
  state = initialState,
  action: CarAction,
): CarState {
  switch (action.type) {
    case "@car/ADD":
      console.log("----> " + state.totalPrice);
      console.log("--|--> " + action.payload.carItem.price);

      return {
        ...state,
        emptyCar: false,
        totalPrice: state.totalPrice + action.payload.carItem.price,
        carSize: state.carSize + 1,
        carElements: [...state.carElements, action.payload.carItem],
      };
    case "@car/REMOVE":
      return {
        ...state,
        emptyCar: false,
        carSize: state.carSize - 1,
        carElements: state.carElements.filter((item) =>
          item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
