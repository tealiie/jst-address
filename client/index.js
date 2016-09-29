import React from 'react'
// import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
      </Router>
    ),
    <App />,
    document.getElementById('app')
  )
})
