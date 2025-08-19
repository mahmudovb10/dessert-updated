import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CART":
      return { ...state, yourCart: [...state.yourCart, payload] };
    case "REMOVE_CART":
      return {
        ...state,
        yourCart: state.yourCart.filter((item) => item.id != payload),
      };
    case "DECREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) => {
          if (item.id == id) {
            return { item, amount: item.amount - 1 };
          }
        }),
      };
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) => {
          if (item.id == id) {
            return { item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    yourCart: [],
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
