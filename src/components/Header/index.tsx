import { Fragment } from 'react'

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
  handleLogout: () => void
}

export const Header = ({ isLoggedIn, handleLogout }: THeader) => {

  return (
    <HeaderWrapper>
      <HeaderLogoLink to="/">
        <HeaderLogo src='assets/head_logo.svg' />
        <HeaderLogoTitle>monkey</HeaderLogoTitle>
      </HeaderLogoLink>
      <HeaderControls>
        { isLoggedIn && (
          <Fragment>
            <HeaderIcon
              isSignOut
              onClick={handleLogout}
            />
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
