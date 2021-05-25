import * as React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-plugin-transition-link"

import "./header.scss"
import logo from "../../images/new-improved-favicon-03.png";

const Header = (props) => {
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    setLocation(props.location);
  }, [props])

  const getColor = (location) => {
    if (location.includes("about") || location.includes("work")) {
      return "#232320";
    }
    return "#FEFAF6";
  }

  const getBackground = (location) => {
    if (location.includes("about") || location.includes("work")) {
      return "#FEFAF6";
    }
    return "transparent";
  }

  return (
  <header>
    <div id="navigation">
      <nav id="up" style={{backgroundColor: `${getBackground(location)}`}}>
        <div className="container">
          <div>
            <Link 
              to="/"
              title="Thor Nolan | Portfolio"
              id="logo-link"
            >
              <img 
                id="logo-image"
                src={logo}
                loading="eager"
                alt="Thor Nolan Eclipse Logo"
              /> 
            </Link>
            <ul id="links">
              <li>
                <Link 
                  to="/"
                  activeClassName="active"
                >
                  <span style={{color: `${getColor(location)}`}}>HOME</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span style={{color: `${getColor(location)}`}}>ABOUT</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span style={{color: `${getColor(location)}`}}>WORK</span>
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
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  location: ``,
}

export default Header
