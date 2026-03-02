import "./App.css";
import { useState } from "react";

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {
  // Exercise 1 state
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count>0){
    setCount(count - 1);
    }
  }

  // BONUS: shopping cart state
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <h1>Latabat</h1>

      {/* Exercise 1 */}
      <section className="section">
        <h1 className="title">Exercise 1: Lifted Counter State</h1>

        <CounterDisplay count={count} />
        <CounterControls increase={increase} decrease={decrease} />
      </section>


      <p>Hi so I Skipped bonus Exercise. Sorry </p>
    </div>
  );
}

export default App;
