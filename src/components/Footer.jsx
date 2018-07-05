import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  root: {},
}

const Footer = ({ classes }) => (
  <footer className={classes.root}>I'm a footer!</footer>
)

export default injectSheet(styles)(Footer)
