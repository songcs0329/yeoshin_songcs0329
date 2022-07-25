import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@reducers"
import { getIssuesRequestAction } from "@actions"
import Loading from "@components/Loading"
import ErrorPage from "@components/ErrorPage"
import IssusesList from "@components/IssuesList"

function App() {
  const { isLoading, errorMsg, list } = useSelector((state: RootState) => state.issues)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIssuesRequestAction())
  }, [dispatch])

  if (isLoading) return <Loading />
  if (errorMsg) return <ErrorPage errorMessage={errorMsg} />
  return (
    <div className="App">
      <IssusesList issuesList={list} />
    </div>
  )
}

export default App
