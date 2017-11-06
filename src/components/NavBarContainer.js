import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class NavBarContainer extends React.Component {

  render() {
    return (
      <div className="navBarContainer">
        <div className="navBar">

          <div className="leftContainer">
            <div className="box">
              <Icon name="home" size="big" />
            </div>
          </div>

          <div className="midContainer">
            <div className="name">
              James Rhee
            </div>
          </div>

          <div className="rightContainer">
            <div className="box">
              <Icon name="linkedin" size="big"/>
            </div>
            <div className="box">
              <Icon name="github" size="big"/>
            </div>
            <div className="box">
              <Icon name="medium" size="big"/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
