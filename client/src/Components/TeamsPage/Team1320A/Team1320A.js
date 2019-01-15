import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320A',
  teamImage: '/Images/Teams/1320A/Team.jpg',
  robotImage: '/Images/Teams/1320A/Robot.jpg',
  overviewDesc: '1320A is Tucker High School’s VEX Robotics team that consists of six members. Five of us are juniors in the STEM program and one of us is a freshman in the IB program. The inclusion of a freshman on our mostly-junior team helps the team get more needed work done while also providing the freshman with necessary experience so she can succeed in later years. Everyone is able to work independently as well as with the rest of the group, allowing us to accomplish the optimum amount of work. As a result of our team’s chemistry, we have excellent communication among the team. Having six members on the team ensures that progress is always being made in some way. However, an issue that our team has deals with time management. We can get off-task and not complete the work that we should have completed. For this reason, our team keeps a Gantt chart to help us with our time management. Even with our problems, our team works efficiently, and we are able to accomplish almost all of our goals.',
  teamMembers: [
    {
      name: 'Tanjid Mitul',
      job: 'Captain / Builder / Programmer / Driver',
      desc: 'Tanjid is a natural leader who helps organize the team. He is very dedicated and is almost always working on VEX, even during his spare time.',
      src: '/Images/Teams/1320A/Tanjid.jpg'
    },
    {
      name: 'Chris Maclin',
      job: 'Builder',
      desc: 'Chris is extremely hard-working and dedicated. He frequently makes necessary adjustments to the robot and inputs innovative design ideas to further improve the performance of the robot.',
      src: '/Images/Teams/1320A/Chris.jpg'
    },
    {
      name: 'Akbar Khan',
      job: 'Notebook Manager',
      desc: 'Akbar has to document our progress made throughout the year in the journal. For him to accomplish this, it is crucial for him to be attentive, flexible, and neat—which he is. He is a diligent worker who is always dependable.',
      src: '/Images/Teams/1320A/Akbar.jpg'
    },
    {
      name: 'Eric Shavkin',
      job: 'Binder Manager / Programmer',
      desc: 'Eric has great writing and organization skills, making him very suited to be the binder keeper. In addition, Eric has programming skills and helps coordinate the autonomous programs.',
      src: '/Images/Teams/1320A/Eric.jpg'
    },
    {
      name: 'Kellie Monzon-Cruz',
      job: 'Binder Assistant',
      desc: 'Kellie pays a lot of attention to detail. With her keen sense of observation, she contributes a lot to the team. In addition, she has amazing time management skills, and acts as the task manager to keep our team on schedule.',
      src: '/Images/Teams/1320A/Kellie.jpg'
    },
    {
      name: 'Nuhamin Chernet',
      job: 'Member-in-training',
      desc: 'Nuhamin has an amazing work ethic. She is very organized and always completes her tasks on time. Nuhamin also has great critical thinking skills, which she has to use when programming.',
      src: '/Images/Teams/1320A/Nuhamin.jpg'
    }
  ]
}

class Team1320A extends Component {
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

  componentDidMount () {
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

  render () {
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

export default Team1320A
