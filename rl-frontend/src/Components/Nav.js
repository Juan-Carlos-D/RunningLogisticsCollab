import React from 'react'
import { Link, useLocation } from 'react-router-dom'

//CSS
import '../CSS/nav.css'

const liLink = (word, hashURL, currentPage, loggedIn) => {

    let className = ""

    if (hashURL === currentPage) className += "current";
    if (loggedIn === true) className += ' loggedIn'
    return (
        <Link to={hashURL} className={className}>
            <li>
                {word}
            </li>
        </Link>
    )
}

function Nav({ profile }) {

    const location = useLocation();
    console.log("location:", location)
    console.log("location.pathname", location.pathname)

    const currentPage = location.pathname.slice(1)
    console.log("currentPage:", currentPage)

    const loggedIn = (profile === "") ? false : true;
    return (
        <nav id='nav'>
            <ul>
                {liLink("Home", "", currentPage)}
                {liLink("Contact Us", "Contact", currentPage)}
                {liLink("About Us", "About", currentPage)}
                {liLink("Log-In", "Login", currentPage, loggedIn)}
                {liLink("Sign-Up", "Register", currentPage, loggedIn)}
            </ul>
            <h1>
                {profile}
            </h1>
        </nav>
    )
}

export default Nav