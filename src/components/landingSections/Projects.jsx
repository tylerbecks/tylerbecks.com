import React from 'react'
import injectSheet from 'react-jss'
import {
  angular,
  coffeeScript,
  css3,
  express,
  googleMaps,
  html5,
  javascript,
  mongo,
  mysql,
  node,
  postgresql,
  python,
  react,
  sass,
} from '../../utils/logos'
import Project from '../../components/Project'
import occupancyImg from '../../resources/images/occupancy.png'
import alertsImg from '../../resources/images/alerts2.png'
import oversellImg from '../../resources/images/oversell.png'
import redditImg from '../../resources/images/reddit.gif'
import hoardersImg from '../../resources/images/hoarders.gif'
import eatupImg from '../../resources/images/eatup.jpg'
import pandorasboxImg from '../../resources/images/pandorasbox.jpg'

const SMARKING_TECHNOLOGIES = [
  javascript,
  react,
  { text: 'Redux' },
  coffeeScript,
  python,
  { text: 'Flask' },
  postgresql,
  { text: 'Stylus' },
]

const occupancy = {
  image: occupancyImg,
  alt: 'Smarking occupancy data chart',
  description: `The bread and butter of the dashboard.   Here, customers
    can analyze their occupancy, revenue, and duration data. They can slice
    and dice the data by time, type of parker, peak vs. average, etc. We
    used the amCharts library for the visualization and layered many 
    features on top, such as last year comparison, adding annotations, 
    downloading the chart and data, and an in-house legend with customizable
    colors.`,
  title: 'Data Visualization',
  technologies: SMARKING_TECHNOLOGIES,
}

const alerts = {
  image: alertsImg,
  alt: 'Smarking alerts creation modal',
  description: `Alerts and anomaly detection alert users when occupancy exceeds 
    a specified threshold. Users can choose to receive alerts via email or text. 
    We used Mandrill for email alerts and Twilio for text alerts.`,
  title: 'Alerts',
  technologies: SMARKING_TECHNOLOGIES,
}

const oversell = {
  image: oversellImg,
  alt: 'Smkarking oversell tool',
  description: `This tool helps customers make informed decisions on how to properly 
    oversell particular groups of their tenants/parkers. Based on each group’s 
    historical usage patterns, the tool calculates the ideal oversell percentage.`,
  title: 'Oversell',
  technologies: SMARKING_TECHNOLOGIES,
}

const reddit = {
  image: redditImg,
  alt: 'reddit dating app signup flow',
  description: `I built this dating app to match users based on common subreddit 
    interests. Users sign up with a Reddit account and feed our database with their 
    stats and trends from Reddit. It was my first time creating a recommendation 
    engine, which led to my discovery of the graph database, Neo4j. The first 
    algorithm created links between users that followed the same subreddit. On the 
    next iteration, I optimized the query to prioritize uncommon subreddits and users 
    that previously "liked" another user. I built the frontend with React and cached 
    user data in Redux. To optimize the system architecture for scalability, I broke 
    out a microservice to store user data in a PostgreSQL database.`,
  title: 'Reddi2Mingle',
  url: 'https://github.com/tylerbecks/Reddi2Mingle',
  technologies: [
    react,
    { text: 'Redux' },
    html5,
    css3,
    sass,
    node,
    express,
    { text: 'Redis' },
    postgresql,
    { text: 'Neo4j' },
    { text: 'Passport' },
    { text: 'Socket.io' },
  ],
}

const hoarders = {
  image: hoardersImg,
  alt: 'hoarders game-play demo',
  description: `Pokemon Go gave me the inspiration to create a game that would encourage 
    people to get outside. In Hoarders, the goal is to collect coins around the city by 
    getting within physical range and banking them at your home base. I used the browser's 
    geolocation API to track and update player coordinates. I also enabled multiplayer 
    functionality by streaming player locations with Socket.io.`,
  title: 'Hoarders',
  url: 'https://github.com/tylerbecks/hoarders',
  technologies: [
    react,
    html5,
    css3,
    node,
    express,
    mongo,
    { text: 'Socket.io' },
    googleMaps,
  ],
}

const eatup = {
  image: eatupImg,
  alt: 'eatup dashboard',
  description: `A great meal comes with great company. EatUp solves the problem of eating 
    alone. On EatUp, users can create new "EatUp" events by selecting a restaurant from the
    Google Places API and posting it to the site. When a user wants to join an EatUp, the 
    results displayed on the dashboard are filtered based on the user's location. I used 
    React to build the frontend components, Node and Express for the backend, and MySQL to 
    store all the user data and content.`,
  title: 'EatUp',
  url: 'https://github.com/tylerbecks/eatup',
  technologies: [react, html5, css3, node, express, mysql, googleMaps],
}

const pandorasbox = {
  image: pandorasboxImg,
  alt: "pandora's box question page",
  description: `Many stories go untold because they never find the appropriate time and place. 
    I built Pandora's Box to give people a place to share their interesting stories in a 
    non-judgmental community. Designed with a mobile-first approach in Angular and the backend 
    is Node and Express. I used MongoDB to store anonymous user responses.`,
  title: "Pandora's Box",
  url: 'https://github.com/tylerbecks/pandoras-box',
  technologies: [angular, html5, css3, node, express, mongo],
}

const smarkingProjects = [occupancy, alerts, oversell]
const projects = [reddit, hoarders, eatup, pandorasbox]

const styles = {
  section: {
    paddingBottom: '2rem',
    paddingTop: '2rem',
  },
}

const AllProjects = ({ classes }) => (
  <div>
    <ProjectsSection
      className={classes.section}
      projects={smarkingProjects}
      title="Smarking Projects"
    />
    <ProjectsSection
      className={classes.section}
      projects={projects}
      title="Personal Projects"
    />
  </div>
)

const ProjectsSection = ({ className, title, projects }) => (
  <section className={className}>
    <h1 className="text-center">{title}</h1>
    {projects.map(
      ({ image, alt, description, technologies, title, url }, index) => (
        <Project
          alt={alt}
          description={description}
          imageSrc={image}
          key={image}
          reverse={index % 2 !== 0}
          technologies={technologies}
          title={title}
          url={url}
        />
      )
    )}
  </section>
)

export default injectSheet(styles)(AllProjects)
