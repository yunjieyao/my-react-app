import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import { request } from 'http';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I'm <br/>Yunjie(Tiffany) Yao</h1>
        <p>Welcome to my personal site.</p>
        <p>I'm a product designer with a background in computer science.</p>
        <p>I love design around efficiency, emotions, and human values.</p>
        <p>I believe with design and technology, </p>
        <p> we can deliver intuitive and delightful experience</p>
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
          <Card 
          title = "CalCentral Design System"
          text = "Creating a design system in a non-profit organizatioin" />
          <Card 
          title = "CalCentral Dashboard"
          text = "Redesign the task card and notification card in my dashboard" />
          <Card 
          title = "iMax System"
          text = "How UX design can make AI assitent more intuitive and intelligent" />
           <Card 
          title = "WePick"
          text = "Uber for Package: Improve the efficiency of picking up package on campus" />
        </div>
    </div>
  </div>
)

export default IndexPage
