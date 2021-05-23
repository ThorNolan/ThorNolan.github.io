import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Wrapper/seo.js"
import WaveSkills from "../components/WaveSkills/waveSkills.js"
import "./about.scss"

const About = () => (
  <>
    <Seo title="About" />
    <section className="section page-content" id="about-me">
      <div className="container">
        <div className="about-row">
          <div id="profile-pic" data-sal="slide-up" data-sal-delay="250" data-sal-duration="450" data-sal-easing="ease">
            <StaticImage 
              loading="eager"
              src="../images/profile-pic.jpg"
              alt="Thor Nolan smiling, sitting in a house made of driftwood"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>

          <div className="about-text">
            <p id="intro" data-sal="slide-up" data-sal-delay="300" data-sal-duration="450" data-sal-easing="ease">I'm Thor, a developer and web designer based in
              the Bay Area, CA. I focus on front end development, and appreciate any opportunity to hone my craft and bring my creativity to interesting projects.
              I like to collaborate closely with people to come up with strategies and solutions that work.</p>
            <br />
            <p data-sal="slide-up" data-sal-delay="350" data-sal-duration="450" data-sal-easing="ease">When I'm not coding, I like to climb at my local climbing gym, and I love to travel whenever I can. I'm interested in technology, politics, philosophy, teaching, 
              and everything about this beautiful planet we live on. I also built my desktop PC that I use for playing games, designing things in Illustrator, and working with 3D rendering software like the Unity engine.</p>
            <br />
            <p data-sal="slide-up" data-sal-delay="400" data-sal-duration="450" data-sal-easing="ease">I'm sometimes available for freelance work, so if you have a project you'd
              like to work together on <a href="mailto:tnolan5764@gmail.com" id="email" name="tnolan5764@gmail.com">send me an email</a> and we can chat about it <span role="img" aria-label="wave">🌊</span></p>
            <div className="resume-container" data-sal="slide-up" data-sal-delay="450" data-sal-duration="450" data-sal-easing="ease">
              <a href="assets/images/resume.pdf" target="_blank">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                  <rect className="border-animate" height="60" width="320" />
                </svg>

                <span className="outlined-text">→ my resume</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div data-sal="slide-up" data-sal-delay="1000" data-sal-duration="600" data-sal-easing="ease" className="down-button-container">
          <a
            href="#down"
            aria-label="WHAT I BRING TO THE TABLE"
          >
            <h4>WHAT I BRING TO THE TABLE</h4>
            <i className="fa fa-chevron-down fa-lg" />
          </a>
        </div>
        <WaveSkills />
        <div id="down"></div>
      </div>
    </section>
  </>
)

export default About
