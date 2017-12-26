import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HelloReactDisplay from './HelloReactDisplay'

const App = (props) => (
  <Router>
    <div>
      <Route
        path="/"
        component={HelloReactDisplay}
      />
    </div>
  </Router>
)

export default App
