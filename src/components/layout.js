import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import Head from './head'
import Header from './header'
import Box from './box'
import Hero from './hero'
import Footer from './footer'

const Layout = ({ data, children }) => (
  <>
    <Global
      styles={css`
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        html {
          box-sizing: border-box;
          overflow-y: scroll;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html,
        body {
          height: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          color: hsl(233, 72%, 85%, 1);
          background: hsla(261, 92%, 5%, 1);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          word-wrap: break-word;
          font-kerning: normal;
          font-feature-settings: 'kern', 'liga', 'clig', 'calt';
          font-variant-ligatures: none;
          text-rendering: optimizeLegibility;
        }

        img {
          max-width: 100%;
          vertical-align: middle;
        }

        ul {
          list-style-position: outside;
          list-style-image: none;
          margin: 0;
        }

        ol {
          padding: 0;
          margin: 0 1.45rem;
          margin-bottom: 1.45rem;
          list-style-position: outside;
          list-style-image: none;
        }

        figure,
        blockquote {
          padding: 0;
          margin: 0 0 1.45rem 0;
        }

        p {
          padding: 0;
          margin: 0;
        }

        blockquote *:last-child,
        li *:last-child,
        p *:last-child {
          margin-bottom: 0;
        }

        code {
          padding: 0.25rem 0.5rem;
          border-radius: 3px;
          background-color: rgba(80, 105, 252, 0.8);
          color: rgba(255, 255, 255, 0.7);
        }

        a {
          display: inline-block;
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          &:hover {
            color: rgba(255, 255, 255, 1);
          }
        }

        a:active,
        a:hover {
          outline-width: 0;
        }
      `}
    />
    <Head />
    <Box>
      <Hero />
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
      <Footer />
    </Box>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
