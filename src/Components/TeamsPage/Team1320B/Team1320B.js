import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320B',
  overviewDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt minima corrupti cupiditate doloremque quae, consectetur eum! Nisi quidem perspiciatis eaque, dolor explicabo ullam natus sed ratione facilis dolores architecto? Neque repellendus debitis distinctio nulla nobis totam sint quam amet rerum cupiditate molestias at blanditiis sapiente, labore illum quisquam sunt minus nostrum aperiam iste ea voluptatibus perferendis. Autem, nostrum. Ipsum?',
  teamMembers: [
    {
      name: 'Josh Perlmutter',
      job: 'Captain / Builder / Driver / Programmer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Shakira Hussein',
      job: 'Notebook Manager / Binder Manager',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Andy Todd',
      job: 'Builder',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    }
  ]
}

class Team1320B extends Component {
  render () {
    return (
      <TeamTemplate
        teamNumber={data.teamNumber}
        overviewDesc={data.overviewDesc}
        teamMembers={data.teamMembers} />
    )
  }
}

export default Team1320B
