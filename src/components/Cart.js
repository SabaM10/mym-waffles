import React from 'react';

import './cart.css'
//Importo el componente Waffle
import Waffle from './Waffle';

const Cart = ({cart, setCart}) => {
    return (
        <div className = 'cart'>
            <button className='shopiing-cart'></button>

        {cart.length === 0 ? (<p>0</p>): (cart.map((waffle => <Waffle key={waffle.id} waffle={waffle} cart={cart} setCart={setCart} />)))}
        </div>
    )
};

export default Cart;