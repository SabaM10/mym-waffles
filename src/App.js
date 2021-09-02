import React from "react";
import "./styles/styles.css";
import Navbar from "./components/navbar";
import Products from "./components/Products";
function App() {
  return (
      <section className="container">
        <section className="container__header">
          <Navbar />
        </section>
        <section className="container__content">
          <Products />
          {/*<Product />*/}
         {/* {waffles.map((waffle) => (
            <Waffle
              key={waffle.id}
              waffle={waffle}
              cart={cart}
              setCart={setCart}
              waffles={waffles}
            />
         ))}*/}
        </section>
      </section>
  );
}

export default App;
