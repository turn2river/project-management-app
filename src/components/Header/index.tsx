import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import {
  HeaderWrapper,
  HeaderButton,
  HeaderIcon,
  HeaderControls,
  HeaderLogo,
  HeaderLogoTitle,
  HeaderLogoLink,
} from './styled'

type THeader = {
  isLoggedIn: boolean,
}

export const Header = ({ isLoggedIn }: THeader) => {

  return (
    <HeaderWrapper>
      <HeaderLogoLink to="/">
        <HeaderLogo src='assets/head_logo.svg' />
        <HeaderLogoTitle>monkey</HeaderLogoTitle>
      </HeaderLogoLink>
      {/* temp link
      <Link to='/main'> to /main</Link> */}
      <HeaderControls>
        { isLoggedIn && (
          <Fragment>
            <HeaderButton to='/test'>
              <HeaderIcon isSignOut/>
            </HeaderButton>
            <HeaderButton to='/test'>
              <HeaderIcon isProfileEdit/>
            </HeaderButton>
          </Fragment>
        )}
        <HeaderIcon isLangSelect />
      </HeaderControls>
    </HeaderWrapper>
  )
}
