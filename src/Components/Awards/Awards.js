import React, { Component } from 'react'
import AwardsTemplate from './AwardsTemplate/AwardsTemplate'

const awards = [
  {
    title: 'Excellence Award',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate? Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem. Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?',
    src: '/Images/svg/Awards/ExcellenceAward.svg',
    alt: 'A metal trophy with a plaque reading VEX Robotics Competition Excellence Award'
  },
  {
    title: 'Tournament Champion',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate? Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem. Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?',
    src: '/Images/svg/Awards/ChampionAward.svg',
    alt: 'A metal trophy with a plaque reading VEX Robotics Competition Tournment Champion'
  },
  {
    title: 'Design Award',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate? Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem. Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?',
    src: '/Images/svg/Awards/DesignAward.svg',
    alt: 'A metal trophy with a plaque reading VEX Robotics Competition Design Award'
  },
  {
    title: 'Robot Skills Champion',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate? Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem. Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?',
    src: '/Images/svg/Awards/SkillsAward.svg',
    alt: 'A metal trophy with a plaque reading VEX Robotics Competition Robot Skills Champion'
  },
  {
    title: 'Judges Award',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate? Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem. Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?',
    src: '/Images/svg/Awards/JudgesAward.svg',
    alt: 'A metal trophy with a plaque reading VEX Robotics Competition Judges Award'
  }
]

class Awards extends Component {
  state = {
    awardIndex: 0,
    teams: { teamA: {}, teamB: {}, teamC: {}, teamD: {}, teamE: {} },
    years: { excellence: {}, design: {}, champion: {}, skills: {}, judges: {} }
  }

  handleNextClick = () => {
    this.state.awardIndex < 4
      ? this.setState(prevState => ({ awardIndex: prevState.awardIndex + 1 }))
      : this.setState({ awardIndex: 0 })
  }

  handlePrevClick = () => {
    this.state.awardIndex > 0
      ? this.setState(prevState => ({ awardIndex: prevState.awardIndex - 1 }))
      : this.setState({ awardIndex: 4 })
  }

  fetchData = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result
      }
      throw new Error('Request failed')
    } catch (err) {
      console.log(err)
    }
  }

  reduceAwards = (acc, currVal) => {
    if (currVal.sku.includes('RE-VRC-10')) {
      acc[2010]++
    } else if (currVal.sku.includes('RE-VRC-11')) {
      acc[2011]++
    } else if (currVal.sku.includes('RE-VRC-12')) {
      acc[2012]++
    } else if (currVal.sku.includes('RE-VRC-13')) {
      acc[2013]++
    } else if (currVal.sku.includes('RE-VRC-14')) {
      acc[2014]++
    } else if (currVal.sku.includes('RE-VRC-15')) {
      acc[2015]++
    } else if (currVal.sku.includes('RE-VRC-16')) {
      acc[2016]++
    } else if (currVal.sku.includes('RE-VRC-17')) {
      acc[2017]++
    } else if (currVal.sku.includes('RE-VRC-18')) {
      acc[2018]++
    }
    return acc
  }

  componentDidMount () {
    const awardData = Promise.all([
      this.fetchData(`https://api.vexdb.io/v1/get_awards?team=1320A`),
      this.fetchData(`https://api.vexdb.io/v1/get_awards?team=1320B`),
      this.fetchData(`https://api.vexdb.io/v1/get_awards?team=1320C`),
      this.fetchData(`https://api.vexdb.io/v1/get_awards?team=1320D`),
      this.fetchData(`https://api.vexdb.io/v1/get_awards?team=1320E`)
    ])

    awardData
      .then(res => res.map(team => {
        return {
          excellence: team.filter(obj =>
            obj.name === 'Excellence Award (VRC/VEXU)' || obj.name === 'Excellence Award (High School)').length,
          design: team.filter(obj =>
            obj.name === 'Design Award (VRC/VEXU)').length,
          champion: team.filter(obj =>
            obj.name === 'Tournament Champions (VRC/VEXU)').length,
          skills: team.filter(obj =>
            obj.name === 'Robot Skills Champion (VRC/VEXU)' || obj.name === 'Robot Skills Winner (VRC/VEXU)').length,
          judges: team.filter(obj =>
            obj.name === 'Judges Award (VRC/VEXU)').length
        }
      }))
      .then(res => {
        return {
          teamA: res[0],
          teamB: res[1],
          teamC: res[2],
          teamD: res[3],
          teamE: res[4]
        }
      })
      .then(res => this.setState({ teams: res }))

    awardData
      .then(res => res.reduce((awards, team) => {
        team.filter(award => awards.push(award))
        return awards
      }))
      .then(res => {
        const awards = []
        awards.push(res.filter(obj => obj.name === 'Excellence Award (VRC/VEXU)'))
        awards.push(res.filter(obj => obj.name === 'Design Award (VRC/VEXU)'))
        awards.push(res.filter(obj => obj.name === 'Tournament Champions (VRC/VEXU)'))
        awards.push(res.filter(obj => obj.name === 'Robot Skills Champion (VRC/VEXU)'))
        awards.push(res.filter(obj => obj.name === 'Judges Award (VRC/VEXU)'))
        return awards
      })
      .then(res => {
        return {
          excellence: res[0].reduce(this.reduceAwards,
            { 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, 2017: 0, 2018: 0 }),
          design: res[1].reduce(this.reduceAwards,
            { 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, 2017: 0, 2018: 0 }),
          champion: res[2].reduce(this.reduceAwards,
            { 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, 2017: 0, 2018: 0 }),
          skills: res[3].reduce(this.reduceAwards,
            { 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, 2017: 0, 2018: 0 }),
          judges: res[4].reduce(this.reduceAwards,
            { 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, 2017: 0, 2018: 0 })
        }
      })
      .then(res => this.setState({ years: res }))
  }

  render () {
    const awardsArray = ['excellence', 'design', 'champion', 'skills', 'judges']

    return (
      <AwardsTemplate
        onNextClick={this.handleNextClick}
        onPrevClick={this.handlePrevClick}
        title={awards[this.state.awardIndex].title}
        desc={awards[this.state.awardIndex].desc}
        src={awards[this.state.awardIndex].src}
        alt={awards[this.state.awardIndex].alt}
        teamA={this.state.teams.teamA[awardsArray[this.state.awardIndex]]}
        teamB={this.state.teams.teamB[awardsArray[this.state.awardIndex]]}
        teamC={this.state.teams.teamC[awardsArray[this.state.awardIndex]]}
        teamD={this.state.teams.teamD[awardsArray[this.state.awardIndex]]}
        teamE={this.state.teams.teamE[awardsArray[this.state.awardIndex]]}
        year10={this.state.years[awardsArray[this.state.awardIndex]][2010]}
        year11={this.state.years[awardsArray[this.state.awardIndex]][2011]}
        year12={this.state.years[awardsArray[this.state.awardIndex]][2012]}
        year13={this.state.years[awardsArray[this.state.awardIndex]][2013]}
        year14={this.state.years[awardsArray[this.state.awardIndex]][2014]}
        year15={this.state.years[awardsArray[this.state.awardIndex]][2015]}
        year16={this.state.years[awardsArray[this.state.awardIndex]][2016]}
        year17={this.state.years[awardsArray[this.state.awardIndex]][2017]}
        year18={this.state.years[awardsArray[this.state.awardIndex]][2018]} />
    )
  }
}

export default Awards
