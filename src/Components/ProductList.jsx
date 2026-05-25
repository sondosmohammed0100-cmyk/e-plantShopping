
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {

  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const products = [
    { id: 1, name: "Rose", price: 10, category: "Flower", image: "/images/rose.jpg" },
    { id: 2, name: "Tulip", price: 12, category: "Flower", image: "/images/tulip.jpg" },

    { id: 3, name: "Cactus", price: 8, category: "Succulent", image: "/images/cactus.jpg" },
    { id: 4, name: "Aloe Vera", price: 9, category: "Succulent", image: "/images/aloe.jpg" },

    { id: 5, name: "Palm", price: 20, category: "Tree", image: "/images/palm.jpg" },
    { id: 6, name: "Bonsai", price: 25, category: "Tree", image: "/images/bonsai.jpg" }
  ];

  const categories = ["Flower", "Succulent", "Tree"];

  const handleAdd = (product) => {
    dispatch(addItem(product));
    setAddedItems([...addedItems, product.id]);
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <h2>🌿 Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </nav>

      {/* PRODUCTS BY CATEGORY */}
      {categories.map(cat => (
        <div key={cat}>

          <h2>{cat}</h2>

          <div className="products-container">

            {products
              .filter(p => p.category === cat)
              .map(p => (
                <div className="product-card" key={p.id}>

                  <img src={p.image} alt={p.name} />

                  <h3>{p.name}</h3>

                  <p>${p.price}</p>

                  <button
                    onClick={() => handleAdd(p)}
                    disabled={addedItems.includes(p.id)}
                  >
                    Add to Cart
                  </button>

                </div>
              ))}

          </div>

        </div>
      ))}

    </div>
  );
}
