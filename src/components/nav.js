import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </li>
    </ul>
  </Container>
)

export default Nav
