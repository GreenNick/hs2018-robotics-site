import React from 'react'
import Navigation from '../Navigation/Navigation';

const Outreach = () => {
  return (
    <main>
      <h1 className='headerText'>Outreach</h1>
      <div className='wrapper'>
        <section>
          <img src='' alt='' />
          <div>
            <h2>Recruitment</h2>
            <p>Finding new talent is necessary to keep any school program running. Every year, students graduate and we need to find fresh faces to continue the legacy. We spread awareness around our school with recruitment posters. On the posters we explain what our programs are and why people should join them. Word of mouth is also a very effective tool. Members of one STEM club will often join another due to the passive exposure from their peers. We also try to encourage STEM outside of our own school by sending students to Tucker Middle School and Clarkston High School to help them set up their own programs. By doing this, we help spread STEM activities and create new competition for ourselves at events. All this, along with our new website of course, provide us with an avenue to bring people into STEM and keep our programs alive.</p>
          </div>
        </section>
        <section>
          <div>
            <h2>Fundraisers</h2>
            <p>Running all these programs isn't cheap, and we often have to utilize fundraisers to acquire the cash necessary to pay for parts, travel, and competition fees. We do not have any private sponsors with deep pockets, so we have to rely on the money that we can raise ourselves. In the past, we have set up a table at the local farmer's market to show off our robots and collect donations to help pay to go to Worlds. We have also hosted a car wash at a nearby fast food restaurant in order to raise money. We used the money to help pay for TSA trips so as to lower the financial burden on the school and the students. Just this year, we opened a school store that sells snacks and school supplies in the mornings and afternoons. We have had enough success thus far to continue what we are doing.</p>
          </div>
          <img src='' alt='' />
        </section>
      </div>
      <Navigation dark={true} />
    </main>
  )
}

export default Outreach
