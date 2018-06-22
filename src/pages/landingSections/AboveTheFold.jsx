import React from 'react'
import injectSheet from 'react-jss'
import { offWhite } from '../../utils/styles'

const styles = {
  base: {
    background: offWhite,
  },
}

const AboveTheFold = ({ classes }) => (
  <section className={classes.base}>
    <h1>Do you need an engineer?</h1>
    <p>Lorem ipsum foo bar</p>
    <form action="http://tylerbecks.com" method="post">
      <input type="email" />
      <input type="submit" />
    </form>
  </section>
)

export default injectSheet(styles)(AboveTheFold)
