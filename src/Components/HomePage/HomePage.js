import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import PageIndicator from './PageIndicator/PageIndicator'
import Landing from './Landing/Landing'
import Clubs from './Clubs/Clubs'
import Join from './Join/Join'

class HomePage extends Component {
  state = { pageIndex: 0 }

  handleWheel = event => {
    if (event.deltaY > 0 && this.state.pageIndex < 4) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }))
    } else if (event.deltaY < 0 && this.state.pageIndex > 0) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex - 1 }))
    }
  }

  render () {
    if (this.state.pageIndex === 0) {
      return (
        <Landing
          onWheel={this.handleWheel}>
          <PageIndicator
          pageIndex={this.state.pageIndex} />
          <Navigation />
        </Landing>
      )
    } else if (this.state.pageIndex < 4) {
      return (
        <Clubs
          onWheel={this.handleWheel}
          pageId={this.state.pageIndex - 1}>
          <PageIndicator
          pageIndex={this.state.pageIndex} />
          <Navigation />
        </Clubs>
      )
    } else {
      return (
        <Join
          onWheel={this.handleWheel}>
          <PageIndicator pageIndex={this.state.pageIndex} />
          <Navigation />
        </Join>
      )
    }
  }
}

export default HomePage