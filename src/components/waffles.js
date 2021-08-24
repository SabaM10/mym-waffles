import React from 'react';

const waffle = ({waffle, cart, setCart, waffles}) => {
    const {nombre, precio, id} = waffle
    return (
        <div>
            <ul>
                <li>{nombre}</li>
                <li>{precio}</li>
            </ul>
        </div>
    );
};

export default waffle;