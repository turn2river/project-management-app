import { useRef } from 'react'

import {
  HeaderWrapper,
  HeaderButton,
  LangSelect,
  HeaderIcon,
  HeaderControls,
  HeaderLogo,
  HeaderLogoTitle,
  HeaderLogoLink,
} from './styled'

export const Header = () => {

  const ref = useRef(null)
  console.log(ref.current)
  return (
    <HeaderWrapper>
      <HeaderLogoLink to="/">
        <HeaderLogo src='assets/head_logo.svg' />
        <HeaderLogoTitle>monkey</HeaderLogoTitle>
      </HeaderLogoLink>
      <HeaderControls>
        <HeaderButton to='/test'>
          <HeaderIcon isSignIn/>
        </HeaderButton>
        <HeaderIcon isLangSelect />
      </HeaderControls>
    </HeaderWrapper>
  )
}
