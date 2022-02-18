import React from 'react'
import './Pitch.css'
import cashflow2 from '../../images/cashflow2.jpg'

function Pitch() {
  return (
    <div className='Pitch__possibility section__padding' id='possibility'>
      <div className='Pitch__possibility-image Pitch__possibility-image__shadow'>
        <img src={cashflow2} alt='possibility' />
      </div>
      <div className='Pitch__possibility-content'>
        {/* <h4>Request Early Access to Get Started</h4> */}
        <h1 className='gradient__text'>Are you protecting your core?</h1>
        <p>According to the Department of Labor, over 70% of business closures relate in some way to cash flow.
          Looking after the core of your business can take a lot of time and expertise. You need a team who can see
          warning signs in a credit report just as easily as they can see the benefits of utilizing credit decisions as a way to increase sales.
          You need a team that knows how to create a payment package that protects your company against loss or late payments, but can still make the sale.
          You need a team that can set up payment plans that encourage your clients to not just pay on time, but to pay ahead of time.
          You need a team who's dedication, purpose, and passion is to protecting the core of your business. You need <span className='gradient__text'>Core Strategies</span>.
        </p>
        {/* <h4>Request Early Access to Get Started</h4>  */}
      </div>
    </div>
  )
}

export default Pitch