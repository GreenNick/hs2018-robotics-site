import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <main>
        <div style={{
          gridArea: 'header',
          height: 40,
          width: 160,
          borderRadius: 20,
          backgroundColor: '#353535',
          margin: '20px 20px 20px auto'
        }}></div>
        <section>
          <div>
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ad fugiat similique dolorem corrupti quas, facilis cumque voluptas harum tempore adipisci assumenda dolores nemo. Odit expedita cum aliquid nesciunt!</p>
          </div>
          <div style={{
            height: 500,
            width: 620,
            background: 'pink',
            boxShadow: '#BDBDBD 2px 2px 2px'
          }}></div>
        </section>
        <nav></nav>
      </main>
    )
  }
}

export default Home