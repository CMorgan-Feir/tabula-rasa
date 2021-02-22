import React, {Component} from 'react'
import {connect} from 'react-redux'

import CartPopupStyles from './cart-popup.module.css'
import CartPopup from './cart-popup'
import {clearLastItemPopup} from '../../store'

class CartContainer extends Component {
  render() {
    return (
      <div
        className={CartPopupStyles['cart-popup-container']}
        style={{display: this.props.lastItem ? '' : 'none'}}
      >
        <CartPopup
          clearLastItem={this.props.clearLastItem}
          lastItem={this.props.lastItem}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lastItem: state.cart.lastItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearLastItem: () => dispatch(clearLastItemPopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
