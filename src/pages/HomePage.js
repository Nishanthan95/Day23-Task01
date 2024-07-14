import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const products = [
  { id:1, title: 'Fancy Product', price: 40.00, originalPrice: 80.00, isSale: false },
  { id:2, title: 'Special Item', price: 18.00, originalPrice: 20.00, isSale: true },
  { id:3, title: 'Sale Item', price: 25.00, originalPrice: 50.00, isSale: true },
  { id:4, title: 'Popular Item', price: 40.00, originalPrice: 40.00, isSale: false },
  { id:5, title: 'Sale Itemm', price: 40.00, originalPrice: 40.00, isSale: false },
  { id:6, title: 'Popular Item', price: 40.00, originalPrice: 40.00, isSale: false },
  { id:7, title: 'Special Item', price: 18.00, originalPrice: 20.00, isSale: true },
  { id:8, title: 'Sale Item', price: 25.00, originalPrice: 50.00, isSale: true },
  
  
];

const HomePage = () => {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      <Container className="py-5">
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={6} lg={3} className="mb-5">
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
