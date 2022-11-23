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
} from './styled'

export const Header = () => {

  const ref = useRef(null)
  console.log(ref.current)
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src='assets/head_logo.svg' />
        <HeaderLogoTitle>monkey</HeaderLogoTitle>
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
