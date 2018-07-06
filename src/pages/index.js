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

const IndexPage = ({ data }) => (
  <div>
    <AboveTheFold />
    <Intro url={data.site.siteMetadata.url} />
    <Projects />
  </div>
)

export const query = graphql`
  query UrlQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`

export default IndexPage
