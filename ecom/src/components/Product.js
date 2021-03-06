import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HomeButton, Price } from '../commons';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';

const Product = ({ product }) => {
  return (
    <Card className='my-3 io '>
      <div className='parent'>
        {/* <div className='badge'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='svg'
          >
            <path d='M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z' />
          </svg>
        </div> */}
        <div className='img '>
          <Link to={`/product/${product._id}`} className='link'>
            <Card.Img
              src={product.image}
              variant='top embed-responsive'
              classNmae='img'
            ></Card.Img>
          </Link>
        </div>
      </div>
      <Card.Body className='text-center'>
        <Price as='h5'>${product.price}</Price>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <HomeButton className='my-3 center'>
          <i className='fas fa-plus'></i> Add To Cart
        </HomeButton>
      </Card.Body>
    </Card>
  );
};

export default Product;
