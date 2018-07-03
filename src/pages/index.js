import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import AboveTheFold from './landingSections/AboveTheFold'
import Intro from './landingSections/Intro'
import Projects from './landingSections/Projects'
import jss from 'jss'
import jssNested from 'jss-nested'

jss.setup(jssNested())

const IndexPage = () => (
  <div>
    <AboveTheFold />
    <Intro />
    <Projects />
  </div>
)

export default IndexPage
