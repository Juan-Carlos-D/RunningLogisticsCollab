import React from 'react'

//CSS
import '../CSS/Header.css'

//Components
import Nav from './Nav'

function Header({ profile }) {
  return (
    <section id='header'>
      <div id='titleProfile'>
        <h1>Running Logistics</h1>
        <h2>{profile}</h2>
      </div>
      <Nav profile={profile}/>
    </section>
  )
}

export default Header