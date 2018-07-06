import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '../utils/iconLibrary'
import React from 'react'
import jss from 'jss'
import jssNested from 'jss-nested'
import AboveTheFold from '../components/landingSections/AboveTheFold'
import Intro from '../components/landingSections/Intro'
import Projects from '../components/landingSections/Projects'

jss.setup(jssNested())

const IndexPage = () => (
  <div>
    <AboveTheFold />
    <Intro />
    <Projects />
  </div>
)

export default IndexPage
