import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${tw`flex flex-col min-h-screen px-8 py-8 max-w-xl mx-auto my-0`};
`

const Box = ({ children }) => <Container>{children}</Container>

Box.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Box
