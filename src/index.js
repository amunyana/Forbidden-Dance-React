import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Classes from './views/classes'
import Page from './views/page'
import Bellydance from './views/bellydance'
import Home from './views/home'
import About from './views/about'
import Latin from './views/latin'
import PerformancesandWorkshops from './views/performancesand-workshops'
import Fitness from './views/fitness'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Classes} path="/classes" />
        <Route exact component={Page} path="/page" />
        <Route exact component={Bellydance} path="/bellydance" />
        <Route exact component={Home} path="/home" />
        <Route exact component={About} path="/about" />
        <Route exact component={Latin} path="/latin" />
        <Route
          exact
          component={PerformancesandWorkshops}
          path="/performancesand-workshops"
        />
        <Route exact component={Fitness} path="/fitness" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
