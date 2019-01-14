import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      {/* <div>
        <p className={styles.message}>This website was built from the ground up using HTML, CSS, and JavaScript by Nicholas Bowers, Justin Wade, and Sanjeena Chowdhury with help from all the VEX teams at Tucker High School. Check out the code at our github repository here.</p>
      </div> */}
      <div className={styles.container}>
        <div>
          <h6><Link className='link' to='/TuckerHigh'>Tucker High</Link></h6>
          <ul>
            <li><Link className='link' to='/TuckerHigh/AboutUs'>About Us</Link></li>
            <li><Link className='link' to='/TuckerHigh/Teachers'>Teachers</Link></li>
            <li><Link className='link' to='/TuckerHigh/Diversity'>Diversity</Link></li>
            <li><Link className='link' to='/TuckerHigh/Outreach'>Outreach</Link></li>
            <li><Link className='link' to='/TuckerHigh/IncomingMembers'>Incoming Members</Link></li>
          </ul>
        </div>
        <div>
          <h6><Link className='link' to='/2019Season'>2019 Season</Link></h6>
          <ul>
            <li><Link className='link' to='/2019Season/AboutTheGame'>About the Game</Link></li>
            <li><Link className='link' to='/2019Season/Calendar'>Calendar</Link></li>
            <li><Link className='link' to='/2019Season/TuckerTournament'>Tucker Tournament</Link></li>
            <li><Link className='link' to='/2019Season/OnlineChallenge'>Online Challenge</Link></li>
          </ul>
        </div>
        <div>
          <h6><Link className='link' to='/Teams'>Teams</Link></h6>
          <ul>
            <li><Link className='link' to='/Teams/1320A'>1320A</Link></li>
            <li><Link className='link' to='/Teams/1320B'>1320B</Link></li>
            <li><Link className='link' to='/Teams/1320C'>1320C</Link></li>
            <li><Link className='link' to='/Teams/1320D'>1320D</Link></li>
            <li><Link className='link' to='/Teams/1320E'>1320E</Link></li>
          </ul>
        </div>
        <div>
          <h6><Link className='link' to='/Awards'>Awards</Link></h6>
          <h6><Link className='link' to='/PhotoGallery'>Photo Gallery</Link></h6>
          <h6><Link className='link' to='/Contact'>Contact</Link></h6>
        </div>
      </div>
      <div className={styles.contact}>
        <h6>Tucker High School</h6>
        <p>
          5036 Lavista Rd <br />
          Tucker, GA 30084 <br />
          (678) 874-3702 <br />
          tuckerrobotigers@gmail.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
