import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, incrementItem, decrementItem, removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}: {item.quantity}</p>
                    <button onClick={() => incrementItem(item)}>+</button>
                    <button onClick={() => decrementItem(item)}>-</button>
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
