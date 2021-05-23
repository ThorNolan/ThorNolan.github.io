import * as React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-plugin-transition-link"
import { StaticImage } from "gatsby-plugin-image"

import "./header.scss"

const Header = (props) => {
  const getColor = (props) => {
    const location = props.location;
    if (location) {
      if (location.includes("about") || location.includes("work")) {
        return "#232320"
      } else {
        return "#FEFAF6"
      }
    }
  }

  const getBackground = (props) => {
    const location = props.location;
    if (location) {
      if (location.includes("about") || location.includes("work")) {
        return "#FEFAF6"
      } else {
        return "rgba(0,0,0,0)"
      }
    }
  }

  return (
  <header>
    <div id="navigation">
      <nav id="up" style={{background: `${getBackground(props)}`}}>
        <div className="container">
          <div>
            <Link 
              to="/"
              title="Thor Nolan | Portfolio"
              id="logo-link"
            >
              <StaticImage 
                id="logo-image"
                src="../../images/new-improved-favicon-03.png"
                loading="eager" 
                alt="Thor Nolan Eclipse Logo"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </Link>
            <ul id="links">
              <li>
                <Link 
                  to="/"
                  activeClassName="active"
                >
                  <span style={{color: `${getColor(props)}`}}>HOME</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span style={{color: `${getColor(props)}`}}>ABOUT</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span style={{color: `${getColor(props)}`}}>WORK</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
