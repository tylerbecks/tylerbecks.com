import React from 'react'
import injectSheet from 'react-jss'
import { offWhite } from '../../utils/styles'
import EmailForm from './EmailForm'
import { Jumbotron } from 'react-bootstrap'

const styles = {
  base: {
    background: `${offWhite} !important`,
    textAlign: 'center',
  },
}

const AboveTheFold = ({ classes }) => (
  <Jumbotron className={classes.base}>
    <h1>Do you need an engineer?</h1>
    <EmailForm />
  </Jumbotron>
)

export default injectSheet(styles)(AboveTheFold)
