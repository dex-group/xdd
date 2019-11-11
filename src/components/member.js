import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const List = styled.div`
  ${tw`text-xs`};
  border: solid 1px rgba(80, 105, 252, 0.5);
`

const Members = styled.div`
  ${tw`flex cursor-pointer bg-purple-900 hover:bg-purple-800`};
  border-bottom: 1px solid #22294a;
  p {
    ${tw`px-4 py-4 flex items-center justify-start`};
  }
  .name {
    ${tw`w-32`};
  }
  .company {
    ${tw`w-32`};
  }
  .location {
    ${tw`w-24`};
  }
  .bio {
    ${tw`w-2/4`};
  }
`
const Note = styled.p`
  ${tw`text-xs py-8`};
`

const Member = () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable {
          edges {
            node {
              data {
                Name
                Gender
                Company
                Role
                Location
                Bio
                Website
                Twitter
              }
            }
          }
        }
      }
    `}
    render={data => {
      const table = data.allAirtable.edges
      return (
        <>
          <Note>截止到 2019 年 11 月，共 439 人。（不分先后）</Note>
          <List>
            {table.map((props, i) => (
              <Members key={i}>
                <p className="name">{props.node.data.Name}</p>
                <p className="company">{props.node.data.Company}</p>
                <p className="location">{props.node.data.Location}</p>
                <p className="bio">{props.node.data.Bio}</p>
              </Members>
            ))}
          </List>
        </>
      )
    }}
  />
)

Member.propTypes = {
  node: PropTypes.node.isRequired,
  Name: PropTypes.string,
}

export default Member
