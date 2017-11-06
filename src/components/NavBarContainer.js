import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class NavBarContainer extends React.Component {

  render() {
    return (
      <div className="navBarContainer">
        <div className="navBar">

          <div className="leftContainer">
            <a href="" target="_blank" className="box">
              <Icon name="home" size="big" />
            </a>
          </div>

          <div className="rightContainer">
            <a href="https://www.linkedin.com/in/jamesrhee91" target="_blank" className="box">
              <Icon name="linkedin" size="big"/>
            </a>

            <a href="https://www.github.com/jamesrhee91" target="_blank" className="box">
              <Icon name="github" size="big"/>
            </a>

            <a href="https://www.medium.com/@jamesshrhee" target="_blank" className="box">
              <Icon name="medium" size="big"/>
            </a>
          </div>

        </div>

        <div className="nameContainer">
          <div className="name">
            J A M E S  R H E E
          </div>
        </div>
      </div>
    )
  }
}
