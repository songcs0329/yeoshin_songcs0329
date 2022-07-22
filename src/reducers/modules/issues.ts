import { GET_ISSUES_ERROR, GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS } from "@actions"
import { SuccessIssueItemType } from "@types"

interface IssuesStateType {
  isLoading: boolean
  isError: string
  dataList: [] | SuccessIssueItemType[]
}

const initialState: IssuesStateType = {
  isLoading: false,
  isError: "",
  dataList: [],
}

export const issuesReducer = (state = initialState, action: any) => {
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
        dataList: action.payload,
      }
    case GET_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      }
    default:
      return state
  }
}
