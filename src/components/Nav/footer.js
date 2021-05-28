import * as React from "react"

import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { MdMail} from "@react-icons/all-files/md/MdMail";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";

import "./footer.scss"
 
const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="top-btn-container" data-sal="slide-up" data-sal-delay="325" data-sal-duration="400" data-sal-easing="ease">
        <a 
          href="#up"
          className="back-to-top"
          data-position="left"
          data-tooltip="Back to top"
          aria-label="Back to top"
        >
          <FaChevronUp className="fa-lg" />
        </a>
      </div>

      <ul className="footer-links">
        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
          <a
            href="mailto:tnolan5764@gmail.com"
            id="email"
            aria-label="Email: tnolan5764@gmail.com"
          >
            <MdMail className="footer-icon" />
          </a>
        </li>
        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ThorNolan"
            aria-label="Github"
          >
            <FaGithub className="footer-icon" />
          </a>
        </li>
        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/thornolan/"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="footer-icon linkedin" />
          </a>
        </li>
      </ul>

      <p>Made with <FaHeart /> by Thor Nolan {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
 