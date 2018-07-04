import React from 'react'
import injectSheet from 'react-jss'
import { InputGroup, InputGroupAddon, Form, Input, Button } from 'reactstrap'

const styles = {}

const EmailForm = ({}) => (
  <Form className="justify-content-center" inline>
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append" placeholder="Your email">
        <Button color="danger" type="submit">
          Let's build things!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
)

export default injectSheet(styles)(EmailForm)
