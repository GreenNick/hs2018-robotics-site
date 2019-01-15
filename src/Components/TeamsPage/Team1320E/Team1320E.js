import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320E',
  teamImage: '/Images/Teams/1320E/Team.jpg',
  robotImage: '/Images/Teams/1320E/Robot.jpg',
  overviewDesc: 'As part of the Tucker Tiger’s VEX program, we are happy to represent team 1320E. We are a team of seven people each holding a specific job. Carter Foley serves as the captain of the team providing organization while also being a builder. Working alongside him is William, who is a builder specializing a specific area of the robot. Nigel, a second-year robotics programmer, takes on the lead again and is in charge of driver control as well as making many autonomous to select from. Zorée switched courses from being programmer her previous years, to documenting the daily notebook and working on the binder. Helping her is Evan Lazaro, who does binder research and draws for the daily entries.',
  teamMembers: [
    {
      name: 'Carter Foley',
      job: 'Captain / Builder / Driver',
      desc: 'Carter is the team captain and main builder of 1320E. This is his third year in VEX, and he hopes to pass on his knowledge to others by being the leader of our majority freshman team. Carter’s charismatic personality and strong leadership skills will help him greatly in this venture',
      src: '/Images/Teams/1320E/Carter.jpg'
    },
    {
      name: 'William Thomas',
      job: 'Builder',
      desc: 'Will is a builder for 1320E and this is his third year in VEX. Although he was previously a driver, he hopes to expand his skills this year by transitioning to the role of builder. His experience as a driver will help him to understand how to efficiently design a robot that is intuitive to drive',
      src: '/Images/Teams/1320E/William.jpg'
    },
    {
      name: 'Nigel Hoffman',
      job: 'Programmer',
      desc: 'Nigel is the programmer for 1320E. This is his second year in VEX, and he continues to learn a lot about programming. Nigel is the youngest established programmer in Tucker VEX, so he will be the one to carry on the legacy of programming at Tucker.',
      src: '/Images/Teams/1320E/Nigel.jpg'
    },
    {
      name: 'Zorée Litzenburg',
      job: 'Notebook Manager / Binder Manager',
      desc: 'Zorée is the head notebook and binder manager. This is her third year participating in VEX. In previous year she was a programmer, but this year she decided to put her experience with VEX towards creating high quality documentation for 1320E. She uses her excellent photography skills to make 1320E’s binder stand out.',
      src: '/Images/Teams/1320E/Zoree.jpg'
    },
    {
      name: 'Evan Lazaro',
      job: 'Notebook Manager / Binder Manager',
      desc: 'Evan works to help manage both the binder and the engineering notebook for 1320E. This is his first year in VEX, but he has quickly become skilled recording and showing infomrmation at the team. He shows great potential to become one of Tucker VEX’s best notebook/binder managers.',
      src: '/Images/Teams/1320E/Evan.jpg'
    },
    {
      name: 'Adam Shavkin',
      job: 'Member-in-training',
      desc: 'Adam works with all the members of 1320E to learn, but is primarily a builder. He assists Carter and Will, both helping create a higher quality robot and learning a lot along the way. Adam is very diligent and is always looking for a way to help. Adam shows great potential to become a skilled member of Tucker VEX.',
      src: '/Images/Teams/1320E/Adam.jpg'
    }
  ]
}

class Team1320E extends Component {
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

export default Team1320E
