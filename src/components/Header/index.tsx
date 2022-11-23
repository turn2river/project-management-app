import { useRef } from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/">
        <HeaderLogoLink href="#">
          <HeaderLogo src='assets/head_logo.svg' />
          <HeaderLogoTitle>monkey</HeaderLogoTitle>
        </HeaderLogoLink>
      </Link>
      <HeaderControls>
        <HeaderButton to='/test'>
          <HeaderIcon isSignIn/>
        </HeaderButton>
        <HeaderIcon isLangSelect />
      </HeaderControls>
    </HeaderWrapper>
  )
}

