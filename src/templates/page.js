/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Layout from 'components/layout'

const Pages = styled.div`
  ${tw`text-sm mb-16 font-hairline`};
  line-height: 1.8;
  .gatsby-image-wrapper {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`

const Page = ({ children, pageContext }) => {
  return (
    <Layout title={pageContext.frontmatter.title}>
      {/* <SEO {...seo} /> */}
      <Pages>{children}</Pages>
    </Layout>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.node.isRequired,
}

export default Page
