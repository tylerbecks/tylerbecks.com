import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import Header from '../components/Header'
import Footer from '../components/Footer'

const styles = {}

const Layout = ({ children, data, classes }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <article>{children()}</article>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

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
