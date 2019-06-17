import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${tw`px-8 py-16 max-w-6xl`};
`

const Box = ({ children }) => <Container>{children}</Container>

Box.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Box
