
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">🌿 Paradise Nursery</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart</Link>
      </div>

    </nav>
  );
};