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
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) =>
          item.id == payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };

    case "DECREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) =>
          item.id == payload ? { ...item, amount: item.amount - 1 } : item
        ),
      };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    yourCart: [],
  });
  console.log(state);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
