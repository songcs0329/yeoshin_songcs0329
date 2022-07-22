import { issuesReducer } from "./modules/issues"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  issues: issuesReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
