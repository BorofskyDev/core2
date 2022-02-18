import React from 'react'
import './Main.css'
import cashflow1 from '../../images/cashflow1.jpg'

function Main() {
  return (
    <div className='Main' id='home'>
      <div className='Main__container'>
        <h1 className='Main__container-header gradient__text'>Core Strategies Cash Flow Guidance</h1>
        <p className='gradient__text Main__container-header2'>Helping You Protect the Core of Your Business</p>
        <h6 className='Main__container-header__content'> The center of your business universe is your cash flow. We have
          years of experience guiding Business-to-Business companies of all sizes find success. </h6>
        <div className='Main__container-button-box'>
          <a className='Main__container-btn' href='#contact'> <button type='button'> Get Started</button></a>
        </div>
        {/* <div className='SellSafe__header-content__people'>
                    <button className='SellSafe__header-content__social'><FaFacebook className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaLinkedin className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaTwitter className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaYoutube className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaEnvelope className='SellSafe__header-content___social-icon'/></button>
                </div> */}
      </div>
      <div className='Main__container-image'>
        <img src={cashflow1} alt='ai' />
      </div>
    </div>
  )
}

export default Main