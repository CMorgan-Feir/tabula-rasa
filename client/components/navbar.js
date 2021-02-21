import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getCart} from '../store'

class Navbar extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  calculateQuantity() {
    console.log(this.props.cart.cart)
    return this.props.cart.cart.reduce(
      (acc, curVal) => acc + parseInt(curVal.quantity, 10),
      0
    )
  }

  render() {
    return (
      <div className="main-header">
        <div className="header-nav">
          <div className="nav-left">
            <Link to="/collections/all-art" className="header-nav-link">
              Shop All Art
            </Link>
          </div>
          <div className="nav-centre">
            <Link to="/">
              <h1 className="logo-font">TABULA RASA</h1>
            </Link>
          </div>
          <div className="nav-right">
            <nav>
              {this.props.isLoggedIn ? (
                <div>
                  {/* The navbar will show these links after you log in */}
                  {/* <a href="#" onClick={this.props.handleClick}> */}
                  Logout
                  {/* </a> */}
                  {this.props.cart.cart.length > 0 ? (
                    <Link to="/cart">Cart ({this.calculateQuantity()})</Link>
                  ) : (
                    <Link to="/cart">Cart</Link>
                  )}
                  <Link to="/home">Search</Link>
                </div>
              ) : (
                <div>
                  {/* The navbar will show these links before you log in */}
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                  {this.props.cart.cart.length > 0 ? (
                    <Link to="/cart">Cart ({this.calculateQuantity()})</Link>
                  ) : (
                    <Link to="/cart">Cart</Link>
                  )}
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    cart: state.cart,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => dispatch(logout()),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
