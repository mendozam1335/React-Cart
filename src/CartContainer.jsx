import CartItem from "./CartItem";
import { useGlobalContext } from "./Components/context";

const CartContainer = () => {
  const { state, totalCost, clear, totalAmount } = useGlobalContext();
  const cartArray = Array.from(state.cart.entries());

  if (totalAmount === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          let [key, cart] = cartItem;

          return <CartItem key={key} {...cart} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={() => clear()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
