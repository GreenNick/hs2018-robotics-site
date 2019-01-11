import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320B',
  teamImage: '/Images/Teams/1320B/Team.jpg',
  robotImage: '/Images/Teams/1320B/Robot.jpg',
  overviewDesc: "1320B is a three person team that consist of juniors, who are involved in Tucker High School's STEM program. we divide the jobs among three people according to their skill sets and interests, in order to be a fully functioning and efficient team. Due to our small size we often help each other out with other tasks beside our own.Not only does this allow us to produce quality work but it also gives us an opportunity to be familiar with many different skills that could be useful for future purposes. Despite this we have a few disadvantages of being spread to thin and not getting enough work done. In order to solve this problem, we set deadlines before events, allowing us to get as much work possible before the competitions. If we meet these deadlines, we have enough time to complete all our work without rushing.",
  teamMembers: [
    {
      name: 'Josh Perlmutter',
      job: 'Captain / Builder / Driver / Programmer',
      desc: "Josh's dedication and focus have helped drive the team to be the best it can be. This season, he wants to develop his leadership skills, improve his understanding of mechanics, and learn new programming techniques. Josh is fascinated with all things mechanical. From cars to robots to architecture, he enjoys understanding how things work. He aspires to attend a top technical school such as Georgia Tech or MIT to study mechanical engineering and sees VEX as a great opportunity to explore his passion and expand his knowledge. When he isn’t working on robotics, Josh also enjoys a variety of other activities. He plays saxophone for the school cover band, and plays bass in a rock band with his friends. He plays Ultimate Frisbee for the school club, and enjoys cooking and reading.",
      src: '/Images/Teams/1320B/Josh.jpg'
    },
    {
      name: 'Shakira Hussien',
      job: 'Notebook Manager / Binder Manager',
      desc: "Shakira's organization skills and dedication make her ideal for the job of notebook manager. This is her third year in VEX. For her freshman year, she was a builder, and these past two years she has switched over to notebook manager and binder manager. Shakira wants to become a surgeon after medical school. She believes that VEX will help her in accomplishing her future goals. With her dream school being Emory, it’s important to be prepared for difficult tasks which VEX already challenges her with. In her free time, one of her main hobbies is painting. She also plays soccer for the school team and enjoys getting practice in whenever she can. She also enjoys trying new foods and catching up on sleep.",
      src: '/Images/Teams/1320B/Shakira.jpg'
    },
    {
      name: 'Andy Todd',
      job: 'Builder',
      desc: 'Andy is going on his third year in VEX and uses that experience to his advantage. In the Engineering lab, you will oftwn find Andy enjoying one of his favorite pastimes, woodworking. To Andy it is important to not only succeed but excel in not only his hobbies, but in VEX as well. Andy’s knowledge of woodworking aids building due to his competency on a wide array of tooling and material handling topics. Often if a piece of metal needs to be cut, Andy will volunteer as he is very familiar with the process.',
      src: '/Images/Teams/1320B/Andy.jpg'
    }
  ]
}

class Team1320B extends Component {
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

export default Team1320B
