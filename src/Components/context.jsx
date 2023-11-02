import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "../data";
import { getTotals } from "./util";

const AppContext = createContext();
import {
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
} from "./actions";

const defaultState = {
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
export const Approvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cart);

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
  const clear = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        removeItem,
        increase,
        decrease,
        clear,
        totalCost,
        totalAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
