import React from 'react'
import Button from './components/Button'
import Paper from './components/Paper'

const App = (props) => (
  <Paper>
    <Button
      onClick={() => alert('bu')}
    />
    <Button
      onClick={() => alert('bu')}
    />
  </Paper>
)
export default App
