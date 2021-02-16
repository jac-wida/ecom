import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
// import Loader from '../components/Loader';
import './HomeScreen.css';

import Spinnner from '../components/Spinner';
import Background from '../components/Background';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Background />
      <div className='latest'>
        <h1>LATEST PRODUCTS</h1>
        {loading ? (
          <Spinnner />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {products.map((product) => (
              <Col
                className='wis'
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
