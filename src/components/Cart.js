import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-20 p-20">
      <h1 className="text-2xl font-bold">Cart Page</h1>
      <button
        className="bg-black text-white rounded-md m-4 p-4"
        onClick={handleClick}
      >
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
