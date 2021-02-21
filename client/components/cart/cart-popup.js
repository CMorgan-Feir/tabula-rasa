import React from 'react'
import {Link} from 'react-router-dom'
import CartPopupStyles from './cart-popup.module.css'
import CartHeader from './cart-popup-header'

const CartPopup = ({clearLastItem}) => {
  return (
    <div className={CartPopupStyles['cart-popup']}>
      <CartHeader clearLastItem={clearLastItem} />
      <Link to="/cart">
        <button type="button" className={CartPopupStyles['cart-button']}>
          VIEW CART
        </button>
      </Link>
    </div>
  )
}

export default CartPopup
