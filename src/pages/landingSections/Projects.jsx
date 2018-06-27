import React from 'react'
import injectSheet from 'react-jss'
import Project from '../../components/Project'
import alerts from '../../images/alerts.png'

const styles = {}

const Projects = ({}) => (
  <section>
    <Project
      imageSrc={alerts}
      alt="alerts project"
      description="Alerts and anomaly detection alert users when occupancy exceeds a specified threshold. Users can choose to receive alerts via email or text. We used Mandrill for email alerts and Twilio for text alerts."
    />
  </section>
)

export default injectSheet(styles)(Projects)
