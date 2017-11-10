import React from 'react'
import img from '../images/ss.png'
import { Button } from 'semantic-ui-react'

const Portfolio = () => {
  return (
    <div className="container" id="portCont">
      <h1 className="heading" id="portfolio">Portfolio</h1>
      <div className="cardsCont">
          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="PARX" id="test" />
              <div id="overlay">test</div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="WeOrder" id="test" />
              <div id="overlay">test</div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={img} alt="Piano Tiles" id="test" />
              <div id="overlay">

                  <h4>Piano Tiles</h4>
                  <div className="desc">
                  <Button inverted >View Project</Button><div>Play</div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio
