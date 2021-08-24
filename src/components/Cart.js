import React from 'react';

import './cart.css'
import Waffle from './Waffles';

import Waffles from './Waffles';

const Cart = ({cart, setCart}) => {
    return (
        <div className = 'cart'>
            <h3>Carrito</h3>

            {Cart.length === 0 ? (
          <p>No hay nada por aquí...</p>
        ) : (
          Cart.map((waffle) => (
            <Waffle
              key={waffle.id}
              waffle={waffle}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
        </div>
    )
};

export default Cart;