import React from 'react'
import injectSheet from 'react-jss'
import { Button, Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tylerImage from '../../resources/images/tyler.png'
import { offWhite } from '../../utils/styles'

const styles = {
  root: {
    background: offWhite,
    textAlign: 'center',
    fontSize: '1.2em',
    paddingTop: '2rem',
  },
  figure: {
    margin: '0',
  },
  image: {
    maxHeight: '75vh',
    filter: `drop-shadow(5px 0px 6px rgba(0, 0, 0, 0.2))`,
  },
}

const Intro = ({ classes }) => (
  <section className={classes.root}>
    <Container>
      <Row>
        <Col xs="12" md="7" className="align-self-center">
          <h1>Who is Tyler Becks?</h1>
          <p className="text-justify">
            He loves to challenge the status quo. He hates horseradish (yes,
            wasabi too). He is a fullstack engineer that’s savvy with React,
            JavaScript, and Python. He's been working in the San Francisco
            startup scene since 2016 and is now the lead feature developer at
            Smarking (YC 2015). Born and raised in LA 🌴, now in SF 🤓. As an
            avid traveler, he is bilingual, lived on three continents, and
            traveled to over 30 countries.
          </p>
          <br />
          <a href="http://localhost:8000/tyler_becks_resume.pdf">
            <Button color="danger">
              <FontAwesomeIcon icon="file-alt" fixedWidth />
              Download his resume
            </Button>
          </a>
        </Col>

        <Col xs="12" md="5" className="align-self-end">
          <figure className={classes.figure}>
            <img
              className={classes.image}
              src={tylerImage}
              alt="Tyler with arms crossed"
            />
          </figure>
        </Col>
      </Row>
    </Container>
  </section>
)

export default injectSheet(styles)(Intro)
