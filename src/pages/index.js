import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'

const Index = ({ data }) => (
  <Layout>
    <Box>
      <h2 size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </h2>
    </Box>
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`
