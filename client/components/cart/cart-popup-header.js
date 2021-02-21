import React from 'react'
import CartPopupStyles from './cart-popup.module.css'

const CartHeader = ({clearLastItem}) => (
  <div className={CartPopupStyles['cart-popup-header']}>
    <div className={CartPopupStyles['cart-popup-heading']}>
      JUST ADDED TO YOUR CART
    </div>
    <div onClick={clearLastItem}>
      <img
        className={CartPopupStyles['cart-close-icon']}
        src="https://cdn.shopify.com/s/files/1/0285/1071/6003/files/cancel_1.png?v=1605198756"
      />
    </div>
  </div>
)

export default CartHeader
