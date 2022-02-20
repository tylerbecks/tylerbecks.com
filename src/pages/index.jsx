import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '../utils/iconLibrary'
import React from 'react'
import { graphql } from 'gatsby'
import jssNested from 'jss-nested'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'
import jss from 'jss'
import AboveTheFold from '../components/landingSections/AboveTheFold'
import Intro from '../components/landingSections/Intro'
import Projects from '../components/landingSections/Projects'

jss.setup(jssNested())

const IndexPage = ({ data }) => (
  <div>
    <Head
      siteTitle={data.site.siteMetadata.title}
      url={data.site.siteMetadata.url}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <article>
    <AboveTheFold />
    <Intro url={data.site.siteMetadata.url} />
    <Projects />
    </article>
    <Footer url={data.site.siteMetadata.url} />
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
