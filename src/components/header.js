import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import styled from '@emotion/styled'
import Nav from './nav'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
})

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <h1>{title}</h1>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
