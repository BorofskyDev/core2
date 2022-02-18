import React, { useState } from 'react'
import './Navbar.css'
import { GiPlanetCore } from 'react-icons/gi'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#solar'>My Business Core</a></p>
    <p><a href='#services'>Services</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar__links">
        <div className="Navbar__links-logo">
          {/* <img src={sellsafe3} alt="logo" /> */}
          <p className='Navbar__links-logo2'><GiPlanetCore className='Navbar__links_logo-icon' />Core Strategies</p>
        </div>
        <div className="Navbar__links-container">
          <Menu />
        </div>
      </div>
      {/* <div className="Navbar__sign_up">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div> */}
      <div className="Navbar__menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="Navbar__menu_container scale-up-center">
            <div className="Navbar__menu_container-links">
              <Menu />
              {/* <div className="SellSafe__navbar-menu_container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar