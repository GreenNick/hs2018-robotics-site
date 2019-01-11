import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320D',
  teamImage: '/Images/Teams/1320D/Team.jpg',
  robotImage: '/Images/Teams/1320D/Robot.jpg',
  overviewDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt minima corrupti cupiditate doloremque quae, consectetur eum! Nisi quidem perspiciatis eaque, dolor explicabo ullam natus sed ratione facilis dolores architecto? Neque repellendus debitis distinctio nulla nobis totam sint quam amet rerum cupiditate molestias at blanditiis sapiente, labore illum quisquam sunt minus nostrum aperiam iste ea voluptatibus perferendis. Autem, nostrum. Ipsum?',
  teamMembers: [
    {
      name: 'Grant Duffee',
      job: 'Co-Captain / Builder / Driver',
      desc: 'Robotics has always been a big part of Grant’s life. When he got accepted into STEM, he was opened to a new world of possibilities. He loves everything about it, even the long nights and the early mornings. Grant also drives for our team. Being a builder and a driver gives him an edge in the competition because no one knows our robot better than he does. Therefore, he can control it better, and when something goes wrong with it, he can usually find the problem rapidly. Being the driver also gives him a sense of pride. When he looks at our robot succeeding out on the field, he sees all of the hours of hard work put into it. While other’s might just see a metal box, it means more than that for this team.',
      src: '/Images/Teams/1320D/Grant.jpg'
    },
    {
      name: 'Justin Wade',
      job: 'Co-Captain / Programmer',
      desc: 'This is Justin’s Fourth year in VEX. It has been a long and hard journey to get where he is today. However, he wouldn’t trade it for anything in the world as it has taught him important life skills like leadership and cooperation. He’s seen people come and go through the years, and he’s built lifelong friends at Tucker VEX.',
      src: '/Images/Teams/1320D/Justin.jpg'
    },
    {
      name: 'Nicholas Bowers',
      job: 'Notebook Manager',
      desc: 'This is going to be Nick’s fourth and last year as a participating member of VEX. Nick says he has enjoyed every minute of VEX and is greatly going to miss his team 1320D and the environment that VEX upheld at his school when he graduates. Nick is excited for this upcoming season and is willing to make the most of it through hard work and dedication. He is a very devoted member of VEX and motivates his other team members to work equally as hard as him, so that his team will make it as far into the competition as possible this year. This is going to be Nick’s fourth year in VEX, and he has loved every minute of it. As he is a Senior, he’s upset to be leaving all of this behind when he graduates. Nick has been on the design team for 1320D since he started robotics freshman year. ',
      src: '/Images/Teams/1320D/Nicholas.jpg'
    },
    {
      name: 'Luma Younis',
      job: 'Binder Manager',
      desc: 'Making the choice to do VEX in high school was really easy for Luma. Due to her past experience in First Lego League, she already had very high hopes for VEX in High School. She knew what to expect. Luma kept her same job from FLL. She has always been a binder keeper, and always will be.',
      src: '/Images/Teams/1320D/Luma.jpg'
    },
    {
      name: 'Sanjeena Chowdhury',
      job: 'Binder Assistant',
      desc: 'Sanjeena, being the newest addition to the team, does not have much experience with VEX. However, she is determined to learn the ways of her fellow team members and hopes to provide for the team. She has some experience with programming software and in the coming years, she hopes to further her knowledge in the programming field of VEX and will be very beneficial to the design team. She wants to prove herself as a capable leader in VEX going into her Senior year. 1320D is taking an active role in her learning process. Sanjeena has been learning how to build from Grant and even a little programming from Justin and Nick. As for the design team, they have all been active in helping Sanjeena assimilate to the pace of VEX and the tournaments. ',
      src: '/Images/Teams/1320D/Sanjeena.jpg'
    },
    {
      name: 'Jonah Fields',
      job: 'Autodesk Designer',
      desc: 'Vex has given Jonah a home and allowed him to find friends unlike any other. He’s connected with students, staff and faculty who share his interests and urge him to succeed in, not only vex, but life as a whole. He feels more involved in his Tucker community and he’s proud to be representing it; Jonah has been building a strong reputation for his childhood town and he’s grown as an individual and has learned more about his aspirations and strengths.He’s gotten to work on multitasking, staying organized, generating ideas, and serving with others.He knows how to work with a team and has had to take advice from others. With every new relationship, he has gained emotional intelligence; his communication skills have grown tremendously as he has been communicating to others, well- known and otherwise.',
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

export default Team1320D
