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
        <Feature title='Mark Borofsky' text='Mark has been involved in commercial trade credit 
        for over 40 years. In that time, he has developed the skills and know-how to quickly make
        reliably safe credit decisions. He holds a cCertified Credit Executive designation, 
        as well as a Certified Expert Witness. He has been named both the Kansas and National credit 
        executive of the year.' />
        <Feature title='Chris Birdwell' text='Christ began his credit career learning from Mark. Chris has taken 
        20 years of learning from Mark and translated it into his own success. He has gained
        much respect within the credit executive community and has served on both the local and national CFDD. As of 
        2022, Chris is the national chairman of CFDD National.' />
        {/* <Feature title='Sales' text='Using our system can lead to a credit approval in a matter of moments rather than days. Feel confident knowing that your quick sales are also secure sales.' /> */}
      </div>
    </div>
  )
}

export default About