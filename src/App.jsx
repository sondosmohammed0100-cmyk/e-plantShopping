
import { useState } from "react";

export default function App() {

  const [started, setStarted] = useState(false);

  return (
    <div className="home">

      {!started ? (

        <div className="landing">

          <h1>🌿 Paradise Nursery</h1>

          <p>
            Discover beautiful houseplants for your home.
          </p>

          <button onClick={() => setStarted(true)}>
            Get Started
          </button>

        </div>

      ) : (

        <h2>Go to Products Page</h2>

      )}

    </div>
  );
}