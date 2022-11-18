import {
  FooterWrapper,
  Logo,
  FooterLink,
  Contacts,
  Year,
} from './styled'

export const Footer = () => (
  <FooterWrapper>
    <a href="#" target='_blank'>
      <Logo src="/assets/logo.png" alt="rss-logo" />
    </a>
    <Contacts>
      <FooterLink
        href='https://github.com/turn2river'
        target='_blank'
      >
       Krylov Alexey
      </FooterLink>
      <FooterLink
        href='https://github.com/PavelTitov16'
        target='_blank'
      >
       Tsitou Pavel
      </FooterLink>
      <FooterLink
        href='https://github.com/Bombamuerta'
        target='_blank'
      >
        Farber Denis
      </FooterLink>
    </Contacts>
    <Year>2022</Year>
  </FooterWrapper>
)
