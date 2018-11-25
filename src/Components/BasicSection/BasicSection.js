import React from 'react'

const BasicSection = props => (
  <section>
    <div>
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
    </div>
    <img src={props.src} alt={props.alt} />
  </section>
)

export default BasicSection