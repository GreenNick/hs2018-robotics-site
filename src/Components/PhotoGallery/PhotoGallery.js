import React from 'react'
import styles from './PhotoGallery.module.css'
import Navigation from '../Navigation/Navigation'

const photos = [
  { src: '', date: 0 },
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
              const randNum = Math.floor(Math.random() * 4)
              let style = {}
              switch (randNum) {
                case 0:
                  style.gridRow = 'span 1'
                  style.gridColumn = 'span 1'
                  break
                case 1:
                  style.gridRow = 'span 2'
                  style.gridColumn = 'span 1'
                  break
                case 2:
                  style.gridRow = 'span 1'
                  style.gridColumn = 'span 2'
                  break
                case 3:
                  style.gridRow = 'span 2'
                  style.gridColumn = 'span 2'
                  break
                default:
                  style.gridRow = ''
                  style.gridColumn = ''
              }

              return (
                <li key={i} style={style}>
                  <img src={photo.src} alt= '' />
                </li>
              )
            })
          }
        </ul>
      </div>
      <Navigation dark={true} />
    </main>
  )
}

export default PhotoGallery
