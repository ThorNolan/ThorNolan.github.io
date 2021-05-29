import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaAt } from "@react-icons/all-files/fa/FaAt";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

import "./footer.scss"

const tooltipStyle = makeStyles({
  tooltip: {
    backgroundColor: '#232320',
    margin: '15px'
  },
});

const CustomTooltip = (props) => {
  const classes = tooltipStyle();

  return <Tooltip TransitionComponent={Zoom} classes={classes} {...props} />;
}
 
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="top-btn-container" data-sal="slide-up" data-sal-delay="325" data-sal-duration="400" data-sal-easing="ease">
        <CustomTooltip title="Back to top" placement="bottom">
            <a 
              href="#up"
              className="back-to-top"
              data-position="left"
              data-tooltip="Back to top"
              aria-label="Back to top"
            >
              <FaChevronUp className="fa-lg" />
            </a>
          </CustomTooltip>
        </div>

        <ul className="footer-links">
          <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
            <CustomTooltip title="Email" placement="left">
              <a
                href="mailto:tnolan5764@gmail.com"
                id="email"
                aria-label="Email: tnolan5764@gmail.com"
              >
                <FaAt className="footer-icon email-link" />
              </a>
            </CustomTooltip>
          </li>
          <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
            <CustomTooltip title="Github" placement="bottom">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ThorNolan"
                aria-label="Github"
              >
                <FaGithub className="footer-icon" />
              </a>
            </CustomTooltip>
          </li>
          <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="400" data-sal-easing="ease">
            <CustomTooltip title="LinkedIn" placement="right">
              <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/thornolan/"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="footer-icon" />
              </a>
            </CustomTooltip>
          </li>
        </ul>

        <p>Made with <FaHeart /> by Thor Nolan {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;
 