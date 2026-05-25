
export default function CartItem({ cart, setCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>

      {cart.map(item => (
        <div key={item.id}>

          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Qty: {item.qty}</p>

          <button
            onClick={() =>
              setCart(cart.filter(i => i.id !== item.id))
            }
          >
            Delete
          </button>

        </div>
      ))}

      <h2>Total: {total}</h2>

      <button>Checkout (Coming Soon)</button>

      <button onClick={() => window.location.href = "/"}>
        Continue Shopping
      </button>

    </div>
  );
}