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
      <h1 className="text-2xl font-bold mb-4">Cart Page</h1>

      <div className="relative">
        <button
          className="absolute right-0 top-0 bg-black text-white rounded-md p-2"
          onClick={handleClick}
        >
          Clear Cart
        </button>

        <div className="pt-12">
          {" "}
          {/* Add top padding to create space for the button */}
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
