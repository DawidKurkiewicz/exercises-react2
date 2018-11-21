import React from 'react'
import Paper from './components/Paper'
import Counter from './Counter'

import Navigation from './Navigation/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'



const App = (props) => (
  <div>
    <Navigation
      label={"JFDDL6"}
    />
    <Paper>
      <Router>
        <div>
          <Route path="/Counter" component={() => <Counter startNumber = {5} /> }
          />
          
        </div>
      </Router>
    </Paper>

  </div>
)
export default App
