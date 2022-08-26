import actionTypes from "../actions/constants"

const initialState = {
  isLoading: false,
  isError: false,
}

const viewReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUEST: {
      return { ...state, isLoading: true }
    }

    case actionTypes.LOGIN_USER_SUCCESS: {
      return { ...state, isError: false, isLoading: false }
    }

    case actionTypes.LOGIN_USER_FAILURE: {
      return { ...state, isLoading: false, isErorr: true }
    }
    default:
      return state
  }
}

export default viewReducers
