import React from 'react'
import styles from './Calendar.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const events = [
  {
    name: 'South Forsyth Tournament',
    date: '10/6/2018',
    venue: 'South Forsyth High School',
    address1: '585 Peachtree Parkway',
    address2: 'Cumming, Georgia 30041',
    teams: '1320A, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/SouthForsyth.jpg'
  },
  {
    name: 'DeKalb League I',
    date: '10/16/2018',
    venue: 'Dunwoody High School',
    address1: '5035 Vermack Road',
    address2: 'Dunwoody, Georgia 30338',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Dunwoody.jpg'
  },
  {
    name: 'Tucker Tournament',
    date: '10/20/2018',
    venue: 'Tucker High School',
    address1: '5036 Lavista Road',
    address2: 'Tucker, Georgia 30084',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Tucker.jpg'
  },
  {
    name: 'Cross Keys Tournament',
    date: '10/27/2018',
    venue: 'Cross Keys High School',
    address1: '1626 North Druid Hills Road Northeast',
    address2: 'Atlanta, Georgia 30319',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/CrossKeys.jpg'
  },
  {
    name: 'TSA Fall Leadership Conference',
    date: '11/9/2018 - 11/11/2018',
    venue: 'Jekyll Island Convention Center',
    address1: '75 Beachview Drive North',
    address2: 'Jekyll Island, Georgia 31527',
    teams: '1320A, 1320C',
    src: '/Images/Calendar/GeorgiaTSA.jpg'
  },
  {
    name: 'Arabia Mountain Tournament',
    date: '11/17/2018',
    address1: '6610 Browns Mill Road',
    address2: 'Lithonia, Georgia 30038',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/ArabiaMountain.jpg'
  },
  {
    name: 'DeKalb League II',
    date: '11/27/2018',
    venue: 'Dunwoody High School',
    address1: '5035 Vermack Road',
    address2: 'Dunwoody, Georgia 30338',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Dunwoody.jpg'
  },
  {
    name: 'Alcovy Tournament',
    date: '12/1/2018',
    venue: 'Alcovy High School',
    address1: '14567 Georgia 36',
    address2: 'Covington, Georgia 30014',
    teams: '1320A, 1320B, 1320C',
    src: '/Images/Calendar/Alcovy.jpg'
  },
  {
    name: 'Towers Tournament',
    date: '12/8/2018',
    venue: 'Towers High School',
    address1: '3919 Brookcrest Circle',
    address2: 'Decatur, Georgia 30032',
    teams: '1320A, 1320E',
    src: '/Images/Calendar/Towers.jpg'
  },
  {
    name: 'North Forsyth Tournament',
    date: '12/8/2018',
    venue: 'North Forsyth High School',
    address1: '3635 Coal Mountain Drive',
    address2: 'Cumming, Georgia 30028',
    teams: '1320B, 1320C, 1320D',
    src: '/Images/Calendar/NorthForsyth.jpg'
  },
  {
    name: 'Clarkston Tournament',
    date: '12/15/2018',
    venue: 'Clarkston High School',
    address1: '618 North Indian creek',
    address2: 'Clarkston, Georgia 30021',
    teams: '1320E',
    src: '/Images/Calendar/Clarkston.jpg'
  },
  {
    name: 'Berkmar Tournament',
    date: '12/15/2018',
    venue: 'Berkmar High School',
    address1: '405 Pleasant Hill Road',
    address2: 'Lilburn, Georgia 30047',
    teams: '1320A, 1320B, 1320C, 1320D',
    src: '/Images/Calendar/Berkmar.jpg'
  },
  {
    name: 'Savannah Tournament',
    date: '1/5/2019',
    venue: 'Savannah Mall',
    address1: '14045 Abercorn Street',
    address2: 'Savannah, Georgia 31419',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/GeorgiaTech.jpg'
  },
  {
    name: 'DeKalb League III',
    date: '1/8/2019',
    venue: 'Dunwoody High School',
    address1: '5035 Vermack Road',
    address2: 'Dunwoody, Georgia 30338',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Dunwoody.jpg'
  },
  {
    name: 'Chamblee Tournament',
    date: '1/12/2019',
    venue: 'Chamblee Charter High School',
    address1: '3688 Chamblee Dunwoody Road',
    address2: 'Chamblee, Georgia 30341',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Chamblee.jpg'
  },
  {
    name: 'DeKalb League IV',
    date: '1/15/2019',
    venue: 'Dunwoody High School',
    address1: '5035 Vermack Road',
    address2: 'Dunwoody, Georgia 30338',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Dunwoody.jpg'
  },
  {
    name: 'DeKalb League Championship',
    date: '1/19/2019',
    venue: 'Dunwoody High School',
    address1: '5035 Vermack Road',
    address2: 'Dunwoody, Georgia 30338',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Dunwoody.jpg'
  },
  {
    name: 'Signature Event: Night at the Museum',
    date: '1/25/2019 - 1/26/2019',
    venue: 'Udvar-Hazy Air and Space Museum',
    address1: '14390 Air and Space Museum Pkwy',
    address2: 'Chantilly, Virginia 20151',
    teams: 'TBD',
    src: '/Images/Calendar/Virginia.jpg'
  },
  {
    name: 'Berkmar Tournament',
    date: '2/2/2019',
    venue: 'Berkmar High School',
    address1: '405 Pleasant Hill Road',
    address2: 'Lilburn, Georgia 30047',
    teams: '1320A, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Berkmar.jpg'
  },
  {
    name: 'Signature Event: University Of South Florida',
    date: '2/04/2019',
    venue: 'University of South Florida',
    address1: '4202 East Fowler Avenue',
    address2: 'Tampa, Florida 33620',
    teams: '1320C',
    src: '/Images/Calendar/Florida.jpg'
  },
  {
    name: 'VEX State - Georgia',
    date: '2/8/2019 - 2/9/2019',
    venue: 'Ola High School',
    address1: '357 North Ola Road',
    address2: 'McDonough, Georgia 30252',
    teams: '1320A, 1320B, 1320C, 1320D, 1320E',
    src: '/Images/Calendar/Ola.jpg'
  },
  {
    name: 'TSA State - Georgia',
    date: '3/14/2019 - 3/16/2019',
    venue: 'The Classic Center',
    address1: '300 N Thomas Street',
    address2: 'Athens, GA 30601',
    teams: '1320A, 1320C',
    src: '/Images/Calendar/GeorgiaTSA.jpg'
  },
  {
    name: 'VEX Worlds',
    date: '4/24/2019 - 4/27/2019',
    venue: 'Kentucky Exposition Center',
    address1: '937 Phillips Lane',
    address2: 'Louisville, Kentucky 40209',
    teams: 'TBD',
    src: '/Images/Calendar/Worlds.jpg'
  },
  {
    name: 'TSA Nationals',
    date: '4/24/2019 - 4/27/2019',
    venue: 'Gaylord National Resort',
    address1: '201 Waterfront Street',
    address2: 'National Harbor, Maryland 20745',
    teams: 'TBD',
    src: '/Images/Calendar/TSA.jpg'
  }
]

const Calendar = () => {
  const calendarArray = events
    .map((event, i) => {
      return (
        <div
          className={styles.eventContainer}
          key={i}>
          <article className={`${styles.article} animate`}>
            <h3>{event.name}</h3>
            <p style={{ color: '#353535' }}>{event.date}</p>
            <p>
              {event.venue} <br />
              {event.address1} <br />
              {event.address2}
            </p>
            <p>Participating teams: {event.teams}</p>
          </article>
          <img className='animate' src={event.src} alt='' />
        </div>
      )
    })

  return (
    <main>
      <h1 className='headerText'>Calendar</h1>
      <div className='wrapper'>
        {calendarArray}
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default Calendar
