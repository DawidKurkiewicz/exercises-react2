import React from 'react'
import Paper from './components/Paper'
import MenuItem from 'material-ui/MenuItem'

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
          <Link to="/">
          <MenuItem>
          Dashboard
          </MenuItem>
          </Link>
          <Link to="/counter">
          <MenuItem>
          Counter
          </MenuItem>
          </Link>
        </Navigation>
          <Route path="/Counter" component={() =>  <Paper><Counter startNumber={5} /> </Paper>}
          />
      </div>
    </Router>


  </div>
)
export default App
