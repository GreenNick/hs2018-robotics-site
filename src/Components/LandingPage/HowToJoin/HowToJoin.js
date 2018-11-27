import React, { Component } from 'react'
import ProgramSelector from './ProgramSelector/ProgramSelector'

const style = {
  gridArea: 'section',
  display: 'grid',
  width: 1360,
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto auto auto',
  gridGap: 20,
  margin: 20,
  minHeight: 550
}

class HowToJoin extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render () {
    return (
      <div
        style={style}>
        <section style={{gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '4', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
          <h2>How to join</h2>
          <h3>Enter your information</h3>
          <div style={{display: 'flex', margin: '10px 0'}}>
            <ProgramSelector program="VEX" price={20}/>
            <ProgramSelector program="TSA" price={20}/>
            <ProgramSelector program="STEM" price={20}/>
          </div>
        </section>
        <section style={{gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
          <h3>Dues owed: </h3>
          <p>Dues must be payed in person to Mr. Hicks or a TSA Officer. After submitting, your information will be recorded, and you will receive an email detailing any further steps you need to take. Completing this form will not make you a member of your selected programs, it just lets us know that you are interested. </p>
        </section>
        <section style={{gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '4', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
          <h3>Program</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper neque non ante sollicitudin euismod. Aenean mattis, massa at mattis viverra, ipsum nisl dictum felis, et fermentum est ex a erat. Pellentesque eu magna porta, aliquam ligula a, bibendum libero. Mauris maximus finibus mi vel rhoncus. Proin ac odio lacus. Vestibulum sed urna sed lectus dignissim malesuada. Aliquam vitae est velit. Vivamus convallis, purus sit amet vehicula semper, dolor mauris sollicitudin eros, id porttitor erat augue vel lorem. Nulla vulputate risus at lorem lacinia, at iaculis nisl sagittis. </p>
        </section>
      </div>
    )
  }
}

export default HowToJoin