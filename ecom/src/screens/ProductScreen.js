import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        {" "}
        <i className='fas fa-arrow-left m-1' />
        GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item className='text-center'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews `}
              />
            </ListGroup.Item>
            <ListGroup.Item className='text-center'>
              PRICE: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>DESCRIPTION: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className='shadow'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>PRICE: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>STATUS: </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
