import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "../data";
import { getTotals } from "./util";

const AppContext = createContext();
import {
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
  LOADING,
  DISPLAY,
} from "./actions";

const defaultState = {
  loading: false,
  cart: new Map(),
};

const url = "https://www.course-api.com/react-useReducer-cart-project";

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

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: DISPLAY, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);
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
