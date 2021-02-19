import React, { useState } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <Container>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>

            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                value='Paypal'
                name='paymentMethod'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              {/* <Form.Check
              type='radio'
              label='stripe'
              id='Stripe'
              value='Stripe'
              name='paymentMethod'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            </Col>
          </Form.Group>
          <Button type='submit'>Continue</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default PaymentScreen;
