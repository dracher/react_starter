import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

function machines(state = [], action) {
  return state
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    machines
  })
