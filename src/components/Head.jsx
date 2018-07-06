import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ siteTitle, url }) => (
  <Helmet title={siteTitle}>
    {/* Favicon */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    {/* Favicon */}

    {/* Facebook Meta */}
    <meta property="og:image:height" content="496" />
    <meta property="og:image:width" content="948" />
    <meta
      property="og:description"
      content="Check out everything Tyler has been working on"
    />
    <meta property="og:title" content="Tyler Becks' Portfolio" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`${url}/og-image.jpg`} />
    {/* Facebook Meta */}
  </Helmet>
)

export default Head
