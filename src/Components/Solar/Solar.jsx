import React from 'react'
import './Solar.css'

function Solar() {
  return (
    <section className="SolarSystem gradient__bg section__padding">
      <div className="SolarSystem__container">
        <h1 className="SolarSystem__container-header gradient__text">Cash Flow is the Core of Your Business' System</h1>
        <p className="SolarSystem__container-header-content">Imagine your business
          is like the solar system.</p>
        <p className="SolarSystem__container-header-content">The sun keeps the solar system in order, does your cash flow do the same
          for your business?</p>
      </div>
      <div class="SpinnerBox">
        <div class="solar-system">
          <div class="earth-orbit orbit">
            <div class="planet earth"></div>
            <div class="venus-orbit orbit">
              <div class="planet venus"></div>
              <div class="mercury-orbit orbit">
                <div class="planet mercury"></div>
                <div class="sun"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='SolarSystem__graphic'>
        <ul className="solarsystem">
          <li className="sun"><a href="#sun"><span>Sun</span></a></li>
          <li className="mercury"><a href="#mercury"><span>Mercury</span></a></li>
          <li className="venus"><a href="#venus"><span>Venus</span></a></li>
          <li className="earth"><a href="#earth"><span>Earth<span className="moon"> &amp; Moon</span></span></a></li>
          <li className="mars"><a href="#mars"><span>Mars</span></a></li>
          <li className="asteroids_meteorids"><span>Asteroids &amp; Meteorids</span></li>
          <li className="jupiter"><a href="#jupiter"><span>Jupiter</span></a></li>
          <li className="saturn"><a href="#saturn"><span>Saturn &amp; <span className="ring">Ring</span></span></a></li>
          <li className="uranus"><a href="#uranus"><span>Uranus</span></a></li>
          <li className="neptune"><a href="#neptune"><span>Neptune</span></a></li>
          <li className="pluto"><a href="#pluto"><span>Pluto</span></a></li>
        </ul>
      </div>

      <ul className='SolarSystem__list' id="descriptions">
        <li>
          <h2 id="sun">Cash Flow</h2>
          <p>Cash flow is like the Sun; everything in your business revolves around it,
            all energy in your business comes from it, and without cash flow your business
            wouldn't exist.
          </p>
        </li>

        <li>
          <h2 id="mercury">Revenue</h2>
          <p>Revenue feels the full impact of your cash flow. If money is coming in when it's
            expected to come in then life is good. If money is delayed, then everything down the chain
            is delayed.
          </p>
        </li>

        <li>
          <h2 id="venus">Lines of Credit</h2>
          <p>LoC are great for expansion projects or in a pinch, but when they become a mainstay
            of your revenue operations then you're only a few late accounts recievables
            away from facing major debt.
          </p>
        </li>

        <li>
          <h2 id="earth">Sales</h2>
          <p>Being able to qualify the credit worthiness of potential clients in a quick fashion
            frees up your sales team to focus on more clients. We all know that sales is about
            the law of averages - our quick credit evaluation allows you to see more qualified customers
            and helps qualify more potential custo
            mers.
          </p>
        </li>

        {/* <li>
                  <h2 id="mars">Mars</h2>
                  <p>Though details of Mars' surface are difficult to see from Earth, telescope observations show seasonally changing features and white patches at the poles. For decades, people speculated that bright and dark areas on Mars were patches of vegetation, that Mars could be a likely place for life-forms, and that water might exist in the polar caps. When the Mariner 4 spacecraft flew by Mars in 1965, many were shocked to see photographs of a bleak, cratered surface. Mars seemed to be a dead planet. Later missions, however, have shown that Mars is a complex member of the solar system and holds many mysteries yet to be solved.</p>
              </li>

              <li>
                  <h2 id="jupiter">Jupiter</h2>
                  <p>The most massive planet in our solar system, with four large moons and many smaller moons, Jupiter forms a kind of miniature solar system. Jupiter resembles a star in composition. In fact, if it had been about 80 times more massive, it would have become a star rather than a planet.</p>
              </li>

              <li>
                  <h2 id="saturn">Saturn</h2>
                  <p>Saturn was the most distant of the five planets known to the ancients. Like Jupiter, Saturn is made mostly of hydrogen and helium. Its volume is 755 times greater than that of Earth. Winds in the upper atmosphere reach 500 meters (1,600 feet) per second in the equatorial region. These super-fast winds, combined with heat rising from within the planet's interior, cause the yellow and gold bands visible in the atmosphere.</p>
              </li>

              <li>
                  <h2 id="uranus">Uranus</h2>
                  <p>The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel. The seventh planet from the Sun is so distant that it takes 84 years to complete one orbit.</p>
              </li>

              <li>
                  <h2 id="neptune">Neptune</h2>
                  <p>Nearly 4.5 billion kilometers (2.8 billion miles) from the Sun, Neptune orbits the Sun once every 165 years. It is invisible to the naked eye because of its extreme distance from Earth. Interestingly, the unusual elliptical orbit of the dwarf planet Pluto brings Pluto inside Neptune's orbit for a 20-year period out of every 248 Earth years</p>
              </li>

              <li>
                  <h2 id="pluto">Pluto</h2>
                  <p>Tiny, cold and incredibly distant, Pluto was discovered in 1930 and long considered to be the ninth planet. But after the discoveries of similar intriguing worlds even farther out, Pluto was reclassified as a dwarf planet. This new class of worlds may offer some of the best evidence of the origins of our solar system.</p>
              </li> */}
      </ul>

    </section>
  )
}

export default Solar