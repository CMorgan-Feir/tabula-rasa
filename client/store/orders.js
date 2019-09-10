import axios from 'axios'

//ACTION TYPES

const ADD_TO_ORDER = 'ADD_TO_ORDER'

//INITIAL STATE

const initialState = {
  currentOrder: []
}

//ACTION CREATORS

const addedArtworkToOrder = artwork => ({
  type: ADD_TO_ORDER,
  artwork
})

//THUNK CREATORS

export const addArtworkToOrder = artworkId => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orders/`, {artworkId: artworkId})
      dispatch(addedArtworkToOrder(data))
    } catch (error) {
      console.log('Something went wrong: ', error)
    }
  }
}

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {...state, currentOrder: [...state.currentOrder, action.artwork]}
    default:
      return state
  }
}
