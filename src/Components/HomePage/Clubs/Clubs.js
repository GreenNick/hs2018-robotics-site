import React from 'react'
import BasicSection from '../../BasicSection/BasicSection'

const sectionContent = [
  { heading: 'What is VEX?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is TSA?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is STEM?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
]

const Clubs = props => (
  <main
    onWheel={props.onWheel}
    className='gradientBg' >
    <BasicSection
      heading={sectionContent[props.pageId].heading}
      paragraph={sectionContent[props.pageId].paragraph} />
    { props.children }
  </main>
)

export default Clubs