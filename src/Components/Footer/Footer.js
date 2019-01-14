import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      {/* <div>
        <p className={styles.message}>This website was built from the ground up using HTML, CSS, and JavaScript by Nicholas Bowers, Justin Wade, and Sanjeena Chowdhury with help from all the VEX teams at Tucker High School. Check out the code at our github repository here.</p>
      </div> */}
      <div className={styles.container}>
        <div>
          <h6>Tucker High</h6>
          <ul>
            <li>About Us</li>
            <li>Teachers</li>
            <li>Diversity</li>
            <li>Outreach</li>
            <li>Incoming Members</li>
          </ul>
        </div>
        <div>
          <h6>2019 Season</h6>
          <ul>
            <li>About the Game</li>
            <li>Calendar</li>
            <li>Tucker Tournament</li>
            <li>Online Challenge</li>
          </ul>
        </div>
        <div>
          <h6>Teams</h6>
          <ul>
            <li>1320A</li>
            <li>1320B</li>
            <li>1320C</li>
            <li>1320D</li>
            <li>1320E</li>
          </ul>
        </div>
        <div>
          <h6>Awards</h6>
          <h6>Photo Gallery</h6>
          <h6>Contact</h6>
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
