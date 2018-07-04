import React from 'react'
import injectSheet from 'react-jss'
import { Badge, Container, Col, Row } from 'reactstrap'

const styles = {
  base: {
    padding: '2rem 0',
  },
  badge: {
    marginRight: '0.4rem',
  },
  textFirst: {},
  image: {
    maxWidth: '100%',
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
  },
  textSection: {
    padding: '0 2rem',
  },
}

const Project = ({
  classes,
  imageSrc,
  alt,
  description,
  title,
  reverse: textFirst,
  url,
  technologies,
}) => (
  <Container fluid className={classes.base}>
    <Row>
      <Col
        md={{
          offset: textFirst ? 0 : 1,
          order: textFirst ? 2 : 1,
          size: 5,
        }}
        className="text-center"
      >
        <img className={classes.image} src={imageSrc} alt={alt} />
      </Col>
      <Col
        md={{
          offset: textFirst ? 2 : 0,
          order: textFirst ? 1 : 2,
          size: 4,
        }}
        className={`justify-content-center ${classes.textSection}`}
      >
        {url ? (
          <a href={url}>
            <h3>{title}</h3>
          </a>
        ) : (
          <h3>{title}</h3>
        )}

        <p>{description}</p>
        {technologies.map(t => (
          <Badge className={classes.badge} color="danger">
            {t}
          </Badge>
        ))}
      </Col>
    </Row>
  </Container>
)

export default injectSheet(styles)(Project)
