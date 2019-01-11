import React from 'react'
import { string, number, func } from 'prop-types'
import { Bar, Pie } from 'react-chartjs-2'
import Navigation from '../../Navigation/Navigation'
import styles from './AwardsTemplate.module.css'

const AwardsTemplate = props => {
  return (
    <main>
      <h1 className='headerText'>Awards</h1>
      <div className='wrapper'>
        <section>
          <div className={styles.textContainer}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <div className={styles.container}>
              <button className={styles.button} style={{ transform: 'rotate(180deg)' }} onClick={props.onPrevClick}>
                <img src='/Images/svg/Arrow.svg' alt='next' />
              </button>
              <button className={styles.button} onClick={props.onNextClick}>
                <img src='/Images/svg/Arrow.svg' alt='next' />
              </button>
            </div>
          </div>
          <img key={props.title} id='svg' className={styles.animate} src={props.src} alt={props.alt} />
        </section>
        <div className={styles.graphs}>
          <div className={styles.year}>
            <h3 className={styles.heading}>Awards Won by Year</h3>
            <Bar
              data={{
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                datasets: [{
                  data: [props.year10, props.year11, props.year12, props.year13, props.year14, props.year15, props.year16, props.year17, props.year18],
                  backgroundColor: '#00BCD4',
                  borderColor: 'white',
                  borderWidth: 2
                }]
              }}
              options={{
                legend: {
                  position: 'none'
                }
              }} />
          </div>
          <div className={styles.team}>
            <h3 className={styles.heading}>Team Breakdown</h3>
            <Pie
              data={{
                labels: ['1320A', '1320B', '1320C', '1320D', '1320E'],
                datasets: [{
                  data: [props.teamA, props.teamB, props.teamC, props.teamD, props.teamE],
                  backgroundColor: [
                    '#00BCD4',
                    '#8BC34A',
                    '#f44336',
                    '#FFEB3B',
                    '#FF9800'
                  ],
                  borderColor: 'white',
                  borderWidth: 2
                }]
              }}
              options={{
                legend: {
                  position: 'left',
                  labels: {
                    boxWidth: 16,
                    fontSize: 16
                  }
                }
              }} />
          </div>
        </div>
      </div>
      <Navigation dark={true} />
    </main>
  )
}

AwardsTemplate.propTypes = {
  onNextClick: func,
  onPrevClick: func,
  title: string,
  desc: string,
  src: string,
  alt: string,
  teamA: number,
  teamB: number,
  teamC: number,
  teamD: number,
  teamE: number,
  year10: number,
  year11: number,
  year12: number,
  year13: number,
  year14: number,
  year15: number,
  year16: number,
  year17: number,
  year18: number
}

AwardsTemplate.defaultProps = {
  teamA: 0,
  teamB: 0,
  teamC: 0,
  teamD: 0,
  teamE: 0
}

export default AwardsTemplate
