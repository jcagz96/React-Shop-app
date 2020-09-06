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
