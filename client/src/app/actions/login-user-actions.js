import actionTypes from "./constants"
import ListApiService from "../../services/api"

const loginUserSuccessAction = (userObject) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  userObject,
})

const loginUserRequestAction = () => ({
  type: actionTypes.LOGIN_USER_REQUEST,
})

const loginUserFailureAction = (errMsg) => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  errMsg,
})
export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginUserRequestAction())
    try {
      const getUserObj = await ListApiService.getUserByEmailAndPassword(
        email,
        password
      )
      if (typeof getUserObj === "string")
        dispatch(loginUserFailureAction(getUserObj))
      else {
        dispatch(loginUserSuccessAction(getUserObj))
      }
    } catch (error) {
      dispatch(loginUserFailureAction())
    }
  }
}
