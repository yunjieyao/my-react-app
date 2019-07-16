import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
      <Link to ="/work">Work</Link>
      <Link to ="/about">About</Link>
      <Link to ="/resume">Resume</Link>
    </div>
  </div>
)

export default Header
