import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "./actions";
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    const temp = new Map(state.cart);
    temp.delete(id);
    return { ...state, cart: temp };
  }
  if (action.type === INCREASE_AMOUNT) {
    const { id } = action.payload;
    const temp = new Map(state.cart);
    const item = temp.get(id);
    const amt = item.amount;
    // console.log("amt: ", amt);
    temp.set(id, { ...item, amount: amt + 1 });
    //console.log(temp);
    return { ...state, cart: temp };
  }

  if (action.type === DECREASE_AMOUNT) {
    const { id } = action.payload;
    const temp = new Map(state.cart);
    const item = temp.get(id);

    if (item.amount === 1) {
      temp.delete(id);
      // console.log("Amt is 1 so deleted");
      return { ...state, cart: temp };
    }
    temp.set(id, { ...item, amount: item.amount - 1 });
    return { ...state, cart: temp };
  }
};

export default reducer;
