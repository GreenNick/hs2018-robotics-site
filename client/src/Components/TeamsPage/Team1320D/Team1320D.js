import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320D',
  teamImage: '/Images/Teams/1320D/Team.jpg',
  robotImage: '/Images/Teams/1320D/Robot.jpg',
  overviewDesc: '1320D, one of five VEX Robotics teams at Tucker High School, is an outstanding team. Each one of our members brings their own unique skills and individuality to make the team unlike any other. Our team consists of six participants, Grant, Justin, Nick, Jonah, Luma, and Sanjeena, four of whom are seniors and will be graduating after this year’s competition. Over years, throughout all competitions and tournaments, days of hard work, and a few failures, our team has gotten stronger and more devoted to accomplishing more than the previous year. Each one of our team members put in a countless number of hours in order to showcase our strengths and capabilities at VEX competitions. Throughout all of this, we have learned to grow as a family and develop friendships that will last a lifetime. ',
  teamMembers: [
    {
      name: 'Grant Duffee',
      job: 'Co-Captain / Builder / Driver',
      desc: 'Grant is the co-captain, driver, and builder for 1320D. Being a builder and a driver gives him an edge in matches as no one knows our robot better than him. Therefore, he can control it better, and when something goes wrong, he can fix the problem rapidly. Being the driver also gives him pride, which increases his drive to succeed.',
      src: '/Images/Teams/1320D/Grant.jpg'
    },
    {
      name: 'Justin Wade',
      job: 'Co-Captain / Programmer',
      desc: 'Justin is the co-captain and programmer for 1320D. During his time in VEX, he has learned how program. He is now one of the most skilled programmers at Tucker, and is always helping other members. Justin’s programming allows him to create advanced programming skills and autonomous programs to help 1320D excel.',
      src: '/Images/Teams/1320D/Justin.jpg'
    },
    {
      name: 'Nicholas Bowers',
      job: 'Notebook Manager',
      desc: 'Nick is the notebook manager for 1320D. Throughout his four years in VEX, he has become extree=mely skilled at recording data and sketching ideas. Although he is not an artist by nature, he has learned how to skillfully draft in a way that allows us to convey ideas to each other and to judges.',
      src: '/Images/Teams/1320D/Nicholas.jpg'
    },
    {
      name: 'Luma Younis',
      job: 'Binder Manager',
      desc: 'Luma is the binder manager for 1320D. Her eye for asthetics and her affinity woth visauls and grahpics make her the obvious choice for organizing and designing a good VEX binder. As she has three years of experience doing this, she has gotten very skilled at intuitively organizing information.',
      src: '/Images/Teams/1320D/Luma.jpg'
    },
    {
      name: 'Sanjeena Chowdhury',
      job: 'Binder Assistant',
      desc: 'Sanjeena works with Luma as the binder assistant for 1320D. Although this is her first year in VEX, she has quickly learned and perfectly compliments Luma’s weaknesses. Where Luma struggles with technical writing, Sqanjeena excels. Luma and Sanjeena are the perfect team for creating an immaculate binder.',
      src: '/Images/Teams/1320D/Sanjeena.jpg'
    },
    {
      name: 'Jonah Fields',
      job: 'Autodesk Designer',
      desc: 'Jonah fills a niche but essential role as the Autodesk Designer for 1320D. For each robot, he 3D models the robot in Autodesk Inventor. This helps the team to avoid mistakes and spot possible design challenges early-on. Additionally, this helps 1320D to stand out among other teams.',
      src: '/Images/Teams/1320D/Jonah.jpg'
    }
  ]
}

class Team1320D extends Component {
  state = {
    robotSkillRank: 0,
    programSkillRank: 0,
    driveSkillRank: 0,
    awardNum: 0,
    worldQual: 0,
    stateQual: 0,
    wins: 0,
    losses: 0,
    ties: 0
  }

  fetchSkillRank = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result[0].season_rank
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchAwardNum = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.length
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchWorldQual = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, event) => {
          return event.name.includes('World')
            ? acc + 1
            : acc
        }, 0)
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchStateQual = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, event) => {
          return event.name.includes('State Championship')
            ? acc + 1
            : acc
        }, 0)
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchWins = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, match) => {
          for (let i in match) {
            if (match[i] === data.teamNumber) {
              let color = i.slice(0, i.length - 1)
              if (color === 'red' && match.redscore > match.bluescore) {
                return acc + 1
              } else if (color === 'blue' && match.bluescore > match.redscore) {
                return acc + 1
              }
            }
          }
          return acc
        }, 0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  fetchLosses = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, match) => {
          for (let i in match) {
            if (match[i] === data.teamNumber) {
              let color = i.slice(0, i.length - 1)
              if (color === 'red' && match.redscore < match.bluescore) {
                return acc + 1
              } else if (color === 'blue' && match.bluescore < match.redscore) {
                return acc + 1
              }
            }
          }
          return acc
        }, 0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  fetchTies = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, match) => {
          for (let i in match) {
            if (match[i] === data.teamNumber) {
              let color = i.slice(0, i.length - 1)
              if (color === 'red' && match.redscore === match.bluescore) {
                return acc + 1
              } else if (color === 'blue' && match.bluescore === match.redscore) {
                return acc + 1
              }
            }
          }
          return acc
        }, 0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.fetchSkillRank(`https://api.vexdb.io/v1/get_skills?season_rank=true&team=${data.teamNumber}&season=current&type=2`)
      .then(response => this.setState({ robotSkillRank: response }))
    this.fetchSkillRank(`https://api.vexdb.io/v1/get_skills?season_rank=true&team=${data.teamNumber}&season=current&type=0`)
      .then(response => this.setState({ driveSkillRank: response }))
    this.fetchSkillRank(`https://api.vexdb.io/v1/get_skills?season_rank=true&team=${data.teamNumber}&season=current&type=1`)
      .then(response => this.setState({ programSkillRank: response }))
    this.fetchAwardNum(`https://api.vexdb.io/v1/get_awards?team=${data.teamNumber}`)
      .then(response => this.setState({ awardNum: response }))
    this.fetchWorldQual(`https://api.vexdb.io/v1/get_events?team=${data.teamNumber}`)
      .then(response => this.setState({ worldQual: response }))
    this.fetchStateQual(`https://api.vexdb.io/v1/get_events?team=${data.teamNumber}`)
      .then(response => this.setState({ stateQual: response }))
    this.fetchWins(`https://api.vexdb.io/v1/get_matches?team=${data.teamNumber}&season=current`)
      .then(response => this.setState({ wins: response }))
    this.fetchLosses(`https://api.vexdb.io/v1/get_matches?team=${data.teamNumber}&season=current`)
      .then(response => this.setState({ losses: response }))
    this.fetchTies(`https://api.vexdb.io/v1/get_matches?team=${data.teamNumber}&season=current`)
      .then(response => this.setState({ ties: response }))
  }

  render() {
    return (
      <TeamTemplate
        teamNumber={data.teamNumber}
        teamImage={data.teamImage}
        robotImage={data.robotImage}
        overviewDesc={data.overviewDesc}
        teamMembers={data.teamMembers}
        robotSkillRank={this.state.robotSkillRank}
        programSkillRank={this.state.programSkillRank}
        driveSkillRank={this.state.driveSkillRank}
        awardNum={this.state.awardNum}
        worldQual={this.state.worldQual}
        stateQual={this.state.stateQual}
        wins={this.state.wins}
        losses={this.state.losses}
        ties={this.state.ties} />
    )
  }
}

export default Team1320D
