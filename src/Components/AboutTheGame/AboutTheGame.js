import React from 'react'
import styles from './AboutTheGame.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const AboutTheGame = () => {
  return (
    <main>
      <h1 className='headerText'>About the Game</h1>
      <div className='wrapper'>
        <section>
          <div>
            <h2>Turning Point</h2>
            <p>The 2018-2019 VRC challenge Turning Point has a similar setup to previous years. The game is played on a 12’ x 12’ field with two opposing alliances: red and blue. Each alliance consists of two robots which must cooperate to outscore their opponents. This year’s game has two types of scoring objects: caps and flags. Flags can be scored using the twenty balls set throughout the field. The bottom three flags may be toggled directly by a robot while the upper six flags may be only toggled using the balls. Caps may be flipped onto their red or blue side in order t score points. They may also be placed on one of six poles around the field for extra points. At the end of the match, robots may park on one of three platforms for points. The center platform is the highest and worth the most points. The field has an expansion zone marked by tape within which robots may expand vertically.</p>
          </div>
          <img id='svg' src='/Images/svg/Field.svg' alt='A VEX Turning Point field' />
        </section>
        <section className={styles.gameContainer}>
          <h2>Game Pieces</h2>
          <div className={styles.gamePieces}>
            <img src='/Images/AboutTheGame/Flags.png' alt='' />
            <div>
              <h3>Flags</h3>
              <p>Justin - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </div>
          <div className={styles.gamePieces}>
            <img src='/Images/AboutTheGame/Caps.png' alt='' />
            <div>
              <h3>Caps</h3>
              <p>Justin - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </div>
          <div className={styles.gamePieces}>
            <img src='/Images/AboutTheGame/Platforms.png' alt='' />
            <div>
              <h3>Platforms</h3>
              <p>Justin - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </div>
          <p><cite><a rel='noopener noreferrer' target='_blank' href='https://www.vexforum.com/index.php/33583-jason-s-turning-point-field-renders/0'>Jason's Turning Point Field Renders</a></cite> by jmmckinney, permission with attribution granted on VEX Forums</p>
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default AboutTheGame
