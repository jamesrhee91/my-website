import React from 'react'
import img from '../images/Untitled.png'
import { Button, Reveal, Image } from 'semantic-ui-react'

const Portfolio = () => {
  return (
    <div className="container" id="portCont">
      <h1 className="heading" id="portfolio">Portfolio</h1>
      <div className="cardsCont">

          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="PARX" id="test" />
              <div id="overlay"></div>
              <div id="button">
                <a href="#" id="link">VIEW PROJECT</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="PARX" id="test" />
              <div id="overlay"></div>
              <div id="button">
                <a href="#" id="link">VIEW PROJECT</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="Piano Tiles" id="test" />
              <div id="overlay"></div>
              <h4 className="title">PIANO TILES</h4>
              <div id="button">
                <a href="#" id="link">VIEW PROJECT</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio
