import React from 'react'
import './Footer.css'
import { GiPlanetCore } from 'react-icons/gi'

function Footer() {
  return (
    <div className='Footer section__padding' id='footer'>
      <div className='Footer__heading'>
        <h1 className='gradient__text'>Protect the Core of your company</h1>
      </div>
      {/* <div className='Footer__btn'>
        <p><a href="mailto: info@wesellsafe.com"> Request Early Access</a></p>
      </div> */}
      <div className='Footer__links'>
        <div className='Footer__links_logo'>
          {/* <p className='Footer__links_logo2'><GiPlanetCore className='Footer__links_logo-icon' />SellSafe</p> */}
          {/* <img/> */}
        </div>
        {/* <div className='Footer__links_div'>
                    <h4>Social Media</h4>
                    <p>Social Media</p>
                    <p>Contact</p>
                </div>
                <div className='Footer__links_div'>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='Footer__links_div'>
                    <h4>Customer Service</h4>
                    <p>1234 Main St, Anytown, Some State, USA</p>
                    <p>555-555-5555</p>
                    <p>info@sellsafe.com</p>
                    <p>media@sellsafe.com (for media inquirires)</p>
                </div> */}
      </div>
      <div className='Footer__copyright'>
        <p>© 2022 Core Strategies. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer