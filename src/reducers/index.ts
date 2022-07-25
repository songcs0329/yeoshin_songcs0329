import { combineReducers } from "redux"
import { issuesReducer } from "./modules/issues"

const rootReducer = combineReducers({
  issues: issuesReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
