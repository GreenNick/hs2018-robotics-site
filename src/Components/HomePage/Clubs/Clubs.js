import React from 'react'
import { number } from 'prop-types'
import BasicSection from '../../BasicSection/BasicSection'

const sectionContent = [
  { heading: 'What is VEX?',
    paragraph: 'Vex is an global robotics competition owned and hosted by Innovation First International, Inc. It is the largest robotics competition in the world with thousands of competing teams. Every year, a new game is developed by Vex and it is your job to design and build a robot to solve these unique problems in order to win. Vex is highly competitive and it is expected of you to put in a significant amount of time and effort. It is an incredible amount of fun and it is very satisfying to see all your hard work come to fruition. If you are willing to take on the heavy responsibility, Vex Robotics is a very rewarding experience.' },
  { heading: 'What is TSA?',
    paragraph: 'TSA is a national organization devoted to promoting and developing STEM skills among students. TSA hosts a wide variety of competitions relating to a range of subjects. TSA aims to teach leadership to students who are growing up in an increasingly connected and technical society. In TSA, you can participate in events such as Software Development, Dragster Racing and Debate. There are several conferances held every year where these events are hosted. TSA is less specialized than Vex offering a greater number of smaller competitions to choose from. By joining TSA, you will be able to take part in fun events and learn about technology along the way.' },
  { heading: 'What is STEM?',
    paragraph: 'The Tucker STEM Program was established four years ago by our teacher Ms. Todd. In that time we have done impressive work in our local community and helped to better incorporate STEM subjects into our daily curriculum. We have worked extensively at our local lake, monitoring the ecosystem and trying to control volatile algal blooms. We have created a pollinator garden near the lake and we are constructing a greenhouse at our school. In the STEM program, we have a focus on hands-on and problem based learning projects to teach. We are currently in the process of trying to get our program certified which we hope to achieve soon.' }
]

const Clubs = props => {
  return (
    <BasicSection
      heading={sectionContent[props.pageId].heading}
      paragraph={sectionContent[props.pageId].paragraph} />
  )
}

Clubs.propTypes = {
  pageId: number
}

export default Clubs
