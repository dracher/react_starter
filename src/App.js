import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
        <Link to="/404">404</Link>
        <Link to="/null">none</Link>
        <Switch>
          <Route exact path="/" render={() => <div>Match</div>} />
          <Route exact path="/other" render={() => <div>other</div>} />
          <Route exact path="/404" render={() => <div>404</div>} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
