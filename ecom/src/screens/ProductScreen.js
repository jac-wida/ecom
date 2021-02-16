import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Form, Container } from 'react-bootstrap';

import { Button, Price, Title, Badge, PriceBadge } from '../commons';

import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from '../actions/productActions';
// import Loader from "../components/Loader";
import Spinnner from '../components/Spinner';
import Message from '../components/Message';
import './ProductScreen.css';

const ProductScreen = ({ match, history }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(listProductDetail(match.params.id));
  }, [dispatch, match]);

  const addToCart = () => {
    if (product.countInStock === 0) {
      history.push('/');
    } else {
      history.push(`/cart/${match.params.id}?qty=${qty}`);
    }
  };

  return (
    <Container>
      <Link className='btn btn-light my-3' to='/'>
        {' '}
        <i className='fas fa-arrow-left m-1' />
        GO BACK
      </Link>

      {loading ? (
        <Spinnner />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6} bordered>
              <div className='border'>
                <Image src={product.image} alt={product.name} fluid />
              </div>
            </Col>
            <Col md={6}>
              <Title>{product.name}</Title>

              <Price> ${product.price}</Price>
              <Badge>{product.category}</Badge>
              <Badge>{product.brand}</Badge>
              <p>You may pick a replacement if this item isn't in stock.</p>

              <PriceBadge>50% off</PriceBadge>

              <p className='opi'>
                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </p>
              <div className='parent'>
                {product.countInStock > 0 && (
                  <Form.Control
                    as='select'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className='select'
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                )}

                <Button
                  onClick={addToCart}
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  {' '}
                  <i className='fas fa-plus'></i> ADD TO CART
                </Button>
              </div>
              {/* <Row>DESCRIPTION: {product.description}</Row> */}

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='svg'
              >
                <p>Add To Favourites</p>
                <path d='M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z' />
              </svg>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Details</h3>
              <p>{product.description}</p>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
