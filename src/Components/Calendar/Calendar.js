import React from 'react'
import styles from './Calendar.module.css'
import Navigation from '../Navigation/Navigation'

const events = [
  {
    name: 'School Year Begins',
    date: '8/6/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'South Forsyth Tournament',
    date: '10/6/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'DeKalb League I',
    date: '10/16/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Tucker Tournament',
    date: '10/20/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Cross Keys Tournament',
    date: '10/27/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'TSA Fall Leadership Conference',
    date: '11/9/2018 - 11/11/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Arabia Mountain Tournament',
    date: '11/17/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'DeKalb League II',
    date: '11/27/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Alcovy Tournament',
    date: '12/1/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Towers Tournament',
    date: '12/8/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'North Forsyth Tournament',
    date: '12/8/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Clarkston Tournament',
    date: '12/15/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Berkmar Tournament',
    date: '12/15/2018',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Savannah Tournament',
    date: '1/5/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'DeKalb League III',
    date: '1/8/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'Chamblee Tournament',
    date: '1/12/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'DeKalb League IV',
    date: '1/15/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'DeKalb League Championship',
    date: '1/19/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'VEX State - Georgia',
    date: '2/8/2019 - 2/9/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'TSA State - Georgia',
    date: '3/14/2019 - 3/16/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  },
  {
    name: 'VEX Worlds',
    date: '4/24/2019 - 4/27/2019',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.',
    src: ''
  }
]

const Calendar = () => {
  const calendarArray = events
    .map((event, i) => {
      return (
        <div
          className={styles.eventContainer}
          key={i}>
          <article className={styles.article}>
            <h3>{event.name}</h3>
            <p style={{ color: '#353535' }}>{event.date}</p>
            <p>{event.desc}</p>
          </article>
          <img src={event.src} alt=''/>
        </div>
      )
    })

  return (
    <main>
      <h1 className='headerText'>Calendar</h1>
      <div className='wrapper'>
        { calendarArray }
      </div>
      <Navigation dark={true} />
    </main>
  )
}

export default Calendar
