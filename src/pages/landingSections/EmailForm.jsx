import React from 'react'
import injectSheet from 'react-jss'
import { Form, FormGroup, Input, Button } from 'reactstrap'

const styles = {}

const EmailForm = ({ classes }) => (
  <Form className="justify-content-center" inline>
    <FormGroup>
      <Input type="email" placeholder="Your email" />
      <Button type="submit">Let's build things!</Button>
    </FormGroup>
  </Form>
)

export default injectSheet(styles)(EmailForm)
