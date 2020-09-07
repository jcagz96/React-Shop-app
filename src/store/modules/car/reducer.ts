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
        newArray[projectIndex].quantity++;

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

      console.log("Valor do item a remover: " + action.payload.carItem.price);
      console.log(
        `${state.totalPrice} - ${action.payload.carItem.price} = ${state
          .totalPrice - action.payload.carItem.price}`,
      );

      return {
        ...state,
        emptyCar: emptyCarFlag,
        carSize: state.carSize - 1,
        totalPrice: state.totalPrice - action.payload.carItem.price,
        carElements: state.carElements.filter((item) =>
          item.id !== action.payload.carItem.id
        ),
      };
    default:
      return state;
  }
}
