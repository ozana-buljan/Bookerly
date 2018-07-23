
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './styles/index.css'


ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <App />
    </Router>,
    document.getElementById('root'))
