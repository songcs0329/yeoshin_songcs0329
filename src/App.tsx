import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@reducers"
import { useEffect } from "react"
import { getIssuesRequestAction } from "@actions"

function App() {
  const { isLoading, isError, dataList } = useSelector((state: RootState) => state.issues)
  const dispatch = useDispatch()
  console.log(isLoading, isError, dataList)
  useEffect(() => {
    dispatch(getIssuesRequestAction())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{isError}</div>
  return (
    <div className="App">
      <div>{JSON.stringify(dataList)}</div>
    </div>
  )
}

export default App
