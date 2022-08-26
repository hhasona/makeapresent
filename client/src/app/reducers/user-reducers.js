import actionTypes from "../actions/constants"

const initialState = {
  isLoggedIn: false,
  userObject: {},
  errMsg: "",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS: {
      const { userObject } = action
      return {
        ...state,
        userObject: userObject,
        isLoggedIn: true,
        errMsg: "",
      }
    }
    case actionTypes.LOGIN_USER_FAILURE: {
      const { errMsg } = action
      return {
        ...state,
        errMsg: errMsg,
        isLoggedIn: false,
      }
    }
    default:
      return state
  }
}

export default userReducer
