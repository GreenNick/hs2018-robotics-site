import React from 'react'
import styles from './Teachers.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Teachers = () => {
  return (
    <main>
      <h1 className='headerText'>Teachers</h1>
      <div className='wrapper'>
        <section>
          <img src='/Images/Teachers/Overview.jpg' alt='' />
          <div>
            <h2>Overview</h2>
            <p>For a VEX program to excel, it must not only have devoted members, but also good teachers and mentors to guide the students along their way. At Tucker High School, we have several amazing teachers who drive our program to success. These teachers help push us to do our best and correct us when we go wrong. Without passionate teachers willing to stay late on the night of a competition and help us just the right about, the Tucker High School Robotics program would not be where it is today.</p>
          </div>
        </section>
        <article className={styles.container}>
          <div className={`${styles.textContainer} animate`}>
            <h2>Mr. Hicks</h2>
            <h3>Engineering Teacher / Southwestern Oklahoma State University / 32 Years Teaching</h3>
            <p>Mr. Hicks is the driving force behind Tucker VEX and Tucker TSA. He has been the head advisor for both VEX and TSA for three years now. Much of our success as a program we owe to him. Mr. Hicks has a very unique teaching style. While he provides assistance when needed, he believes that education should be primarily self-guided. At the beginning of each year, Mr. Hick requires a design plan from each team. However, once these plans are approved, teams are on their own to build the robot and learn from their mistakes.</p>
          </div>
          <figure className='animate'>
            <img src='/Images/Teachers/Hicks.jpg' alt='' />
          </figure>
        </article>
        <article className={styles.container}>
          <figure className='animate'>
            <img src='/Images/Teachers/Todd.jpg' alt='' />
          </figure>
          <div className={`${styles.textContainer} animate`}>
            <h2>Ms. Todd</h2>
            <h3>Biology Teacher / Auburn University / 10 Years Teaching</h3>
            <p>Ms. Todd is the founder and coordinator for the Tucker High School STEM Program. She is very passionate about helping students to excel in STEM based fields and does whatever she can to help students. The success of the STEM program at Tucker High School is largely due to Ms. Todd’s passion for helping students. Ms. Todd is also a biology teacher who primarily teaches freshman students. She helps acclimate new students to high school, and introduces them to her passion for biology.</p>
          </div>
        </article>
        <article className={styles.container}>
          <div className={`${styles.textContainer} animate`}>
            <h2>Ms. Williams</h2>
            <h3>Engineering Teacher / Southern College of Technology / 4 Years Teaching</h3>
            <p>Ms. Williams is an engineering teacher and an advisor for the Tucker High School VEX program. Where Mr. Hicks collaborates directly with our school’s VEX teams, Ms. Williams deals with finances and logistics. A team can be the best team in the world, but without a hotel to stay in during the World Championships, it won’t matter. Ms. Williams helps us to sign up for competitions and figure out hotels. Without her, we would be lost in the world of finances.</p>
          </div>
          <figure className='animate'>
            <img src='/Images/Teachers/Williams.jpg' alt='' />
          </figure>
        </article>
      </div>
      <Navigation dark={true} />
      <Footer />
    </main>
  )
}

export default Teachers
