import React from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { darkGray } from '../utils/styles'

const styles = {
  root: {
    background: darkGray,
    color: 'white',
    textAlign: 'center',
    fontSize: '2rem',
  },
  link: {
    color: 'inherit',
  },
}

const Footer = ({ classes, url }) => (
  <footer className={classes.root}>
    <a
      href="https://github.com/tylerbecks"
      target="_blank"
      rel="noreferrer"
      className={classes.link}
    >
      <FontAwesomeIcon icon={['fab', 'github']} fixedWidth />
    </a>

    <a
      href="https://www.linkedin.com/in/tylerbecks/"
      target="_blank"
      rel="noreferrer"
      className={classes.link}
    >
      <FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth />
    </a>

    <a href="mailto:tylerdbecks@gmail.com" className={classes.link}>
      <FontAwesomeIcon icon="envelope" fixedWidth />
    </a>

    <a
      href="https://www.instagram.com/tyler.becks/"
      target="_blank"
      rel="noreferrer"
      className={classes.link}
    >
      <FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth />
    </a>

    <a
      href="https://www.facebook.com/tyler.becks.5"
      target="_blank"
      rel="noreferrer"
      className={classes.link}
    >
      <FontAwesomeIcon icon={['fab', 'facebook']} fixedWidth />
    </a>

    <a
      href="https://twitter.com/tylerbecks"
      target="_blank"
      rel="noreferrer"
      className={classes.link}
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />
    </a>

    <a href={url} className={classes.link}>
      <FontAwesomeIcon icon="infinity" fixedWidth />
    </a>
  </footer>
)

export default injectSheet(styles)(Footer)
