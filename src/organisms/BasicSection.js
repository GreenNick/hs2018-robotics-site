import React, { Component } from 'react'

class BasicSection extends Component {
  render () {
    return (
      <section>
        <div>
          <h2>{this.props.heading}</h2>
          <p>{this.props.paragraph}</p>
        </div>
        <img src={this.props.src} alt={this.props.alt} />
      </section>
    )
  }
}

export default BasicSection