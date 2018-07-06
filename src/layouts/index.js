import React from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

const styles = {}

const Layout = ({ children, data }) => (
  <div>
    <Head
      siteTitle={data.site.siteMetadata.title}
      url={data.site.siteMetadata.url}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <article>{children()}</article>
    <Footer url={data.site.siteMetadata.url} />
  </div>
)

export default injectSheet(styles)(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`
