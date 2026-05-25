
import { useSelector } from "react-redux";
export default function CartItem({ cart = [], setCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    
<div className="cart-container">

  {cart.map(item => (
    <div className="cart-card" key={item.id}>

      <img src={item.image} alt={item.name} />

      <div className="cart-info">

        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price}</p>

        <p>Total: ${item.price * item.qty}</p>

        <p>Quantity: {item.qty}</p>

        <div className="cart-buttons">

          <button onClick={() => increaseQty(item)}>
            +
          </button>

          <button onClick={() => decreaseQty(item)}>
            -
          </button>

          <button className="delete"
                  onClick={() => removeItem(item)}>
            Delete
          </button>

        </div>

      </div>

    </div>
  ))}
  <div className="cart-total">
  <h2>Total Price: ${total}</h2>

  <button className="checkout">
    Checkout (Coming Soon)
  </button>

  <button className="continue">
    Continue Shopping
  </button>
</div>

</div>

  );
}

