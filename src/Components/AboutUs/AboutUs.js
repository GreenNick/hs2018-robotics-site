import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <main>
      <h1 className={styles.header}>About Us</h1>
      <div className='wrapper'>
        <section className={styles.section}>
          <img src='#' alt='' />
          <div>
            <h2>Our School</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
            Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
            Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
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
        <section className={styles.section}>
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
