import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import PageIndicator from './PageIndicator/PageIndicator'
import Landing from './Landing/Landing'
import Clubs from './Clubs/Clubs'
import Join from './Join/Join'
import styles from './HomePage.module.css'

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
    const background = this.state.pageIndex === 0
      ? styles.landing
      : styles.gradient

    return (
      <main
        className={background}
        onWheel={this.handleWheel}>
        { this.state.pageIndex === 0
          ? <Landing />
          : this.state.pageIndex < 4
            ? <Clubs pageId={this.state.pageIndex - 1} />
            : <Join /> }
        <PageIndicator
          pageIndex={this.state.pageIndex} />
        <Navigation />
      </main>
    )
  }
}

export default HomePage
