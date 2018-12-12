import React from 'react'
import NavPageTemplate from '../NavPageTemplate/NavPageTemplate'

const links = [
  { title: 'Timeline', url: 'History/Timeline' },
  { title: 'Awards', url: 'History/Awards' },
  { title: 'Photo Gallery', url: 'History/PhotoGallery' }
]

const NavHistory = () => {
  return (
    <NavPageTemplate
      heading='History'
      links={links} />
  )
}

export default NavHistory
