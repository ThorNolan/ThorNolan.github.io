import * as React from "react"

import "./waveSkills.scss"

const WaveSkills = () => {

  return (
    <div id="skills">
      <div className="skills-wrapper">
        <div className="skills1 box" data-sal="slide-up" data-sal-delay="200" data-sal-duration="550" data-sal-easing="ease">
          <div className="wave wave-one"></div>
          <ul className="list-skills">
            <li><i className="material-icons tiny">keyboard_arrow_right</i> React.js/Redux (and Gatsby) </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Semantic HTML5 </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> CSS3 and SCSS </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Javascript ES6/7+ </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Webpack, GraphQL </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Git branching and workflow </li>
          </ul>
        </div>

        <div className="skills2 box" data-sal="slide-up" data-sal-delay="300" data-sal-duration="550" data-sal-easing="ease">
          <div className="wave wave-two"></div>
          <ul className="list-skills">
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Node.js </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> NPM and <i>many</i> packages </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Express server </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Working with RESTful API's </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> ESlint, smoke/unit testing</li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Agile methodologies </li>
          </ul>
        </div>

        <div className="skills3 box" data-sal="slide-up" data-sal-delay="400" data-sal-duration="550" data-sal-easing="ease">
          <div className="wave wave-three"></div>
          <ul className="list-skills">
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Proficient with Wordpress, Squarespace, and other CMS's </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Bootstrap, Material UI, many libraries and frameworks </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Adobe XD/Figma prototyping </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Adobe Illustrator </li>
            <li><i className="material-icons tiny">keyboard_arrow_right</i> Writing and research </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WaveSkills