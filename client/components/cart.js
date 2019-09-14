import React, {Component} from 'react'
import {getCart, deleteFromCart} from '../store'
import {connect} from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formatter: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
  }
  componentDidMount() {
    this.props.getCart()
  }

  formatPrice(price) {
    return this.state.formatter.format(price)
  }

  render() {
    const artworks = this.props.cart.cart
    const grandTotal = artworks.length
      ? artworks.reduce(
          (accumulator, currentEl) =>
            accumulator + parseInt(currentEl.price, 10),
          0
        )
      : 0
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
                  <button
                    type="submit"
                    className="remove-button"
                    onClick={() => this.props.deleteFromCart(artwork.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-table-cell">
                {this.formatPrice(artwork.price)}
              </div>
              <div className="cart-table-cell">{artwork.quantity}</div>
              <div className="cart-table-cell">
                {this.formatPrice(artwork.price * artwork.quantity)}
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <div className="continue-shopping-container">
            <button type="submit" className="continue-shopping-button">
              CONTINUE SHOPPING
            </button>
          </div>
          <div>
            <button type="submit" className="sign-in-button">
              CHECKOUT
            </button>
          </div>
        </div>
        Here is your grand total: {this.formatPrice(grandTotal)}
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
  return {
    getCart: () => dispatch(getCart()),
    deleteFromCart: artworkId => dispatch(deleteFromCart(artworkId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
