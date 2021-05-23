import * as React from "react";

import Seo from "../components/Wrapper/seo.js";
import ProjectCard from "../components/ProjectCard/projectCard.js";
import Preloader from "../components/Wrapper/preloader.js"
import "./work.scss";

import buddhasPalm from "../images/bp-demo-vid.mp4";
import spp from "../images/spp-demo-vid.mp4";
import jk from "../images/jayakratom-demo-vid.mp4";
import lynnlottec from "../images/lynnlottec-demo-vid.mp4";
import gighub from "../images/gighub-demo-vid.mp4";
import eventPro from "../images/eventpro-demo.mp4";
import memcc from "../images/memory-color-demo.mp4";
import gifSpace from "../images/gif-me-space-video-demo.mp4";
import mernBooks from "../images/mern-book-search.mp4";
import exiFf from "../images/friend-finder-demo-vid.mp4";

const Work = () => {
  const [
    hasMounted,
    setHasMounted,
  ] = React.useState(false);

  
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <Preloader />
  }

  return (
    <>
    <Seo title="Work" />
    <section id="work">
      <h4>WEBSITES</h4>
      <div className="container" id="websites">
        <ProjectCard 
          title="Buddha's Palm Tattoo"
          link="https://buddhaspalmtattoogallery.com/"
          desc="A custom website I designed and developed for my client, Buddha's Palm Tattoo & Art Gallery. 
          I made the site using HTML, CSS and JavaScript, and relied heavily on my knowledge of SCSS and 
          flex-box layouts to accomplish the design, animations, and responsiveness. I used a mobile-first approach to creating this 
          site and designed a distinct mobile layout as well." 
          src={buddhasPalm}
        />
        <ProjectCard 
          title="Lynn Lott EC"
          link="https://www.lynnlottec.com/"
          desc="Another customised Wordpress theme that I made for my client Lynn Lott Encouragement Consulting. I utilized many tools to 
          accomplish this advanced site, which allows for user uploaded profiles and offers a login-gated area for certified trainers, along with many other functionalities. 
          As many of the trainers are located internationally, I needed to set up a pay-server that would take payments from China as well." 
          src={lynnlottec}
        />
        <ProjectCard 
          title="Jaya Kratom"
          link="https://www.jayakratom.com/"
          desc="A fully customised Wordpress theme that I made for my client Jaya Kratom, a kratom dispensary based in Portland, OR. 
          I leveraged Elementor pro and a lot of custom CSS to accomplish the design, and also set up a BTC payserver to accept alternative currencies." 
          src={jk}
        />
        <ProjectCard 
          title="Staring Problem Press"
          link="https://www.staringproblempress.com/"
          desc="A site for user submitted chapbook creation and sale that I designed and customised using the Squarespace CMS, at the request of my client 
          Staring Problem Press. My goal was to deliver them a customized theme that includes my own HTML and CSS, that would require no further maintanence 
          on their part, which allowed them to focus solely on the commerce aspect of the site." 
          src={spp} 
        />
      </div>

      <h4>CODE PROJECTS</h4>
      <div className="container" id="code-projects">
        <ProjectCard 
          title="GigHub.io"
          link="https://gighub-io.herokuapp.com/"
          repo="https://github.com/ltcondon/Project-3"
          desc="A full-stack MERN app I created with a team as the final project for our bootcamp.
          GigHub lets users log in to the app with their LinkedIn account and track their job
          search progress. We utilized the LinkedIn OAuth API for user sign-in/sign-up, and store user data in a
          Mongo database. Users can add jobs they’re interested in applying for and track their application progress, 
          as well as view analytics about their job search progress." 
          src={gighub} 
        />
        <ProjectCard 
          title="EventPro"
          link="https://limitless-fortress-24134.herokuapp.com/"
          repo="https://github.com/ThorNolan/EventPRO"
          desc="EventPRO is an event planning application that provides users with a centralized location
          to plan upcoming events and organize to-do's. I was part of a team that made this app
          for our full-stack bootcamp, and my responsibilities included setting up the MVC file
          structure, getting our server up and running, utilizing passport and express so that
          users could create accounts and log in (data persists in a MySQL database), and giving the app a consistent style with css." 
          src={eventPro} 
        />
        <ProjectCard 
          title="Memory Color Clicker"
          link="https://thornolan.github.io/React-Memory-Game/"
          repo="https://github.com/ThorNolan/React-Memory-Game"
          desc="This is a simple memory game I built for my full-stack coding bootcamp. It was built with
          React, which it uses it to serve up front-end content and manipulate the DOM. The game
          is built primarily around one stateful app component that keeps track of user clicks,
          user score and high score, and the position of content on the page which needs to be
          re-rendered every time the user clicks." 
          src={memcc} 
        />
        <ProjectCard 
          title="GIF Me Some Space"
          link="https://thornolan.github.io/AJAX-Gif-Finder/"
          repo="https://github.com/ThorNolan/AJAX-Gif-Finder"
          desc="A simple site I made for my full-stack coding bootcamp that populates the page with
          relevant gifs based on keyword searches from user input and button presses using the
          GIPHY API. The theme is space, so the first buttons that appear on the navbar are all
          space themed, but users are free to add any additional themes they would like using the
          form on the page. Upon adding a theme, it will appear as a new button, which the user
          can press for more gifs based on that theme." 
          src={gifSpace} 
        />
        <ProjectCard 
          title="Google Books Search"
          link="https://stormy-badlands-29590.herokuapp.com/"
          repo="https://github.com/ThorNolan/React-Reading-List"
          desc="This is a full-stack MERN application I built for my coding bootcamp, which allows users
          to search for book titles and retrieve information about them by utilizing the Google
          Books API. It relies on a MongoDB database for data persistence, Express for routing
          from my server, React for serving up and manipulating front-end content, and Node as its
          runtime environment. Users can navigate between the search page, where they can search
          for and examine different books, and the saved page, where they can see any books
          they've chosen to add to their collection." 
          src={mernBooks} 
        />
        <ProjectCard 
          title="Existential Friend Finder"
          link="https://limitless-dawn-28902.herokuapp.com/"
          repo="https://github.com/ThorNolan/Friend-Finder"
          desc="An application I made for my bootcamp, it uses Node.js for its
          server environment and Express for routing and serving html. In the app, users are asked
          to provide their name and a link to a photo, and then fill out a short survey consisting
          of 10 existential statements that they can respond to. Upon submission, they will be matched with the person who
          has given the most similar responses to them, with that information being compared against everything in the provisioned database." 
          src={exiFf} 
        />
      </div>
  </section>
  </>
  )
}

export default Work
