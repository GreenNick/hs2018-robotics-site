import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import PageIndicator from './PageIndicator/PageIndicator'
import Landing from './Landing/Landing'
import Clubs from './Clubs/Clubs'
import Join from './Join/Join'
import styles from './HomePage.module.css'
import PageButton from './PageButton/PageButton'

class HomePage extends Component {
  state = { pageIndex: 0 }

  handleWheel = event => {
    if (event.deltaY > 0 && this.state.pageIndex < 4) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }))
    } else if (event.deltaY < 0 && this.state.pageIndex > 0) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex - 1 }))
    }
  }

  handleClick = () => {
    this.state.pageIndex < 4 &&
      this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }))
  }

  homeHandleClick = () => {
    this.setState({ pageIndex: 0 })
  }

  handleArrows = event => {
    if (event.key === 'ArrowRight') {
      this.state.pageIndex < 4 &&
        this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }))
    } else if (event.key === 'ArrowLeft') {
      this.state.pageIndex > 0 &&
        this.setState(prevState => ({ pageIndex: prevState.pageIndex - 1 }))
    }
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleArrows)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.handleArrows)
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
            ? <Clubs key={this.state.pageIndex - 1} pageId={this.state.pageIndex - 1} />
            : <Join /> }
        <PageIndicator
          pageIndex={this.state.pageIndex} />
        <Navigation homeHandleClick={this.homeHandleClick} />
        <PageButton onClick={this.handleClick} />
      </main>
    )
  }
}

export default HomePage
