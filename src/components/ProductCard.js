import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ id, title, price, originalPrice, isSale }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const inCart = cart.some(item => item.id === id);

    const handleCart = () => {
        if (inCart) {
            removeFromCart(id);
        } else {
            addToCart({ id, title, price, originalPrice, isSale });
        }
    };

    return (
        <Card className="mb-4">
            <Card.Img variant="top" src="http://placehold.it/450x300" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Text className='text-center'>
                    {isSale && <span className="text-muted text-decoration-line-through">${originalPrice}</span>}
                    ${price}
                </Card.Text>
                <Button variant={inCart ? 'danger' : 'btn btn-outline-dark'} onClick={handleCart}>
                    {inCart ? 'Remove from Cart' : 'Add to Cart'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
