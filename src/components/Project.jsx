import React from 'react'
import injectSheet from 'react-jss'
import { Container, Col, Row } from 'reactstrap'

const styles = {}

const Project = ({ imageSrc, alt, description, title }) => (
  <Container>
    <Row>
      <Col>
        <img src={imageSrc} alt={alt} />
      </Col>
      <Col>
        <h3>{title}</h3>
        <p>{description}</p>
      </Col>
    </Row>
  </Container>
)

export default injectSheet(styles)(Project)
