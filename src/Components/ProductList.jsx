
import { useState } from "react";

export default function ProductList() {

  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Rose", price: 10, category: "Flower" },
    { id: 2, name: "Tulip", price: 12, category: "Flower" },
    { id: 3, name: "Cactus", price: 8, category: "Succulent" },
    { id: 4, name: "Aloe Vera", price: 9, category: "Succulent" },
    { id: 5, name: "Palm", price: 20, category: "Tree" },
    { id: 6, name: "Bonsai", price: 25, category: "Tree" }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>

      <nav>
        <h2>Paradise Nursery</h2>
        <p>Cart: {cart.length}</p>
      </nav>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button
            onClick={() => addToCart(p)}
            disabled={cart.find(c => c.id === p.id)}
          >
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}
