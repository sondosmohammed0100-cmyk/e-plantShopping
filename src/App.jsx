
import { useNavigate } from "react-router-dom";

export default function App() {

  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <h1>Welcome to Paradise Nursery 🌿</h1>

      <p>
        Discover beautiful and healthy houseplants for your home.
      </p>

      <button
        onClick={() => navigate("/products")}
        className="get-started-btn"
      >
        Get Started
      </button>

    </div>
  );
}
