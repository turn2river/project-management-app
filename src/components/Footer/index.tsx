import { Link } from 'react-router-dom'

import {
  FooterWrapper,
  RSLink,
  Contacts,
  ContacLink,
} from './styled'

export const Footer = () => (
  <FooterWrapper>
    <RSLink
      href='https://rs.school/'
      target='_blank'
    >rs school</RSLink>
    <Contacts>
      <Link to="/team">
        <ContacLink>
          MONKEY TEAM ©2022
        </ContacLink>
      </Link>
    </Contacts>
  </FooterWrapper>
)

