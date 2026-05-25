
import { useState } from "react";

import rose from "../assets/rose.jpg";
import tulip from "../assets/tulip.jpg";
import cactus from "../assets/cactus.jpg";
import aloe from "../assets/aloe.jpg";
import palm from "../assets/palm.jpg";
import bonsai from "../assets/bonsai.jpg";

export default function ProductList() {

  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Rose", price: 10, category: "Flower", image: rose },
    { id: 2, name: "Tulip", price: 12, category: "Flower", image: tulip },
    { id: 3, name: "Cactus", price: 8, category: "Succulent", image: cactus },
    { id: 4, name: "Aloe Vera", price: 9, category: "Succulent", image: aloe },
    { id: 5, name: "Palm", price: 20, category: "Tree", image: palm },
    { id: 6, name: "Bonsai", price: 25, category: "Tree", image: bonsai }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>

      <nav>
        <h2>🌿 Paradise Nursery</h2>
        <p>Cart: {cart.length}</p>
      </nav>

      <div className="products-container">

        {products.map(p => (
          <div className="product-card" key={p.id}>

            <img src={p.image} alt={p.name} />

            <h3>{p.name}</h3>

            <p className="price">${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              disabled={cart.find(c => c.id === p.id)}
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
