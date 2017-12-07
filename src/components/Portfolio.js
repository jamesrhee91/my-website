import React from 'react'
import parx from '../images/parx-login.gif'
import pianoTiles from '../images/piano-tiles.gif'
import { Button, Reveal, Image } from 'semantic-ui-react'

const Portfolio = () => {
  return (
    <div className="container" id="portCont">
      <h1 className="heading" id="portfolio">Portfolio</h1>
      <div className="cardsCont">

          <div className="card-wrapper">
            <div className="card">
              <img src={parx} alt="PARX" id="test" />
              <div id="overlay"></div>
              <div id="button">
                <a href="#" id="link">VIEW PROJECT</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <img src={parx} alt="PARX" id="test" />
              <div id="overlay"></div>
              <div id="button">
                <a href="#" id="link">VIEW PROJECT</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <img src={pianoTiles} alt="Piano Tiles" id="test" />
              <div id="overlay"></div>
                <div id="button">
                  <h4 className="caption">PIANO TILES</h4>
                  <a href="#" id="link">VIEW PROJECT</a>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio
