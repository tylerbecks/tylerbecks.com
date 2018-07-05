import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './index.css'
import React from 'react'
import jss from 'jss'
import jssNested from 'jss-nested'
import AboveTheFold from './landingSections/AboveTheFold'
import Intro from './landingSections/Intro'
import Projects from './landingSections/Projects'

jss.setup(jssNested())

const IndexPage = () => (
  <div>
    <AboveTheFold />
    <Intro />
    <Projects />
  </div>
)

export default IndexPage
