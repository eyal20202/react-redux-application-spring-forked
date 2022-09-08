import * as actions from '../actions/postsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

export default function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DOGS:
      return { ...state, loading: true }
    case actions.GET_DOGS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false }
    case actions.GET_DOGS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
