import React, { Component } from 'react'
import ProgramSelector from './ProgramSelector/ProgramSelector'
import InterestForm from './InterestForm/InterestForm'
import SectionInput from './SectionInput/SectionInput'
import SectionDues from './SectionDues/SectionDues'
import SectionDesc from './SectionDesc/SectionDesc'
import styles from './Join.module.css'

class Join extends Component {
  render () {
    return (
      <main
        onWheel={this.props.onWheel}
        className='gradientBg'>
        <div
          className={styles.container}>
          <SectionInput>
            <div className={styles.selectorContainer}>
              <ProgramSelector program='VEX' price={30} />
              <ProgramSelector program='TSA' price={30} />
              <ProgramSelector program='STEM' price={0} />
            </div>
            <InterestForm />
          </SectionInput>
          <SectionDues />
          <SectionDesc />
        </div>
        { this.props.children }
      </main>
    )
  }
}

export default Join