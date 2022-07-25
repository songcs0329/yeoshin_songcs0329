import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import rootReducer from "@reducers"
import issuesDataSaga from "@actions"
import GlobalStyles from "@styles/GlobalStyles"
import App from "./App"

const sagaMiddleWare = createSagaMiddleware()
const enhancer =
  process.env.NODE_ENV === "production" ? applyMiddleware(sagaMiddleWare) : applyMiddleware(logger, sagaMiddleWare)
const store = createStore(rootReducer, enhancer)
sagaMiddleWare.run(issuesDataSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
