import React from 'react'
import injectSheet from 'react-jss'
import { Container, Col, Row } from 'reactstrap'
import EmailForm from './EmailForm'
import { darkGray } from '../../utils/styles'

const styles = {
  base: {
    background: `${darkGray} !important`,
    color: 'white',
    height: '70vh',
  },
}

const AboveTheFold = ({ classes }) => (
  <section className={`${classes.base} text-center d-flex align-items-center`}>
    <Container>
      <Row>
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
  </section>
)

export default injectSheet(styles)(AboveTheFold)
