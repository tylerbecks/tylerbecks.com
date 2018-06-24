import React from 'react'
import injectSheet from 'react-jss'
import { Grid, Row, Col } from 'react-bootstrap'
import tylerImage from '../../images/tyler.png'

const styles = {
  base: {
    textAlign: 'center',
    fontSize: '1.2em',
  },
  image: {
    maxHeight: '80vh',
  },
}

const Intro = ({ classes }) => (
  <section className={classes.base}>
    <Grid>
      <Row>
        <Col xs={12} lg={7}>
          <h1>Who is Tyler Becks?</h1>
          <p>
            He is a New York Times Bestselling author. The Wall Street Journal
            calls him a top influencer on the web, Forbes says he is one of the
            top 10 marketers, and Entrepreneur Magazine says he created one of
            the 100 most brilliant companies. He was recognized as a top 100
            entrepreneur under the age of 30 by President Obama and a top 100
            entrepreneur under the age of 35 by the United Nations.
          </p>
        </Col>

        <Col xs={12} lg={5}>
          <figure>
            <img
              className={classes.image}
              src={tylerImage}
              alt="Tyler with arms crossed"
            />
          </figure>
        </Col>
      </Row>
    </Grid>
  </section>
)

export default injectSheet(styles)(Intro)
