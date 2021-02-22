import React from 'react'
import {Link} from 'react-router-dom'
import CartPopupStyles from './cart-popup.module.css'
import CartHeader from './cart-popup-header'

const CartPopup = ({clearLastItem, lastItem}) => {
  return (
    <div className={CartPopupStyles['cart-popup']}>
      <CartHeader clearLastItem={clearLastItem} />
      {lastItem && (
        <div className={CartPopupStyles['cart-popup-item-container']}>
          <div className={CartPopupStyles['cart-popup-item']}>
            <img
              src={lastItem.image}
              className={CartPopupStyles['cart-popup-item-image']}
            />
          </div>
          <div className={CartPopupStyles['cart-popup-item']}>
            <p>{lastItem.title}</p>
          </div>
        </div>
      )}
      <Link to="/cart">
        <button
          type="button"
          onClick={clearLastItem}
          className={CartPopupStyles['cart-button']}
        >
          VIEW CART
        </button>
      </Link>
    </div>
  )
}

export default CartPopup
