
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h2>Total: ${totalAmount}</h2>

      {cart.map(item => (
        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
              }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
              }))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}
