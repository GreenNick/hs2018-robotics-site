import React from 'react'
import { array, string, number } from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import Navigation from '../../Navigation/Navigation'
import styles from './TeamTemplate.module.css'

const headerStyle = {
  height: 550,
  backgroundImage: 'url(/Images/TeamImages/1320D.JPG)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  boxShadow: '#757575 1px 1px 2px',
  gridColumn: '1 / 4'
}

const TeamTemplate = props => {
  const teamMemberArray = props.teamMembers
    .map((member, i) => {
      return (
        <div key={i} className={styles.teamContainer}>
          <img
            src={member.src}
            alt='' />
          <h3>{member.name}</h3>
          <h5>{member.job}</h5>
          <p>{member.desc}</p>
        </div>
      )
    })

  return (
    <main>
      <header style={{ ...headerStyle, backgroundImage: `url(${props.teamImage})` }}>
        <h1 className={styles.teamNumber}>{props.teamNumber}</h1>
      </header>
      <div className='wrapper'>
        <section className={styles.section}>
          <img src={props.robotImage} alt='' />
          <div>
            <h2>Overview</h2>
            <p>{props.overviewDesc}</p>
          </div>
        </section>
        <section className={styles.members}>
          <h2>Team Members</h2>
          {teamMemberArray}
        </section>
        <section className={styles.section}>
          <div className={styles.stats}>
            <h2>Statistics</h2>
            <p>
              Driver Skills Rank: {
                props.driveSkillRank === 0
                  ? 'N/A'
                  : props.driveSkillRank
              } <br />
              Programming Skills Rank: {
                props.programSkillRank === 0
                  ? 'N/A'
                  : props.programSkillRank
              } <br />
              Robot Skills Rank: {
                props.robotSkillRank === 0
                  ? 'N/A'
                  : props.robotSkillRank
              } <br />
            </p>
            <p>
              State Appearances: {
                props.stateQual === 0
                  ? 'N/A'
                  : props.stateQual
              } <br />
              Worlds Appearances: {
                props.worldQual === 0
                  ? 'N/A'
                  : props.worldQual
              } <br />
            </p>
            <p>
              Total Awards: {
                props.awardNum === 0
                  ? 'N/A'
                  : props.awardNum
              } <br />
            </p>
          </div>
          <div className={styles.graph}>
            <Doughnut
              height={175}
              data={{
                labels: ['Wins', 'Losses', 'Ties'],
                datasets: [{
                  label: 'Win/Loss Ratio',
                  data: [props.wins, props.losses, props.ties],
                  backgroundColor: [
                    '#00BCD4',
                    '#8BC34A',
                    '#FF9800'
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white'
                  ],
                  borderWidth: 2
                }]
              }}
              options={{
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 16,
                    fontSize: 16
                  },
                  title: {
                    display: true,
                    text: 'Win/Loss Ratio',
                    position: 'bottom'
                  }
                }
              }} />
          </div>
        </section>
      </div>
      <Navigation dark={true} />
    </main>
  )
}

TeamTemplate.propTypes = {
  teamMembers: array,
  teamNumber: string,
  robotImage: string,
  teamImage: string,
  overviewDesc: string,
  driveSkillRank: number,
  programSkillRank: number,
  robotSkillRank: number,
  stateQual: number,
  worldQual: number,
  awardNum: number,
  wins: number,
  losses: number,
  ties: number
}

export default TeamTemplate
