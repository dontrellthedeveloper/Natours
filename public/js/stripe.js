import axios from 'axios';
// const stripe = Stripe('sk_test_bNOmvxf13EWB2tOrbvjHWmKt00jLmjXiyN');
//
// export const bookTour = async tourId => {
//   // 1) Get checkout session from API
//   const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
//
//   // 2) Create checkout form + charge credit card
// };

const stripe = Stripe('pk_test_nW7VlHsfGmzKJQmbwIZHI6KG00P1c4Gs7q');

const bookTour = async tourId => {
  try {

    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.sessionId
    })

  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }

};