import React from 'react'
import injectSheet from 'react-jss'
import { InputGroup, InputGroupAddon, Form, Input, Button } from 'reactstrap'

const styles = {}

const EmailForm = ({}) => (
  <Form className="justify-content-center">
    <InputGroup>
      <Input
        className="form-control-lg"
        placeholder="Your email"
        type="email"
      />
      <InputGroupAddon addonType="append">
        <Button color="danger" type="submit">
          Let's build things!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
)

export default injectSheet(styles)(EmailForm)
