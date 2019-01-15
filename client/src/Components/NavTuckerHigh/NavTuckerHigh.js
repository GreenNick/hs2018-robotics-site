import React from 'react'
import NavPageTemplate from '../NavPageTemplate/NavPageTemplate'

const links = [
  { title: 'About Us', url: 'TuckerHigh/AboutUs' },
  { title: 'Teachers', url: 'TuckerHigh/Teachers' },
  { title: 'Diversity', url: 'TuckerHigh/Diversity' },
  { title: 'Outreach', url: 'TuckerHigh/Outreach' },
  { title: 'Incoming Members', url: 'TuckerHigh/IncomingMembers' }
]

const NavTuckerHigh = () => {
  return (
    <NavPageTemplate
      heading='Tucker High'
      links={links} />
  )
}

export default NavTuckerHigh
