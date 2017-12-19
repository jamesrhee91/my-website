import React from 'react'
import Parx from '../images/parx-login.gif'
import PianoTiles from '../images/piano-tiles.gif'
import WeOrder from '../images/weorder.gif'
import { Button, Reveal, Image } from 'semantic-ui-react'

const Portfolio = () => {
  return (
    <div className="container" id="portCont">
      <h1 className="heading" id="portfolio">Portfolio</h1>
      <div className="cardsCont">

          <div className="card-wrapper">
            <div className="card" style={{ backgroundImage: `url(${WeOrder})` }}>
              <div id="overlay"></div>
              <h1 className="caption">WeOrder</h1>
              <div id="button">
                <a href="https://github.com/jamesrhee91/WeOrder-frontend" target="_blank" rel="noopener noreferrer" id="link">VIEW GITHUB</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card" style={{ backgroundImage: `url(${Parx})` }}>
              <div id="overlay"></div>
              <h1 className="caption">P A R X</h1>
              <div id="button">
                <a href="https://github.com/jamesrhee91/PARX-FRONTEND" target="_blank" rel="noopener noreferrer" id="link">VIEW GITHUB</a>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card" style={{ backgroundImage: `url(${PianoTiles})` }}>
              <div id="overlay"></div>
              <h1 className="caption">PIANO TILES</h1>
              <div id="button">
                <a href="https://github.com/jamesrhee91/piano-tiles-frontend" target="_blank" rel="noopener noreferrer" id="link">VIEW GITHUB</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio
