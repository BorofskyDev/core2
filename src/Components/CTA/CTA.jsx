import React from 'react'
import './CTA.css'

function CTA() {
  return (
      <div className='cta gradient__bar'>
          <div className='cta__content'>
              <p>Contact us now and start boosting your cash flow today</p>
              <h3>Let us help the core of your business shine bright</h3>
          </div>
          <div className='cta__btn'>
              <button type='button'><a href="mailto: info@wesellsafe.com">Reach Out</a></button>
          </div>
      </div>
  )
}

export default CTA