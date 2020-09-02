import { CarState, CarAction } from "./types";

const initialState: CarState = {
  emptyCar: true,
  carSize: 0,
  carElements: [],
};

export default function auth(
  state = initialState,
  action: CarAction,
): CarState {
  switch (action.type) {
    case "@car/ADD":
      return {
        ...state,
        emptyCar: false,
        carSize: state.carSize + 1,
        carElements: [...state.carElements, action.payload.carItem],
      };
    case "@car/REMOVE":
      return {
        ...state,
        emptyCar: false,
        carSize: state.carSize - 1,
      };
    default:
      return state;
  }
}
