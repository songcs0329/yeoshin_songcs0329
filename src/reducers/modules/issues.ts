import { GET_ISSUES_ERROR, GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, IssuesActionType } from "@actions"
import { SuccessIssueItemType } from "@types"

export interface IssuesStateType {
  isLoading: boolean
  errorMsg: string
  list: [] | SuccessIssueItemType[]
}

const initialState: IssuesStateType = {
  isLoading: false,
  errorMsg: "",
  list: [],
}

export const issuesReducer = (state = initialState, action: IssuesActionType) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      }
    case GET_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
