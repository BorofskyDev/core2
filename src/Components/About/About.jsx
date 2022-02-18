import React from 'react'
import Feature from '../Services/Feature'
import './About.css'

function About() {
  return (
    <div className='About section__margin' id='about'>
      <div className='About__feature'>
        <Feature title='Who is Core Strategies?' text='Core Strategies is a consulting company that helps business to business clients with credit decisions and cash flow.
        Composed of Mark Borofsky and Chris Birdwell, Core Strategies has helped clients all over the world
        and of various sizes.' />
      </div>
      <div className='About__heading'>
        <h1 className='gradient__text'>Expertise you can trust, a method and approached honed and perfected for a combined 80+ years.</h1>
        {/* <p>Explore the library</p> */}
      </div>
      <div className='About__container'>
        <Feature title='Mark Borofsky' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui. Sit amet commodo nulla facilisi nullam vehicula ipsum. Aliquam etiam erat velit scelerisque in.' />
        <Feature title='Chris Birdwell' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui. Sit amet commodo nulla facilisi nullam vehicula ipsum. Aliquam etiam erat velit scelerisque in.' />
        {/* <Feature title='Sales' text='Using our system can lead to a credit approval in a matter of moments rather than days. Feel confident knowing that your quick sales are also secure sales.' /> */}
      </div>
    </div>
  )
}

export default About