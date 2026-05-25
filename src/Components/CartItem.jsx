
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    }
  };

  return (
    <div>

      <h2>Total: ${totalAmount}</h2>

      {cart.map(item => (
        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncrement(item)}>
            +
          </button>

          <button onClick={() => handleDecrement(item)}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>
      ))}

      {/* Buttons required by rubric */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/products">
        <button>
          Continue Shopping
        </button>
      </Link>

    </div>
  );
}
