import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import NavTuckerHigh from './Components/NavTuckerHigh/NavTuckerHigh'
import Nav2019Season from './Components/Nav2019Season/Nav2019Season'
import NavHistory from './Components/NavHistory/NavHistory'
import TeamsPage from './Components/TeamsPage/TeamsPage'
import Contact from './Components/Contact/Contact'
import Team1320A from './Components/TeamsPage/Team1320A/Team1320A'
import Team1320B from './Components/TeamsPage/Team1320B/Team1320B'
import Team1320C from './Components/TeamsPage/Team1320C/Team1320C'
import Team1320D from './Components/TeamsPage/Team1320D/Team1320D'
import Team1320E from './Components/TeamsPage/Team1320E/Team1320E'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/TuckerHigh' component={NavTuckerHigh} exact />
          <Route path='/2019Season' component={Nav2019Season} exact />
          <Route path='/History' component={NavHistory} exact />
          <Route path='/Teams' component={TeamsPage} exact />
          <Route path='/Teams/1320A' component={Team1320A} exact />
          <Route path='/Teams/1320B' component={Team1320B} exact />
          <Route path='/Teams/1320C' component={Team1320C} exact />
          <Route path='/Teams/1320D' component={Team1320D} exact />
          <Route path='/Teams/1320E' component={Team1320E} exact />
          <Route path='/Contact' component={Contact} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
