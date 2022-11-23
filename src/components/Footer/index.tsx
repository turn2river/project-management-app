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
      <ContacLink to="/team">
          MONKEY TEAM ©2022
      </ContacLink>
    </Contacts>
  </FooterWrapper>
)

