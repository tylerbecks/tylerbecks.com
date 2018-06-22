import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

const styles = {}

const Footer = ({ siteTitle, classes }) => (
  <footer className={classes.heading}>I'm a footer!</footer>
)

export default injectSheet(styles)(Footer)
