import React from 'react'
import injectSheet from 'react-jss'
import { offWhite } from '../utils/styles'

const styles = {
  heading: {
    padding: `35px 0`,
    backgroundColor: offWhite,
    color: '#dc3545',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}

const Header = ({ siteTitle, classes }) => (
  <section>
    <header className={classes.heading}>
      <h1 className={`text-uppercase font-weight-light`}>{siteTitle}</h1>
    </header>
  </section>
)

export default injectSheet(styles)(Header)
