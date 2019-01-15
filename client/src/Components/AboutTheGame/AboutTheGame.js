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
              <p>In VEX Turning Point, flags are one of the primary ways to score. Each high flag is worth two points, while each low flag is worth one point. The high flags can only be toggled by hitting them with a ball, while the low flags can be toggled with anything. However, while flags are technically worth two and one points, in practice they often amount to more. If a blue robot flips a high flag from red to blue, they gain two points and red loses two points. This results in an overall four point swing. This makes flags the most hotly contested scoring object for the majority of matches. Flags can quickly switch the outcome of a match in a matter of seconds.</p>
            </div>
          </div>
          <div className={styles.gamePieces}>
            <img src='/Images/AboutTheGame/Caps.png' alt='' />
            <div>
              <h3>Caps</h3>
              <p>There are two different ways to score caps in this season’s game. Flipping a cap grants one point to the team’s color that is facing upwards. Alternatively, stacking a cap on one of the poles places along the field border grants the team two points. While caps have about the same scoring potential as flags, the strategy behind scoring them is very different. Flipping caps is a very quick and simple method of scoring. One way this is used is to quickly turn the tide of a match. While other robots are contesting the flags, one robot can quickly flip caps, pushing their team ahead. Alternatively, one can stack caps. This is a much more difficult endeavour and is fairly uncommon due to the difficulty doing it efficiently.</p>
            </div>
          </div>
          <div className={styles.gamePieces}>
            <img src='/Images/AboutTheGame/Platforms.png' alt='' />
            <div>
              <h3>Platforms</h3>
              <p>The platforms make the end of each VEX match far more interesting and provide significant point-scoring opportunities. Alliance parking provides a team with three points, while center parking provides an alliance with six points. The center platform is especially important due to the potential for a high point swing. Pushing an opposing team off the center platform and climbing it can result in a twelve point swing, as your alliance gains six points and the opposing alliance loses six points. The addition of the platforms provides a completely different dynamic to robot design. Teams design their robots to be able to push other robots off the platforms and stay on top.</p>
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
