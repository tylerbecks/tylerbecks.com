import React from 'react'
import injectSheet from 'react-jss'
import { Container, Row, Col } from 'reactstrap'
import tylerImage from '../../images/tyler.png'

const styles = {
  base: {
    textAlign: 'center',
    fontSize: '1.2em',
  },
  image: {
    maxHeight: '75vh',
    filter: `drop-shadow(5px 0px 6px rgba(0, 0, 0, 0.2))`,
  },
}

const Intro = ({ classes }) => (
  <section className={classes.base}>
    <Container>
      <Row>
        <Col xs="12" md="7" className="align-self-center">
          <h1>Who is Tyler Becks?</h1>
          <p className="text-justify">
            He loves to challenge the status quo. He hates horseradish (yes,
            wasabi too). He is a fullstack engineer that’s savvy with React,
            JavaScript, and Python. He has been working in the San Francisco
            startup scene since 2016, and now the lead feature developer at
            Smarking (YC 2015). Born and raised in LA 🌴, now in SF 🤓. As an
            avid traveler, he is bilingual, has lived on three continents, and
            traveled to over thirty countries.
          </p>
        </Col>

        <Col xs="12" md="5" className="align-self-end">
          <figure>
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
