import React from 'react'
import injectSheet from 'react-jss'
import { offWhite } from '../../utils/styles'
import EmailForm from './EmailForm'
import { Container, Col, Row, Jumbotron } from 'reactstrap'

const styles = {
  base: {
    background: `${offWhite} !important`,
  },
}

const AboveTheFold = ({ classes }) => (
  <Jumbotron className={`${classes.base} text-center} mx-auto`}>
    <Container>
      <Row className="text-center">
        <Col>
          <h1 className="display-3">Do you need an engineer?</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default injectSheet(styles)(AboveTheFold)
