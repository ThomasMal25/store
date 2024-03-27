import React from 'react';

const Cart = (props) => {
  return (
    <div>
      Cart
      {props.price}
      {props.title}
    </div>
  );
};

export default Cart;
