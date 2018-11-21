import React from 'react'
import Paper from './components/Paper'
import Counter from './Counter'
import Navigation from './Navigation/Navigation'


const App = (props) => (
  <div>
    <Navigation
      label={"JFDDL6"}
    />
    <Paper>
      <Counter
        startNumber={5}
      />
    </Paper>
  </div>
)
export default App
