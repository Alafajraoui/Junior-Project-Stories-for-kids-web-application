import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Main from "./components/Main.jsx" 
import "../dist/style.css"

const App = () => {
 
 

  return (
    <div>
    <div>
      <Main/>
    </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
