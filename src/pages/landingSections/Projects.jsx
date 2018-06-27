import React from 'react'
import injectSheet from 'react-jss'
import Project from '../../components/Project'
import occupancy from '../../images/occupancy.png'
import alerts from '../../images/alerts.png'
import oversell from '../../images/oversell.png'
import reddit from '../../images/reddit.gif'
import hoarders from '../../images/hoarders.gif'
import eatup from '../../images/eatup.png'
import pandorasbox from '../../images/pandorasbox.png'

const styles = {}

const Projects = ({}) => (
  <section>
    <Project
      imageSrc={occupancy}
      alt="Smarking occupancy data chart"
      description="The bread and butter of the dashboard. Here, customers can analyze their occupancy, revenue, and duration data. They can slice and dice the data by time, type of parker, peak vs. average, etc. We used the amCharts library for the visualization and layered many features on top, such as last year comparison, adding annotations, downloading the chart and data, and an in-house legend with customizable colors."
      title="Data Visualization"
    />
    <Project
      imageSrc={alerts}
      alt="Smarking alerts creation modal"
      description="Alerts and anomaly detection alert users when occupancy exceeds a specified threshold. Users can choose to receive alerts via email or text. We used Mandrill for email alerts and Twilio for text alerts."
      title="Alerts"
    />
    <Project
      imageSrc={oversell}
      alt="Smkarking oversell tool"
      description="This tool helps customers make informed decisions on how to properly oversell particular groups of their tenants/parkers. Based on each group’s historical usage patterns, the tool calculates the ideal oversell percentage."
      title="Oversell"
    />

    <Project
      imageSrc={reddit}
      alt="reddit dating app signup flow"
      description={`I built this dating app to match users based on common subreddit interests. Users sign up with a Reddit account and feed our database with their stats and trends from Reddit. It was my first time creating a recommendation engine, which led to my discovery of the graph database, Neo4j. The first algorithm created links between users that followed the same subreddit. On the next iteration, I optimized the query to prioritize uncommon subreddits and users that previously "liked" another user. I built the frontend with React and cached user data in Redux. To optimize the system architecture for scalability, I broke out a microservice to store user data in a PostgreSQL database.`}
      title="Reddi2Mingle"
    />
    <Project
      imageSrc={hoarders}
      alt="hoarders game-play demo"
      description={`Pokemon Go gave me the inspiration to create a game that would encourage people to get outside. In Hoarders, the goal is to collect coins around the city by getting within physical range and banking them at your home base. I used the browser's geolocation API to track and update player coordinates. I also enabled multiplayer functionality by streaming player locations with Socket.io.`}
      title="Hoarders"
    />
    <Project
      imageSrc={eatup}
      alt="eatup dashboard"
      description={`A great meal comes with great company. EatUp solves the problem of eating alone. On EatUp, users can create new "EatUp" events by selecting a restaurant from the Google Places API and posting it to the site. When a user wants to join an EatUp, the results displayed on the dashboard are filtered based on the user's location. I used React to build the frontend components, Node and Express for the backend, and MySQL to store all the user data and content.`}
      title="EatUp"
    />
    <Project
      imageSrc={pandorasbox}
      alt="pandora's box question page"
      description={`Many stories go untold because they never find the appropriate time and place. I built Pandora's Box to give people a place to share their interesting stories in a non-judgmental community. Designed with a mobile-first approach in Angular and the backend is Node and Express. I used MongoDB to store anonymous user responses.`}
      title="Pandora's Box"
    />
  </section>
)

export default injectSheet(styles)(Projects)
