import { useLocation } from 'react-router-dom'

import {
  FooterWrapper,
  RSLink,
  Contacts,
  ContacLink,
} from './styled'

export const Footer = () => {
  const currentLocation = useLocation().pathname

  return (
    <FooterWrapper>
      <RSLink
        href='https://rs.school/'
        target='_blank'
      >rs school</RSLink>
      <Contacts>
        {(currentLocation === '/team') ?
          <ContacLink to='/'>
            GO BACK
          </ContacLink> : <ContacLink to='/team'>
            MONKEY TEAM ©2022
          </ContacLink>}
      </Contacts>
    </FooterWrapper>
  )
}

