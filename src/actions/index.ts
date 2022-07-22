import { call, put, takeLatest } from "redux-saga/effects"
import { asyncFetchIssues } from "@apis"
import { SuccessIssueItemType, ErrorIssueItemType } from "@types"

export const GET_ISSUES_REQUEST = "issues/GET_ISSUES_REQUEST" as const
export const GET_ISSUES_SUCCESS = "issues/GET_ISSUES_SUCCESS" as const
export const GET_ISSUES_ERROR = "issues/GET_ISSUES_ERROR" as const

export const getIssuesRequestAction = () => {
  return {
    type: GET_ISSUES_REQUEST,
  }
}

export const getIssuesSuccessAction = (payload: SuccessIssueItemType[]) => {
  return {
    type: GET_ISSUES_SUCCESS,
    payload,
  }
}

export const getIssuesErrorAction = (payload: any) => {
  return {
    type: GET_ISSUES_ERROR,
    payload,
  }
}

function* getIssuesData() {
  try {
    const sagaIssuesData: SuccessIssueItemType[] = yield call(asyncFetchIssues)
    yield put(getIssuesSuccessAction(sagaIssuesData))
  } catch (error) {
    let errorObject = error as ErrorIssueItemType
    yield put(getIssuesErrorAction(errorObject.message))
  }
}

export default function* issuesDataSaga() {
  yield takeLatest(GET_ISSUES_REQUEST, getIssuesData)
}
