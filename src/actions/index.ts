import { call, put, takeLatest } from "redux-saga/effects"
import { asyncFetchIssues } from "@apis"
import { SortIssueItemType, ErrorIssueItemType } from "@types"

export const GET_ISSUES_REQUEST = "issues/GET_ISSUES_REQUEST" as const
export const GET_ISSUES_SUCCESS = "issues/GET_ISSUES_SUCCESS" as const
export const GET_ISSUES_ERROR = "issues/GET_ISSUES_ERROR" as const

export interface GetIssuesRequestActionType {
  type: typeof GET_ISSUES_REQUEST
}

export const getIssuesRequestAction = () => {
  return {
    type: GET_ISSUES_REQUEST,
  }
}

export interface GetIssuesSuccessActionType {
  type: typeof GET_ISSUES_SUCCESS
  payload: SortIssueItemType[]
}

export const getIssuesSuccessAction = (payload: SortIssueItemType[]) => {
  return {
    type: GET_ISSUES_SUCCESS,
    payload,
  }
}

export interface GetIssuesErrorActionType {
  type: typeof GET_ISSUES_ERROR
  payload: string
}

export const getIssuesErrorAction = (payload: string) => {
  return {
    type: GET_ISSUES_ERROR,
    payload,
  }
}

export type IssuesActionType = GetIssuesRequestActionType | GetIssuesSuccessActionType | GetIssuesErrorActionType

function* getIssuesData() {
  try {
    const sagaIssuesData: SortIssueItemType[] = yield call(asyncFetchIssues)
    yield put(getIssuesSuccessAction(sagaIssuesData))
  } catch (error) {
    let errorObject = error as ErrorIssueItemType
    yield put(getIssuesErrorAction(errorObject.message))
  }
}

export default function* issuesDataSaga() {
  yield takeLatest(GET_ISSUES_REQUEST, getIssuesData)
}
