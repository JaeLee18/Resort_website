import React from 'react'
import ReactDom from 'react-dom'
// import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import {RoomProvider} from './context'

ReactDom.render(
  <RoomProvider>
    <Router>
        <App />
    </Router>
  </RoomProvider>
  ,
  document.querySelector('#root')
)