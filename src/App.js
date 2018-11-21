import React from 'react'
import Paper from './components/Paper'
import Counter from './Counter'

import Navigation from './Navigation/Navigation'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const App = (props) => (
  <div>


    <Router>
      <div>
        <Navigation
          label={"JFDDL6"}
        >
          <Link to="/">Dashboard</Link>
          <Link to="/counter">Counter</Link>
        </Navigation>

       
          <Route path="/Counter" component={() =>  <Paper><Counter startNumber={5} /> </Paper>}
          />
       
      </div>
    </Router>


  </div>
)
export default App
