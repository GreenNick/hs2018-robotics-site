import React, { Component } from 'react'
import styles from './Diversity.module.css'
import Navigation from '../Navigation/Navigation'

class Diversity extends Component {
  render () {
    return (
      <main>
        <h1 className='headerText'>Diversity</h1>
        <div className='wrapper'>
          <section>
            <img src='#' alt='' />
            <div>
              <h2>Cultures</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </section>
          <section>
            <div>
              <h2>Girls and Tech</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
            <img src='#' alt='' />
          </section>
          <section className={styles.students}>
            <h2>Student Body</h2>
            <div className={styles.carousel}>
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
            </div>
          </section>
        </div>
        <Navigation dark={true} />
      </main>
    )
  }
}

export default Diversity
