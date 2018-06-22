import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import { orange, offWhite } from '../utils/styles'

const styles = {
  heading: {
    padding: `35px 0`,
    backgroundColor: offWhite,
    color: orange,
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  header: {
    fontWeight: 300,
    textTransform: 'uppercase',
  },
}

const Header = ({ siteTitle, classes }) => (
  <section>
    <header className={classes.heading}>
      <h1 className={classes.header}>
        <Link to="/" className={classes.link}>
          {siteTitle}
        </Link>
      </h1>
    </header>
  </section>
)

export default injectSheet(styles)(Header)
