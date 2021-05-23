import * as React from "react"
import Particles from "react-tsparticles"
import Parallax from "parallax-js"

import particleConfig from "./particleConfig.js"
import "./eclipse.scss"

import eclipsedMoon from "../../images/new-eclipsed-moon.png";
import flatSun from "../../images/flat-sun.png";

const Eclipse = () => {
  const sceneEl = React.useRef(null);

  React.useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      clipRelativeInput: true,
      selector: ".layer",
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div>
      <ul ref={sceneEl} id="landing">
        <li data-depth="0.0" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer"></li>
        <li data-depth="0.05" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          <div id="stars-0" className="stars-container"></div>
        </li>
        <li data-depth="0.09" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          <div id="stars-1" className="stars-container"></div>
        </li>
        <li data-depth="0.15" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          <div id="stars-2" className="stars-container"></div>
        </li>
        <li data-depth="0.2" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          <div id="stars-3" className="stars-container"></div>
        </li>
        <li data-depth="0.30" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="particle-container layer">
          <Particles
            width={"100vw"}
            height={"100vh"}
            options={particleConfig}
          />
        </li>
        <li data-depth="0.55" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" id="sun-container" className="layer">
          <img loading="eager" id="sun" src={flatSun} alt="A shining sun with text: portfolio" />
        </li>
        <li data-depth="0.80" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" id="moon-container" className="layer">
          <img loading="eager" id="eclipsed" src={eclipsedMoon} alt="Eclipsed moon with text: Thor Nolan, full stack web developer and designer" />
        </li>
      </ul>
    </div>
  )
}

export default Eclipse
