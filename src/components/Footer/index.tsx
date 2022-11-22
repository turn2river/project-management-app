import { useState } from 'react'

import {
  FooterWrapper,
  RSLink,
  Contacts,
  ContactsPopup,
  ContacLink
} from './styled'

export const Footer = () => {

  const [showPopup, setShowPopup] = useState(false)

  const toggleContacts = () => {
    setShowPopup(!showPopup)
  }

  return (
    <FooterWrapper>
      <RSLink
        href='https://rs.school/'
        target='_blank'
      >rs school</RSLink>
      <Contacts onClick={toggleContacts}>
        MONKEY TEAM ©2022

        { showPopup && (
          <ContactsPopup>
            <ContacLink
              href="https://github.com/turn2river"
              target='_blank'
            >Alexey Krylov
            </ContacLink>
            <ContacLink
              href="https://github.com/PavelTitov16"
              target='_blank'
            >Pavel Tsitou
            </ContacLink>
            <ContacLink
              href='https://github.com/Bombamuerta'
              target='_blank'
            >Denis Farber</ContacLink>
          </ContactsPopup>
        )}

      </Contacts>
    </FooterWrapper>
  )
}
