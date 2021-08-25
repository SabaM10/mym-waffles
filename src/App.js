import React, {Fragment, useState} from 'react';
//importo listado de waffles
import Waffle from './components/Waffle'
//importo
import cart from './components/Cart'
function App() {
//Estado de waffles con listado de waffles
    const [waffles, setWaffles] = useState([
      {id: 1, nombre: 'Waffles basicos', precio: 250},
      {id: 2, nombre: 'Waffles nutebasicos', precio: 290},
      {id: 3, nombre: 'Waffles frutales', precio: 310},
      {id: 4, nombre: 'Waffles nutefrutales', precio: 370},
      {id: 5, nombre: 'Waffles oreos', precio: 370},
      {id: 6, nombre: 'Waffles chocolinas', precio: 370},
      {id: 7, nombre: 'Waffles cubanitos', precio: 390},
      {id: 8, nombre: 'Waffles kitkat', precio: 390}

    ])
    // Estado del carrito
    const [cart, setCart] = useState([])


  return (
    <Fragment>
      <h3>Waffles</h3>
      {waffles.map((waffle)=> (
        <Waffle
        key={waffle.id}
        waffle={waffle}
        cart={cart}
        setCart={setCart}
        waffles={waffles}
      />
      ))} 
    </Fragment>
  );
}

export default App;
