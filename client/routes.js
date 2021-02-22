import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {AnimatePresence} from 'framer-motion'
import {
  Login,
  Signup,
  UserHome,
  Main,
  Collections,
  SingleArtwork,
  ServicesDetails,
  Cart,
  EditorialTemplate
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <AnimatePresence>
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={Main} />
          {/* <Route exact path='/collections/all-art' component={Collections} props={{type: 'all-art'}}/> */}
          <Route
            exact
            path="/collections/all-art"
            render={props => <Collections {...props} type="all-art" />}
          />
          <Route
            exact
            path="/collections/abstract"
            render={props => (
              <Collections {...props} type="genre" value="abstract" />
            )}
          />
          <Route
            exact
            path="/collections/twombly"
            render={props => (
              <Collections {...props} type="artist" value="Cy Twombly" />
            )}
          />
          <Route
            exact
            path="/collections/botanical"
            render={props => (
              <Collections {...props} type="genre" value="botanical" />
            )}
          />
          <Route
            exact
            path="/collections/photography"
            render={props => (
              <Collections {...props} type="genre" value="photograph" />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/editorial" component={EditorialTemplate} />
          <Route exact path="/services" component={ServicesDetails} />
          <Route path="/cart" component={Cart} />
          <Route
            exact
            path="/single-artwork/:artworkId"
            component={SingleArtwork}
          />
          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/" component={Main} />
              <Route path="/home" component={UserHome} />
            </Switch>
          )}
          {/* Displays our Login component as a fallback */}
          <Route component={Login} />
        </Switch>
      </AnimatePresence>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
