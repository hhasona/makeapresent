import userSlice from "./user-reducers"
import viewSlice from "./view-reducers"

import { combineReducers } from "redux"
const allReducers = combineReducers({
  userSlice,
  viewSlice,
})
export default allReducers
