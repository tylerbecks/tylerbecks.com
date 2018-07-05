import React from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

const styles = {}

const Layout = ({ children, data, classes }) => (
  <div>
    <Head siteTitle={data.site.siteMetadata.title} />
    <Header siteTitle={data.site.siteMetadata.title} />
    <article>{children()}</article>
    <Footer />
  </div>
)

export default injectSheet(styles)(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
