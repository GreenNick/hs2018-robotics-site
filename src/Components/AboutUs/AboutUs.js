import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <main>
      <h1 className='headerText'>About Us</h1>
      <div className='wrapper'>
        <section>
          <img src='#' alt='' />
          <div>
            <h2>Our School</h2>
            <p>Tucker High is a public high school in DeKalb County, Georgia. The school was first established in 1918 and has since grown to 1,800 enrolled students. The student body is very diverse with a large immigrant population. We have a variety of advanced programs such as IB and STEM. Our school maintains a balance of academics, athletics, and extracurricular activities. We have both Vex and TSA after school clubs. We greatly value STEM subjects and always put in maximum effort when working on our projects.</p>
            <p>The different STEM groups in our school have formed a community of their own. Many of us have been in the same classes together for years now and we have developed long-lasting friendships. We have grown attached to the programs we participate in due to the hours we have spent working together late into the night.</p>
          </div>
        </section>
        <section className={styles.values}>
          <h2>Our Values</h2>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/DetIcon.svg' alt='Hammer, symbolizing determination' />
            </div>
            <h3>Determination</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi minima sequi similique reprehenderit quibusdam modi aspernatur officiis inventore, deleniti unde excepturi, est dolorem? Aliquid saepe eius obcaecati fugit dolorum?</p>
          </div>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/CopIcon.svg' alt='Shaking hands, symbolizing solidarity' />
            </div>
            <h3>Solidarity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi minima sequi similique reprehenderit quibusdam modi aspernatur officiis inventore, deleniti unde excepturi, est dolorem? Aliquid saepe eius obcaecati fugit dolorum?</p>
          </div>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/IntIcon.svg' alt='Fountain pen, symbolizing integrity' />
            </div>
            <h3>Integrity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi minima sequi similique reprehenderit quibusdam modi aspernatur officiis inventore, deleniti unde excepturi, est dolorem? Aliquid saepe eius obcaecati fugit dolorum?</p>
          </div>
        </section>
        <section>
          <div>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
            Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
            Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
          </div>
          <img src='#' alt='' />
        </section>
      </div>
      <Navigation dark={true} />
    </main>
  )
}

export default AboutUs
