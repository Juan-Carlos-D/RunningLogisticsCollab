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
            <img src={require('../assets/facilities.png')} alt='Service 1' className='service-image' />

            <p className='service-text'>Facilities Support Services</p>
          </div>
          <div className='service'>
            <img src={require('../assets/capital.png')} alt='Service 2' className='service-image' />
            <p className='service-text'>Human Capital Management</p>
          </div>
          <div className='service'>
            <img src={require('../assets/services.png')} alt='Service 3' className='service-image' />
            <p className='service-text'>Temporary Help Services</p>
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