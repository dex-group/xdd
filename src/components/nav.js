import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Container = styled.nav`
  ul {
    ${tw`flex p-0 list-none`};
    li {
      ${tw`text-xs mr-8`};
      .active {
        color: hsla(233, 32%, 56%, 1);
      }
    }
  }
`

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/apply" activeClassName="active">
          申请加入
        </Link>
      </li>
      <li>
        <Link to="/members" activeClassName="active">
          小伙伴们
        </Link>
      </li>
    </ul>
  </Container>
)

export default Nav
