import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const FooterWrapper = styled.footer`
  ${tw`text-xs pt-24`}
  color: rgba(255, 255, 255, 0.4);
  margin-top: auto;
`

const Footer = () => (
  <FooterWrapper>
    <p>
      Maintained by <a href="https://twitter.com/dingyi">dingyi</a> and{' '}
      <a href="https://twitter.com/csee">csee</a>
    </p>
  </FooterWrapper>
)

export default Footer
