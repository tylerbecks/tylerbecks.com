import React from 'react'
import injectSheet from 'react-jss'
import { offWhite } from '../../utils/styles'
import { Jumbotron, Button } from 'react-bootstrap'

const styles = {
  base: {
    background: `${offWhite} !important`,
  },
}

const AboveTheFold = ({ classes }) => (
  <Jumbotron className={classes.base}>
    <h1>Do you need an engineer?</h1>
    <p>Lorem ipsum foo bar</p>
    <form action="http://tylerbecks.com" method="post">
      <input type="email" />
      <Button />
    </form>
  </Jumbotron>
)

export default injectSheet(styles)(AboveTheFold)
