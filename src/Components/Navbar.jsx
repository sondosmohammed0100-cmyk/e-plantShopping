
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>

      <Link to="/">Home</Link>
      <Link to="/products">Plants</Link>
      <Link to="/cart">Cart</Link>

    </nav>
  );
}
