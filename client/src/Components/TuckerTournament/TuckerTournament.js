import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './TuckerTournament.module.css'
import Footer from '../Footer/Footer'

const TuckerTournament = () => {
  return (
    <main>
      <h1 className='headerText'>Tucker Tournament</h1>
      <div className='wrapper'>
        <section>
          <div>
            <h2>Setup</h2>
            <p>When hosting a tournament, there is a lot that is involved. For the tucker tournament, we took the day before and the morning of to set up. This involved setting up pits for the teams, wiring projectors, assembling fields, and numerous other small jobs. As this was a Dekalb County tournament, we got a lot of help from Dekalb VEX organizers. Additionally, we used Dekalb County fields for the tournament. One of the most difficult parts of setting up was wiring and power. Making sure everything was close enough to an outlet was very difficult, especially as we didn'[t want to overload any outlets. Additionally, Setting up field controllers and tournamenet manager took a lot of troubleshooing. However, in the end, we managed to get everything set up on time and ready to go by the start of the tournament. </p>
          </div>
          <img src='/Images/TuckerTournament/Setup.jpg' alt='' />
        </section>
        <section className={styles.clubContainer}>
          <h2>Clubs Involved</h2>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/TSA.jpg' alt='' />
            <div>
              <h3>Technology Student Association</h3>
              <p>At Tucker High School, our VEX Robotics program and our TSA chapter are closely interrelated. Therefore, TSA always helps to set up for the yearly tucker tournament. The TSA members are greatly appreciated when setting up, as many of them have technological expertise that can be helpful when setting up projectors or tournament management hardware. Additionally, their critical thinking skills are very helpful when confronting the many problems that come with setting up a tournament, such as efficient use of space or difficulty with wiring.</p>
            </div>
          </div>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/NHS.jpg' alt='' />
            <div>
              <h3>National Honor Society</h3>
              <p>The four pillars of Nation Honors Society are scholarship, service, leadership, and character. Tucker High School's National Honors Society chapter exeplified these characteristics by helping set up for the Tournament, Additionally, NHS provided many volunteers for the day of the tournament. NHS volunteers did things such as queing, helping tournament organizers, and running the hospitality room. These volunteers were invaluable in creating a smooth tournament. </p>
            </div>
          </div>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/Beta.jpg' alt='' />
            <div>
              <h3>Beta Club</h3>
              <p> Beta Club's mission is to promote the ideals of academic achievement, character, leadership and service among elementary and secondary school students. Beta club members help to set up the tournament along with NHS mebers, as well as volunteering during the day of the tournament. Beta Club volunteers worked as field reseters, scorers, and announcers. Without Beta club, the tournament would have been stretched thin and not run nearly as well.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default TuckerTournament
