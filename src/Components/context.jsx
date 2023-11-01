import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "../data";
const AppContext = createContext();
import { REMOVE_ITEM, INCREASE_AMOUNT, DECREASE_AMOUNT } from "./actions";

const defaultState = {
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
export const Approvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    console.log("remove: ", id);
  };
  const increase = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, removeItem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
