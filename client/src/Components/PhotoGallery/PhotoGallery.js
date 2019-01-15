import React, { Component } from 'react'
import styles from './PhotoGallery.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

class PhotoGallery extends Component {
  state = {
    modalActive: false,
    img: '',
    imageSize: []
  }

  handleClick = (e) => {
    this.setState({
      modalActive: true,
      img: e.target.src
        .split('/')[5]
        .split('web')
        .join('')
    })
  }

  handleClose = () => {
    this.setState({
      modalActive: false,
      img: ''
    })
  }

  componentDidMount () {
    for (let i = 71; i > 0; i--) {
      const randNum = Math.floor(Math.random() * 3)
      console.log(i)
      this.setState(prevState => {
        const newArray = prevState.imageSize
        newArray.unshift(randNum)
        return { imageSize: newArray }
      })
    }
  }

  render () {
    const imageArray = this.state.imageSize
      .map((num, i) => {
        let style = {}
        switch (num) {
          case 0:
            style.gridRow = 'span 1'
            style.gridColumn = 'span 1'
            break
          case 1:
            style.gridRow = 'span 1'
            style.gridColumn = 'span 2'
            break
          case 2:
            style.gridRow = 'span 2'
            style.gridColumn = 'span 2'
            break
          default:
            style.gridRow = ''
            style.gridColumn = ''
        }

        return (
          <li className='animate' onClick={this.handleClick} key={i + 1} style={style}>
            <img src={`/Images/PhotoGallery/${i + 1}web.jpg`} alt= '' />
          </li>
        )
      })

    const modalStyle = this.state.modalActive
      ? { display: 'flex' }
      : { display: 'none' }

    return (
      <main>
        <div id='modal' onClick={this.handleClose} style={modalStyle} className={styles.modal}>
          <div>
            <img src={`/Images/PhotoGallery/${this.state.img}`} alt='' />
            <div className={styles.close}>
              <div onClick={this.handleClose}>
                <span className={styles.bar}></span>
              </div>
            </div>
          </div>
        </div>
        <h1 className='headerText'>Photo Gallery</h1>
        <div className='wrapper'>
          <ul className={styles.container}>
            {imageArray.reverse()}
          </ul>
        </div>
        <Footer />
        <Navigation dark={true} />
      </main>
    )
  }
}

export default PhotoGallery
