import React from 'react'
import injectSheet from 'react-jss'
import { darkGray } from '../../utils/styles'
import EmailForm from './EmailForm'
import { Container, Col, Row, Jumbotron } from 'reactstrap'

const styles = {
  base: {
    background: `${darkGray} !important`,
    color: 'white',
  },
}

const AboveTheFold = ({ classes }) => (
  <Jumbotron className={`${classes.base} text-center} mx-auto`}>
    <Container>
      <Row className="text-center">
        <Col>
          <h1 className="display-3">Do you need an engineer?</h1>
          <br />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={7}>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default injectSheet(styles)(AboveTheFold)
