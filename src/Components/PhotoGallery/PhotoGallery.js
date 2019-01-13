import React, { Component } from 'react'
import styles from './PhotoGallery.module.css'
import Navigation from '../Navigation/Navigation'

<<<<<<< HEAD
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
          <li onClick={this.handleClick} key={i + 1} style={style}>
            <img src={`/Images/PhotoGallery/${i + 1}web.jpg`} alt= '' />
          </li>
        )
      })

    const modalStyle = this.state.modalActive
      ? { display: 'flex' }
      : { display: 'none' }

    return (
      <main>
        <div style={modalStyle} className={styles.modal}>
          <img src={`/Images/PhotoGallery/${this.state.img}`} alt='' />
          <div className={styles.close}>
            <div onClick={this.handleClose}>
              <span className={styles.bar}></span>
            </div>
          </div>
        </div>
        <h1 className='headerText'>Photo Gallery</h1>
        <div className='wrapper'>
          <ul className={styles.container}>
            {imageArray.reverse()}
          </ul>
        </div>
        <Navigation dark={true} />
      </main>
    )
  }
=======
const photos = [
  { src: '/Images/PhotoGallery/1web.jpg', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 },
  { src: '', date: 0 }
]

const PhotoGallery = () => {
  return (
    <main>
      <h1 className='headerText'>Photo Gallery</h1>
      <div className='wrapper'>
        <ul className={styles.container}>
          {
            photos.map((photo, i) => {
              const randNum = Math.floor(Math.random() * 3)
              let style = {}
              switch (randNum) {
                case 0:
                  style.gridRow = 'span 1'
                  style.gridColumn = 'span 1'
                  break
                // case 1:
                //   style.gridRow = 'span 2'
                //   style.gridColumn = 'span 1'
                //   break
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
                <li key={i} style={style}>
                  <img src={photo.src} alt='' />
                </li>
              )
            })
          }
        </ul>
      </div>
      <Navigation dark={true} />
    </main>
  )
>>>>>>> 14debf7020d3dad541b74f67005ac62b7ac37e81
}

export default PhotoGallery
