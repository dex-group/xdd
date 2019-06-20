import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const HeroWrapper = styled.div`
  ${tw`pt-16 pb-4`}
`
const Title = styled.div`
  ${tw`text-3xl font-bold mb-4`}
  a {
    ${tw`text-white`}
  }
`

const Hero = () => (
  <HeroWrapper>
    <Title>
      <Link to="/">小丁丁微信群</Link>
    </Title>
  </HeroWrapper>
)

export default Hero
