import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Nav from './nav'

const Container = styled.header`
  ${tw`flex mb-24 items-center justify-between`}
  a {
    ${tw`text-xs`}
  }
`

const AnimatedContainer = posed.div({
  enter: {
    transition: {
      opacity: { ease: 'backInOut', duration: 300 },
    },
  },
  exit: {
    transition: {
      opacity: { ease: 'backInOut', duration: 300 },
    },
  },
})

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Nav />
    </Container>
  </AnimatedContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
