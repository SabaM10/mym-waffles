import React, { Fragment, useState } from 'react';
//importo listado de waffles
import Waffle from './components/Waffle'
//importo
import Cart from './components/Cart';
import "./styles/styles.css";
import Product from './components/Product';
import Navbar from './components/navbar';
function App() {

  //Estado de waffles con listado de waffles
  const [waffles, setWaffles] = useState([
    { id: 1, nombre: 'Waffles basicos', precio: 250 },
    { id: 2, nombre: 'Waffles nutebasicos', precio: 290 },
    { id: 3, nombre: 'Waffles frutales', precio: 310 },
    { id: 4, nombre: 'Waffles nutefrutales', precio: 370 },
    { id: 5, nombre: 'Waffles oreos', precio: 370 },
    { id: 6, nombre: 'Waffles chocolinas', precio: 370 },
    { id: 7, nombre: 'Waffles cubanitos', precio: 390 },
    { id: 8, nombre: 'Waffles kitkat', precio: 390 }

  ])
  // Estado del carrito
  const [cart, setCart] = useState([])


  return (

    <Fragment>
      <Navbar/>

      <section className='container'>
        <section className="container__header">
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>
          <div className="container__header__title">
            <h3 className="container__header__title--text">MyM Waffles</h3>
          </div>

          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>
        <section className="container__content">
          <Product />
          {waffles.map((waffle) => (
            <Waffle
              key={waffle.id}
              waffle={waffle}
              cart={cart}
              setCart={setCart}
              waffles={waffles}
            />
          ))}
        </section>
        <section className="container__footer">
          <p>waffles waffles</p>
        </section>
      </section>
    </Fragment>
  );

}

export default App;
