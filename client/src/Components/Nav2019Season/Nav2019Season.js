import React from 'react'
import NavPageTemplate from '../NavPageTemplate/NavPageTemplate'

const links = [
  { title: 'About the Game', url: '2019Season/AboutTheGame' },
  { title: 'Calendar', url: '2019Season/Calendar' },
  { title: 'Tucker Tournament', url: '2019Season/TuckerTournament' },
  { title: 'Online Challenge', url: '2019Season/OnlineChallenge' }
]

const Nav2019Season = () => {
  return (
    <NavPageTemplate
      heading='2019 Season'
      links={links} />
  )
}

export default Nav2019Season
