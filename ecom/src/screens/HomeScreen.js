import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
// import Loader from '../components/Loader';
import './HomeScreen.css';

import Spinnner from '../components/Spinner';
import Background from '../components/Background';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Route render={({ history }) => <Background history={history} />} />

      <div className='latest'>
        {keyword ? (
          <h1 className='text-center'>You Seacrched</h1>
        ) : (
          <h1>LATEST PRODUCTS</h1>
        )}
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
