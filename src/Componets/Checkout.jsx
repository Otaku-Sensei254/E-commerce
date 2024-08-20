import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Implement the logic to handle the checkout process
        // This might include interacting with a backend API to process payment
        // and complete the order

        alert('Checkout successful!');
        clearCart();
    };

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;
