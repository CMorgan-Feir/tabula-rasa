import axios from 'axios'

//ACTION TYPES

const GET_ALL_ARTWORKS = 'GET_ALL_ARTWORKS'
const GET_SINGLE_ARTWORK = 'GET_SINGLE_ARTWORK'
const CLEAR_STORED_ARTWORK = 'CLEAR_STORED_ARTWORK'

//INITIAL STATE

const initialState = {
  allArtworks: [],
  artwork: {},
  loaded: false
}

//ACTION CREATORS

const gotAllArtworks = allArtworks => ({
  type: GET_ALL_ARTWORKS,
  allArtworks
})

const getSingleArtwork = artwork => ({type: GET_SINGLE_ARTWORK, artwork})

export const clearArtwork = () => ({type: CLEAR_STORED_ARTWORK})

//THUNK CREATORS

export const getAllArtworks = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/all-artworks`)
      dispatch(gotAllArtworks(data))
    } catch (error) {
      console.log('Something went wrong: ', error)
    }
  }
}

export const fetchSingleArtwork = artworkId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/single-artwork/${artworkId}`)
    dispatch(getSingleArtwork(data))
  } catch (error) {
    console.error(error)
  }
}

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTWORKS:
      return {...state, allArtworks: action.allArtworks}
    case GET_SINGLE_ARTWORK:
      return {...state, artwork: action.artwork, loaded: true}
    case CLEAR_STORED_ARTWORK:
      return {...state, artwork: {}, loaded: false}
    default:
      return state
  }
}
