import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

import CartLink from '../CartLink/CartLink';
import './CartCard.css';

function loadScript(src){
  return new Promise(resolve => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    resolve(true)
  };
  script.onerror = () =>{
    resolve(false)
  }
  document.body.appendChild(script);
});
}

const CartCard = (props) => {
  // const cartRef = useRef();

  // Razor pay settings 
 async function displayRazorpay(){
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert('Check your connection!')
      return
    }

    const data = await fetch('http://localhost:5000/razorpay', {method: 'POST'}).then((t) =>t.json())
    console.log(data);

    var options = {
      key: "rzp_test_3kKNGSEXEeVCyd", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Foodistaan",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const paymentOject = new window.Razorpay(options);
  paymentOject.open();
  }
  


  return (
    <div className={props.checkout ? 'checkout' : 'cart'}>
      <div className={props.checkout ? '' : 'cart-card__container'}>
        <div className="cart-card">
          <div className="cart-info">
            <span className="cart-info__logo">
              <HiShoppingCart />
            </span>
            <h1 className="cart-info__heading">My Cart</h1>
          </div>
          <div className="cart-info__main">
            <div className="cart-info__restro-info">
              <div className="cart-info__img-container"></div>
              <div>
                <h1>{props.restaurantName}</h1>
                <p>{props.address}</p>
              </div>
            </div>
            {props.children}{' '}
          </div>
          {!props.checkout && <CartLink cartId={props.cartId} />}
          {props.checkout && (
            <div className="checkout-actions">
              <button onClick={displayRazorpay} className="checkout-cart__btn">Order Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
