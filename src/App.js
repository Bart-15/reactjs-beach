import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Rooms, SingleRoom, Error} from './component/index'
const App = () => {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Rooms} exact path='/rooms/' />
          <Route component={SingleRoom} exact path='/rooms/:slug' />
          <Route component={Error} />
        </Switch>
      </Router>
    )
}

export default App
