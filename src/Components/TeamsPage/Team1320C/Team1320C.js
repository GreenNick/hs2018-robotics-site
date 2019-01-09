import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320C',
  overviewDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt minima corrupti cupiditate doloremque quae, consectetur eum! Nisi quidem perspiciatis eaque, dolor explicabo ullam natus sed ratione facilis dolores architecto? Neque repellendus debitis distinctio nulla nobis totam sint quam amet rerum cupiditate molestias at blanditiis sapiente, labore illum quisquam sunt minus nostrum aperiam iste ea voluptatibus perferendis. Autem, nostrum. Ipsum?',
  teamMembers: [
    {
      name: 'Mamadou Ly',
      job: 'Captain / Builder / Driver',
      //desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
      desc: "Mamadou Ly is the Captian, Driver and Builder of 1320C. His wonderful building skills are matched by his passion and dedication to robotics and the program that he has worked so hard to build up from when he was in middle school. As the leader of one of Dekalb's strongest teams, he has spearheaded new records and has brought the success of the Tucker RoboTigers to new heights. Mamadou is a STEM student and hopes to study biomedical engineering in college to help better the world through technology and medicine. If his passion for changing the world is anything like his dedication to robotics, the world will be in safe hands.",
      src: '/Images/Teams/1320B/Mamadou.jpg'

    },
    {
      name: 'Sam Torbert',
      job: 'Programmer',
      desc: 'Sam is the programmer for 1320C. He is one of the most innovative and spectacular members of the Tucker Robotics Program. Sam is a STEM senior and hopes to study aerospace engineering in the Fall. He is able to solve many problems through programming to allow the driver to focus on the game and is constantly re-iterating to create greater efficiency within the Robotics program.',
      src: '/Images/Teams/1320B/Sam.jpg'
    },
    {
      name: 'James Bunting',
      job: 'Notebook Manager',
      desc: 'James Bunting is the primary drafter, daily notebook manager, and CAD specialist. He hopes to study mechanical engineering at Georgia Tech and promotes community education in STEAM.',
      src: '/Images/Teams/1320B/James.jpg'
    },
    {
      name: 'Deborah Sodiya',
      job: 'Binder Manager',
      desc: 'Deborah Sodiya is a researcher, statistician, and manager for professional documentation for 1320C. Deborah is a determined and creative researcher who is constantly figuring out ways to benefit the process and the larger student body and community. Deborah will study mechanical engineering and build a new world for the future to remember.',
      src: '/Images/Teams/1320C/Deborah.jpg'
    },
    {
      name: 'Kelly Vu',
      job: 'Binder Assistant',
      desc: 'Kelly Vu is a drafter and manager for the professional documentation for 1320C. Kelly is an excellent designer and is an expert on displaying valuable detail and information with little effort. She has been a valuable member of the team when drafting the preliminary sketches for the robots for brainstorming and communicating production plans to our advisor. Kelly hopes to study biology at the University of Georgia, where she will begin her large positive impact.',
      src: '/Images/Teams/1320C/Kelly.jpg'
    },
    {
      name: 'Kenny Vu',
      job: 'Member-in-training',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
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
