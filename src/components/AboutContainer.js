import React from 'react'
import { Image } from 'semantic-ui-react'
import img from '../images/image.png'

const AboutContainer = () => {
  return (
    <div className="aboutContainer">
      <Image src={img} size="medium" bordered />
      <div id="about">
        <h1 id="heading">About me...</h1>
        <p id="content">A Full Stack Web Developer always looking to learn, explore, and tackle new technologies. From audio engineering to simply creating my own computer, the process of trial and error has always been a part of me. My continuous knack for problem solving and experimenting is what lead me into the world of development.</p>
      </div>
    </div>
  )
}

export default AboutContainer
