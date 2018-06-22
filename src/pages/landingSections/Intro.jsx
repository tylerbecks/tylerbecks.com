import React from 'react'
import injectSheet from 'react-jss'

const styles = {}

const Intro = ({}) => (
  <section>
    <div>Who is Tyler Becks?</div>
    <p>
      Tyler is an unemployed, lazy bum. He talks about saving money and working
      out, even when he does neither.
    </p>
  </section>
)

export default injectSheet(styles)(Intro)
