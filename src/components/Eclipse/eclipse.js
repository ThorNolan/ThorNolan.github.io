import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Particles from "react-tsparticles"
import Parallax from "parallax-js"

import particleConfig from "./particleConfig.js"
import "./eclipse.scss"

const Eclipse = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 980);
  const sceneEl = React.useRef(null);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 980);
  };

  React.useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      clipRelativeInput: true,
      hoverOnly: true,
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <ul ref={sceneEl} id="landing">
        <li data-depth="0.0" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer"></li>
        <li data-depth="0.05" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          {isDesktop ? (
            <StaticImage 
              loading="eager"
              src="../../images/stars-even-smaller.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          ) : (
            <StaticImage 
              loading="eager"
              src="../../images/stars-even-smaller-vertical.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          )}
        </li>
        <li data-depth="0.09" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          {isDesktop ? (
            <StaticImage 
              loading="eager"
              src="../../images/stars-smallest.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          ) : (
            <StaticImage 
              loading="eager"
              src="../../images/stars-smallest-vertical.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          )}
        </li>
        <li data-depth="0.15" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          {isDesktop ? (
            <StaticImage 
              loading="eager"
              src="../../images/stars-01.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          ) : (
            <StaticImage 
              loading="eager"
              src="../../images/stars-01-vertical.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          )}
        </li>
        <li data-depth="0.2" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="layer">
          {isDesktop ? (
            <StaticImage
              loading="eager"
              src="../../images/stars-02.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          ) : (
            <StaticImage
              loading="eager"
              src="../../images/stars-02-vertical.png"
              alt=""
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          )}
        </li>
        <li data-depth="0.30" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" className="particle-container layer">
          <Particles
            width={"100vw"}
            height={"100vh"}
            options={particleConfig}
          />
        </li>
        <li data-depth="0.55" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" id="sun-container" className="layer">
          <StaticImage
            id="sun"
            loading="eager"
            src="../../images/flat-sun.png"
            alt="A shining sun with text: portfolio"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            data-sal="slide-up" data-sal-delay="500" data-sal-duration="550" data-sal-easing="ease"
          />
        </li>
        <li data-depth="0.80" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="30" data-scalar-y="30" id="moon-container" className="layer">
          <StaticImage
            id="eclipsed"
            loading="eager"
            src="../../images/new-eclipsed-moon.png"
            alt="Eclipsed moon with text: Thor Nolan, full stack web developer and designer"
            quality={95} 
            formats={["AUTO", "WEBP", "AVIF"]}
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="550" data-sal-easing="ease"
          />
        </li>
      </ul>
    </div>
  )
}

export default Eclipse
