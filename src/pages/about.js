import * as React from "react"

import Seo from "../components/Wrapper/seo.js"
import WaveSkills from "../components/WaveSkills/waveSkills.js"
import "./about.scss"
import profilePic from "../images/profile-pic.jpg";

const About = () => (
  <>
    <Seo title="About" />
    <section className="section page-content" id="about-me">
      <div className="container">
        <div className="about-row">
          <div id="profile-pic">
            <img 
              src={profilePic}
              loading="eager"
              alt="Thor Nolan smiling, sitting in a house made of driftwood"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="450"
              data-sal-easing="ease"
            /> 
          </div>

          <div className="about-text">
            <p id="intro" data-sal="slide-up" data-sal-delay="200" data-sal-duration="400" data-sal-easing="ease">I'm Thor, a developer and web designer based in
              the Bay Area, CA. I focus on front end development, and appreciate any opportunity to hone my craft and bring my creativity to interesting projects.
              I like to collaborate with people to come up with strategies and solutions that work.</p>
            <br />
            <p data-sal="slide-up" data-sal-delay="250" data-sal-duration="400" data-sal-easing="ease">When I'm not coding, I like to climb at my local climbing gym, and I love to travel whenever I can. I'm interested in technology, politics, philosophy, teaching, 
              and everything about this beautiful planet we live on. I also built my desktop PC that I use for playing games and designing things in Illustrator</p>
            <br />
            <p data-sal="slide-up" data-sal-delay="300" data-sal-duration="400" data-sal-easing="ease">I'm sometimes available for freelance work, so if you have a project you'd
              like to work together on <a href="mailto:tnolan5764@gmail.com" id="email" name="tnolan5764@gmail.com">send me an email</a> and we can chat about it 
              <span role="img" aria-label="wave" id="wave">🌊</span> 
            </p>
          </div>
        </div>
      </div>
      <div>
        <div data-sal="slide-up" data-sal-delay="600" data-sal-duration="500" data-sal-easing="ease" className="down-button-container">
          <a
            href="#down"
            aria-label="WHAT I BRING TO THE TABLE"
          >
            <h4><i>WHAT I BRING TO THE TABLE</i></h4>
            <i className="fa fa-chevron-down fa-lg" />
          </a>
        </div>
        <WaveSkills />
      </div>
    </section>
  </>
)

export default About