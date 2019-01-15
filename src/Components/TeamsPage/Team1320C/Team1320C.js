import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320C',
  teamImage: '/Images/Teams/1320C/Team.jpg',
  robotImage: '/Images/Teams/1320C/Robot.JPG',
  overviewDesc: "1320C is the STEM senior team that has gone to Worlds for the past five years and hopes to go to the world this year as well. The team works well together and strives to push everyone's success forward and make the robotics program an institution of research. The team focuses on refining the design process and working through many prototypes and iterations in addition to working with international teams through our Blitz Alliance.",
  teamMembers: [
    {
      name: 'Mamadou Ly',
      job: 'Captain / Builder / Driver',
      desc: "Mamadou's wonderful building skills are matched by his passion and dedication to robotics and the program that he has worked to build up. He has spearheaded new records and has brought the success of the Tucker Robotigers to new heights. Mamadou is a STEM student and hopes to study biomedical engineering in college.",
      src: '/Images/Teams/1320C/Mamadou.jpg'

    },
    {
      name: 'Sam Torbert',
      job: 'Programmer',
      desc: 'Sam is a STEM senior and hopes to study aerospace engineering in the Fall. He is able to solve many problems through programming to allow the driver to focus on the game and is constantly re-iterating to create greater efficiency within the Robotics program.',
      src: '/Images/Teams/1320C/Sam.jpg'
    },
    {
      name: 'James Bunting',
      job: 'Notebook Manager',
      desc: 'James Bunting is the primary drafter, daily notebook manager, and CAD specialist. He hopes to study mechanical engineering at Georgia Tech and promotes community education in STEAM.',
      src: '/Images/Teams/1320C/James.jpg'
    },
    {
      name: 'Deborah Sodiya',
      job: 'Binder Manager',
      desc: 'Deborah Sodiya is a researcher and manager for professional documentation for 1320C. She is a determined and creative researcher who is always figuring out ways to benefit the design process. Deborah hopes study mechanical engineering after high school.',
      src: '/Images/Teams/1320C/Deborah.jpg'
    },
    {
      name: 'Kelly Vu',
      job: 'Binder Assistant',
      desc: 'Kelly Vu is a drafter and manager for the professional documentation for 1320C. Kelly is an expert on displaying detail and information. She has been a valuable member of the team when drafting the preliminary sketches for the robots for brainstorming. Kelly hopes to study biology at the University of Georgia.',
      src: '/Images/Teams/1320C/Kelly.jpg'
    },
    {
      name: 'Kenny Vu',
      job: 'Member-in-training',
      desc: 'Kenny is an amazing member who is training to carry on the legacy of 1320C. All the members of 1320C are teaching Kenny about their field. Once the seniors of the team leave, Kenny will be the only one left to teach others about the lessons learned. Kenny is a vital member to help in the robot pits and on the competition area.',
      src: '/Images/Teams/1320C/Kenny.jpg'
    }
  ]
}

class Team1320C extends Component {
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

export default Team1320C
