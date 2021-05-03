import React from 'react'
import ReactDOM from 'react-dom'
import {RoomProvider} from './context'

import App from './App'
import './index.css'
ReactDOM.render(
    <RoomProvider>
        <App /> 
    </RoomProvider>,
    document.getElementById('root')
)