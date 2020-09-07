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
      const projectIndex = state.carElements.findIndex((carElement) =>
        carElement.id === action.payload.carItem.id &&
        carElement.size === action.payload.carItem.size
      );

      if (projectIndex > -1) {
        const newArray = state.carElements;
        newArray[projectIndex].quantity += action.payload.carItem.quantity;

        return {
          ...state,
          emptyCar: false,
          totalPrice: state.totalPrice + action.payload.carItem.price,
          carSize: state.carSize + 1,
          carElements: newArray,
        };
      } else {
        return {
          ...state,
          emptyCar: false,
          totalPrice: state.totalPrice + action.payload.carItem.price,
          carSize: state.carSize + 1,
          carElements: [...state.carElements, action.payload.carItem],
        };
      }

    case "@car/REMOVE":
      var emptyCarFlag: boolean = false;

      if (state.carSize - 1 === 0) {
        emptyCarFlag = true;
      }

      const projectIndex1 = state.carElements.findIndex((carElement) =>
        carElement.id === action.payload.carItem.id &&
        carElement.size === action.payload.carItem.size
      );

      if (projectIndex1 > -1 && state.carElements[projectIndex1].quantity > 1) {
        const newArray = state.carElements;
        newArray[projectIndex1].quantity--;

        return {
          ...state,
          emptyCar: emptyCarFlag,
          totalPrice: state.totalPrice - action.payload.carItem.price,
          carSize: state.carSize - 1,
          carElements: newArray,
        };
      } else {
        return {
          ...state,
          emptyCar: emptyCarFlag,
          totalPrice: state.totalPrice - action.payload.carItem.price,
          carSize: state.carSize - 1,
          carElements: state.carElements.filter((item) =>
            item.id !== action.payload.carItem.id
          ),
        };
      }

    default:
      return state;
  }
}
