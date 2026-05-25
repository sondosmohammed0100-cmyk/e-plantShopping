
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="landing">

      <h1>🌿 Paradise Nursery</h1>

      <p>
        Discover beautiful houseplants for your home.
      </p>

      <button onClick={() => navigate("/products")}>
        Get Started
      </button>

    </div>
  );
}
