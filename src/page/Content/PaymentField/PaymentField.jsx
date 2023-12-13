import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const cardStyle = {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  };

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      setPaymentError(null);
      setPaymentSuccess(true);
      // Gửi paymentMethod.id hoặc thông tin thanh toán khác đến server để xử lý thanh toán
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="card-element">
          Thông tin thẻ
        </label>
        <CardElement id="card-element" options={cardStyle} />
      </div>
      <button type="submit" disabled={!stripe}>
        Thanh toán
      </button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Thanh toán thành công!</div>}
    </form>
  );
};

export default PaymentForm;
