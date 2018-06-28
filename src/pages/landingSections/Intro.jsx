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
            He is a New York Times Bestselling author. The Wall Street Journal
            calls him a top influencer on the web, Forbes says he is one of the
            top 10 marketers, and Entrepreneur Magazine says he created one of
            the 100 most brilliant companies. He was recognized as a top 100
            entrepreneur under the age of 30 by President Obama and a top 100
            entrepreneur under the age of 35 by the United Nations.
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
