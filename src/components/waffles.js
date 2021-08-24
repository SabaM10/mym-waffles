import React from 'react';


const Waffle = ({waffle, cart, setCart, waffles}) => {
    const {nombre, precio, id} = waffle;

    const addWaffle = id => {
        const waffle = waffles.filter((waffle) => waffle.id === id)
    }
    return(
        <div>
        <ul>
            <li>{nombre}</li>
            <li>{precio}</li>
            <button type='button' onClick={() => addWaffle(id)}>Agregar al carrito</button>
        </ul>
        </div>
    );
};

export default Waffle;