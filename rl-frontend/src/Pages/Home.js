import React from 'react'

//CSS
import '../CSS/Home.css'

function Home() {
  return (
    <div id='home'>
      {/* Services Section */}
      <section className='services-section'>
        <h2>Services</h2>
        <div className='services-container'>
          <div className='service'>
            <img src='#' alt='Service 1' className='service-image' />
            <p className='service-text'>Service 1</p>
          </div>
          <div className='service'>
            <img src='#' alt='Service 2' className='service-image' />
            <p className='service-text'>Service 2</p>
          </div>
          <div className='service'>
            <img src='#' alt='Service 3' className='service-image' />
            <p className='service-text'>Service 3</p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className='subscribe-section'>
        <h2>Subscribe</h2>
        <form className='subscribe-form'>
          <input type='text' placeholder='Enter your email' className='subscribe-input' />
          <button type='submit' className='subscribe-button'>Sign Up</button>
        </form>
      </section>
    </div>
  );
}

export default Home