import React from 'react'

const url = `${import.meta.env.VITE_BACKEND_URL}/api`;
const PayButton = ({ cartItems }) => {

    const handleCheckout = async (e) => {
        e.preventDefault();
    const response = await fetch(`${url}/stripe/create-checkout-session`, {
      method: 'POST',
      body: JSON.stringify(cartItems),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    if(result.url)
    {
        window.location.href = result.url;
        console.log(result.url);
    }
};
//   const handleCheckout = (e) => {
//     e.preventDefault();
//     debugger;
//     axios.post('/api/stripe/create-checkout-session', {
//         cartItems,
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.data.url) {
//           window.location.href = response.data.url;
//         }
//       })
//       .catch((err) => console.log(err.message));
        // };

  return (
    <>
      <button className="bg-theme-cart text-white" onClick={(e) => handleCheckout(e)}>Check out</button>
    </>
  );
};

export default PayButton;