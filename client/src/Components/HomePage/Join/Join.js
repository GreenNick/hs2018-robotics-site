import React, { Component } from 'react'
import ProgramSelector from './ProgramSelector/ProgramSelector'
import InterestForm from './InterestForm/InterestForm'
import SectionInput from './SectionInput/SectionInput'
import SectionDues from './SectionDues/SectionDues'
import styles from './Join.module.css'

class Join extends Component {
  state = {
    vexPrice: 30,
    tsaPrice: 30,
    stemPrice: 0,
    vexActive: false,
    tsaActive: false,
    stemActive: false,
    name: '',
    email: '',
    phone: '',
    grade: 'freshman'
  }

  handleSubmit = event => {
    event.preventDefault()
    const { vexActive, tsaActive, stemActive, name, email, phone, grade } = this.state

    fetch('/api/forms/join', {
      method: 'POST',
      body: JSON.stringify({
        vexActive,
        tsaActive,
        stemActive,
        name,
        email,
        phone,
        grade
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this.setState({
      vexActive: false,
      tsaActive: false,
      stemActive: false,
      vexPrice: 30,
      tsaPrice: 30,
      stemPrice: 0,
      name: '',
      email: '',
      phone: '',
      grade: 'freshman'
    }))
  }

  handleTelChange = event => {
    event.target.value = event.target.value.replace(/\D/, '')
    if (event.target.value.length === 10) {
      event.target.value = `(${event.target.value.slice(0, 3)}) ${event.target.value.slice(3, 6)}-${event.target.value.slice(6)}`
    } else {
      event.target.value = event.target.value.replace(/\D/g, '')
    }
    this.setState({ phone: event.target.value })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleVexClick = () => {
    this.setState(prevState => ({ vexActive: !prevState.vexActive }))
    if (!this.state.vexActive && this.state.tsaActive) {
      this.setState({ tsaPrice: 22.5, vexPrice: 22.5 })
    } else {
      this.setState({ tsaPrice: 30, vexPrice: 30 })
    }
  }

  handleTsaClick = () => {
    this.setState(prevState => ({ tsaActive: !prevState.tsaActive }))
    if (!this.state.tsaActive && this.state.vexActive) {
      this.setState({ tsaPrice: 22.50, vexPrice: 22.50 })
    } else {
      this.setState({ tsaPrice: 30.00, vexPrice: 30.00 })
    }
  }

  handleStemClick = () => {
    this.setState(prevState => ({ stemActive: !prevState.stemActive }))
  }

  render () {
    let subtotal = 0
    if (this.state.tsaActive) {
      subtotal += this.state.tsaPrice
    }
    if (this.state.vexActive) {
      subtotal += this.state.vexPrice
    }

    return (
      <div className='wrapper'>
        <div
          className={styles.container}>
          <SectionInput>
            <div className={styles.selectorContainer}>
              <ProgramSelector
                onClick={this.handleVexClick}
                program='VEX'
                price={this.state.vexPrice.toFixed(2)}
                buttonActive={this.state.vexActive} />
              <ProgramSelector
                onClick={this.handleTsaClick}
                program='TSA'
                price={this.state.tsaPrice.toFixed(2)}
                buttonActive={this.state.tsaActive} />
              <ProgramSelector
                onClick={this.handleStemClick}
                program='STEM'
                price={this.state.stemPrice.toFixed(2)}
                buttonActive={this.state.stemActive} />
            </div>
            <InterestForm
              onTelChange={this.handleTelChange}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              grade={this.state.grade} />
          </SectionInput>
          <SectionDues
            subtotal={subtotal.toFixed(2)} />
        </div>
      </div>
    )
  }
}

export default Join
