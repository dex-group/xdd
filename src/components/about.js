import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AboutWrapper = styled.div``

const Info = styled.div`
  ${tw`font-hairline leading-relaxed`};
  p {
    ${tw`mb-8`};
  }
`

const About = () => (
  <AboutWrapper>
    <Info>
      <p>
        这里是一个聚集了国内顶尖全栈设计师、全栈开发者、自由职业者、产品经理、总监、VP、CEO的交流群。群内聊天话题包括但不局限于设计、开发、苹果、电子产品、养猫、护肤、八卦等。除了主群，我们还有
        ❖ Figma 交流群、
        <span role="img" aria-label="React">
          ⚛️
        </span>
        React 交流群等细分领域方便感兴趣的人一起学习探讨。
      </p>
      <p>
        同时，我们还会不定期进行
        <a href="https://airtable.com/shrZjam3DdjsnIhaT">电子产品团购</a>
        、二手物品出售、全国线下面基等活动。
      </p>
      <p>如果你也是 full-stack maker，欢迎申请加入我们。</p>
    </Info>
  </AboutWrapper>
)

export default About
