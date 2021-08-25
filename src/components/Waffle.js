import React from 'react';

const Waffle = ({waffle, cart, setCart, waffles}) => {
// constante que guarda las propiedades del estado de las burgers
    const{nombre, precio, id} = waffle;

//Funcion para agregar burgers al cart
const addWaffle = (id) => {
    const waffle = waffles.filter((waffle) => waffle.id === id);
    setCart([...cart, ...waffle])
};

//Funcion para eliminar waffles
const delWaffle = (id) => {
    const waffles = cart.filter(waffle => waffle.id !== id)
    setCart(waffles)
};

    return(
        <div>
            <ul>
                <li>{nombre}</li>
                <li>${precio}</li>
                {waffles ? (
                    
                        <button type='button' onClick={() => addWaffle(id)}>
                        Agregar al carrito
                        </button>
                    ) : 
                    (
                        <div>
                        <button type='button' onClick={() => delWaffle(id)}>
                        Confirmar
                        </button>

                        <button type='button' onClick={() => delWaffle(id)}>
                        Eliminar
                        </button>
                        </div>
                    )}
                
            </ul>
        </div>
    );
};

export default Waffle;