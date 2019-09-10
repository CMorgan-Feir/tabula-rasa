import React, {Component} from 'react'
import {getCart} from '../store'
import {connect} from 'react-redux'

class Cart extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    console.log('HI THESE ARE THE PROPS', this.props)
    const artworks = this.props.cart.cart
    return (
      <div className="cart-template">
        <div className="cart-table">
          <div className="cart-table-row">
            <div className="cart-table-head main-cell">Product</div>
            <div className="cart-table-head">Price</div>
            <div className="cart-table-head">Quantity</div>
            <div className="cart-table-head">Subtotal</div>
          </div>
          {artworks.map(artwork => (
            <div className="cart-table-row" key={artwork.id}>
              <div className="cart-table-cell main-cell">
                <div>
                  <img src={artwork.image} width="100px" />
                </div>
                <div className="artwork-cart-details">
                  <p>{artwork.title}</p>
                  <p>{artwork.artist}</p>
                </div>
              </div>
              <div className="cart-table-cell">{artwork.price}</div>
              <div className="cart-table-cell">{artwork.quantity}</div>
              <div className="cart-table-cell">{artwork.price}</div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <div className="continue-shopping-container">
            <button type="submit" className="continue-shopping-button">
              Continue Shopping
            </button>
          </div>
          <div>
            <button type="submit" className="sign-in-button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {getCart: () => dispatch(getCart())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
