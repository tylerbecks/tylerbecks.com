import React from 'react'
import injectSheet from 'react-jss'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const styles = {}

const EmailForm = ({ classes }) => (
  <Form inline>
    <FormGroup>
      <FormControl type="text" placeholder="Your email" />
      <Button type="submit">Let's build things!</Button>
    </FormGroup>
  </Form>
)

export default injectSheet(styles)(EmailForm)
