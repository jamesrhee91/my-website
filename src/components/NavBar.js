import React from 'react'
import { Icon } from 'semantic-ui-react'

const NavBar = () => {

  return (
    <div className="center">
      <div className="navBar">
        <div className="leftContainer">
          <a href="https://docs.google.com/document/d/1i8blFR4vAzRp0DzQferxq6S8hDt4yQKakYRe4FzuA9w/edit?usp=sharing" target="_blank" className="box center">
            <Icon name="address card" size="big" />
          </a>
        </div>
        <div className="rightContainer">
          <a href="https://www.linkedin.com/in/jamesrhee91" target="_blank" rel="noopener noreferrer" className="box center">
            <Icon name="linkedin" size="big"/>
          </a>
          <a href="https://www.github.com/jamesrhee91" target="_blank" rel="noopener noreferrer" className="box center">
            <Icon name="github" size="big"/>
          </a>
          <a href="https://www.medium.com/@jamesshrhee" target="_blank" rel="noopener noreferrer" className="box center">
            <Icon name="medium" size="big"/>
          </a>
        </div>
      </div>

      <div className="nameContainer">
        <div className="name center">
          J A M E S  R H E E
        </div>
      </div>

    </div>
  )
}

export default NavBar
