import axios from 'axios'

//ACTION TYPES

const GET_CART = 'GET_CART'

//INITIAL STATE

const initialState = {
  cart: []
}

//ACTION CREATORS

const gotCart = cart => ({
  type: GET_CART,
  cart
})

//THUNK CREATORS

export const getCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart`)
      dispatch(gotCart(data))
    } catch (error) {
      console.log('Something went wrong: ', error)
    }
  }
}

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, cart: [...action.cart]}
    default:
      return state
  }
}
