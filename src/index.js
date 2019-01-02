import React from "react"
import ReactDOM from "react-dom"

import { createBrowserHistory } from "history"
import { applyMiddleware, compose, createStore } from "redux"
import { Provider } from "react-redux"

import { routerMiddleware, ConnectedRouter } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./store/reducers"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

// sagaMiddleware.run()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
