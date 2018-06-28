import React from 'react'
import injectSheet from 'react-jss'
import { Container, Col, Row } from 'reactstrap'

const styles = {
  base: {
    marginBottom: '2rem',
  },
  image: {
    maxWidth: '100%',
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
  },
  imageRight: {
    float: 'right',
  },
}

const Project = ({ classes, imageSrc, alt, description, title, offset }) => (
  <Container fluid className={classes.base}>
    <Row>
      <Col md={{ size: 7, order: offset ? 2 : 1 }}>
        <img
          className={`${classes.image} ${offset ? classes.imageRight : ''}`}
          src={imageSrc}
          alt={alt}
        />
      </Col>
      <Col
        md={{ size: 5, order: offset ? 1 : 2 }}
        className="justify-content-center"
      >
        <h3>{title}</h3>
        <p className="text-justify">{description}</p>
      </Col>
    </Row>
  </Container>
)

export default injectSheet(styles)(Project)
