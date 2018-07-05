import React from 'react'
import injectSheet from 'react-jss'
import { InputGroup, InputGroupAddon, Form, Input, Button } from 'reactstrap'

const styles = {}

const EmailForm = ({}) => (
  <Form
    action="https://formspree.io/tylerdbecks@gmail.com"
    method="POST"
    className="justify-content-center"
  >
    <InputGroup>
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <Input
        className="form-control-lg"
        name="_replyto"
        placeholder="Your email"
        type="email"
      />
      <InputGroupAddon addonType="append">
        <Button color="danger" type="submit">
          Let's rock and roll!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
)

export default injectSheet(styles)(EmailForm)
