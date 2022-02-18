import React from 'react'
import './Services.css'
import Feature from './Feature'

const featureData = [
  {
    title: 'Collecting Already Existing Debt',
    text: 'We are not a credit collection service, but we do understand that collections comes with the territory. We can help collect already existing debt as an immediate way to improve your business coffers.'
  },
  {
    title: 'Expert Credit Analysis',
    text: 'With over 80 years combined experience in commercial credit, we have seen it all. We look beyond the credit report to ensure that you get the most accurate information before finalizing any sale.'
  },
  {
    title: 'Increased Sales Quantity and Quality',
    text: 'We will protect your company against credit risks and ensure the clients you sell to are clients you will pay. More importantly, we also check to see if a client can safely increase their approval limit, thus increasing your sales.'
  },
  {
    title: 'And Much More',
    text: 'Core Strategies is prepared to help your company in any way it can around the issue of cash flow. We also are experts in commercial bankrupcy law and can potentially help protect your company against a preference case.'
  },
]

function Services() {
  return (
    <div className='Services section__padding' id='services'>
      <div className='Services__heading'>
        <h1 className='gradient__text'>We have the experience and knowledge to guide your company through difficult
        times and to help grow your company when the opportunity arises</h1>
        <a href='#contact'> <p>Contact us now</p></a>
      </div>
      <div className='Services__container'>
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Services