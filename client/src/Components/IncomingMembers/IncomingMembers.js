import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const IncomingMembers = () => {
  return (
    <main>
      <h1 className='headerText'>Incoming Members</h1>
      <div className='wrapper'>
        <section>
          <img src='/Images/IncomingMembers/Training.jpg' alt='' />
          <div>
            <h2>Training</h2>
            <p>To continue success, after experienced members have graduated and moved on, it is vital for our VEX program to train new members and share our knowledge with them. We accomplish this through many ways, as people learn through different methods. One way we train our members is by holding seminars. These seminars have been mostly about coding and fundamentals of building. Through these we hope to teach our members about the equipment they are working with and get familiar with the motors and metal. We also want to teach them basic concepts such as gear ratios and how to calculate them. For coding we hope to teach them the syntax of the software they are using. Another way we train the members is by giving them experience. In the past we’ve let all the new members join one team together and compete through a season. We believe the best way to learn is by either failure or success. Allowing the new members to go through their own experiences. This also helps the members establish a role for themselves and figure out how they fit in with the team. Training unexperienced members helps them build a connection with STEM subjects and helps our program continue through the years.</p>
          </div>
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default IncomingMembers
