import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
