import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const itemToAdd = action.payload;
            const existingItem = state.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...state, { ...itemToAdd, quantity: 1 }];

        case 'REMOVE_ITEM':
            const itemToRemove = action.payload;
            const existingItemToRemove = state.find(item => item.id === itemToRemove.id);
            if (existingItemToRemove && existingItemToRemove.quantity > 1) {
                return state.map(item =>
                    item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return state.filter(item => item.id !== itemToRemove.id);
            }
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = product => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const removeFromCart = id => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
