import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './OnlineChallenge.module.css'
import Footer from '../Footer/Footer'

const OnlineChallenge = () => {
  return (
    <main>
      <h1 className='headerText'>Online Challenge</h1>
      <div className='wrapper'>
        <section>
          <div>
            <h2>Dell Website Challenge</h2>
            <p>The Dell Website Challenge is one of many online VEX challenges. The website is supposed to offer a comprehensive overview of our entire school's VEX and STEM programs. It is designed to encourage students to develop an interest in STEM by showing off all the amazing aspects of youth robotics. Many of us have been interested in programming and web development in particular, so this challenge is a natural choice for us to compete in. We were disappointed to see that many previous winners used website builders like Wix to create their sites. We believe that the VEX community can do better than this, so we were inspired to build our own site entirely from scratch. A link to all the code can be found below.</p>
            <a href='https://github.com/GreenNick/ths-robotics-2018' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
          <img src='/Images/OnlineChallenge/DellWebsiteChallenge.jpg' alt='' />
        </section>
        <section className={styles.container}>
          <h2>Technologies</h2>
          <div className={styles.item}>
            <img src='/Images/OnlineChallenge/HTML-CSS.png' alt='HTML and CSS logo' />
            <div>
              <h3>HTML & CSS</h3>
              <p>HTML and CSS are like the skeleton and flesh of the web. HTML provides the underlying data structure which CSS builds off of to make web pages visually appealing and more navigable. These languages are integral web technologies found on pretty much every website. A strong grasp on these technologies is necessary to build any large-scale, professional site where facile website builders just can't do the job. Sometimes these skills seem basic, but they are the foundation of the web and they can be incredibly powerful when utilized effectively.</p>
            </div>
          </div>
          <div className={styles.item}>
            <img src='/Images/OnlineChallenge/JavaScript.png' alt='JavaScript logo' />
            <div>
              <h3>JavaScript</h3>
              <p>If HTML and CSS are the skeleton and skin of the web, JavaScript is the muscle. Unlike HTML and CSS, JavaScript is a full programming language with all the power that entails. Without JavaScript, the web would be void of dynamic content which makes up the backbone of modern web apps. Using JavaScript was an obvious choice to ensure that our site fit in with the current generation of websites. It provides us with the ability to create online forms, pull data from external sources, and display that data in a useful way.</p>
            </div>
          </div>
          <div className={styles.item}>
            <img src='/Images/OnlineChallenge/React.png' alt='React logo' />
            <div>
              <h3>React</h3>
              <p>Continuing with our anatomical analogy, React JS is like the anabolic steroids to JavaScript's muscle. React is a JavaScript library built by Facebook which extends the functionality of vanilla JavaScript. React allows developers to split their web apps into discrete components which can compose into each other for better organization and separation of concerns. React also provides increased performance with it's virtual DOM which only updates the elements in the DOM that change, rather than reloading the whole page.</p>
            </div>
          </div>
        </section>
        <section>
          <img src='/Images/OnlineChallenge/DevelopmentTeam.jpg' alt='' />
          <div>
            <h2>Development Team</h2>
            <p>The main dev team consists of three members: Nicholas Bowers, Justin Wade, and Sanjeena Chowdhury. Nick is the lead programmer because he has the most experience with web development and has participated in similar challenges in previous years. Justin also has programming experience as the head programmer for team 1320D, although many of the skills do not directly transfer over. He did a significant amount of the writing and helped with formatting and compressing images. Sanjeena is new to VEX and she doesn't have any prior knowledge of computer science. Nick is helping to teach her how to code and create websites. All members of the core team are from 1320D, but every team in Tucker VEX contributed by submitting passages and testing the site.</p>
          </div>
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default OnlineChallenge
