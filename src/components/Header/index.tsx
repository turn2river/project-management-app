/* tslint:disable */
import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase_config'

import {
  HeaderWrapper,
  HeaderButton,
  HeaderIcon,
  HeaderControls,
  HeaderLogo,
  HeaderLogoTitle,
  HeaderLogoLink,
  MainLink,
} from './styled'

type THeader = {
  isLoggedIn: Record<string, never> | null,
  handleLogout: () => void
}

export const Header = ({ isLoggedIn, handleLogout }: THeader) => {
  const currentLocation = useLocation().pathname

  return (
    <HeaderWrapper>
      <HeaderLogoLink to="/">
        <HeaderLogo src='/assets/head_logo.svg' />
        <HeaderLogoTitle>monkey</HeaderLogoTitle>
      </HeaderLogoLink>
      <HeaderControls>
        { isLoggedIn && (
          <Fragment>
            <div>{auth.currentUser?.email}</div>
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
      {(currentLocation.includes('board')) &&
          <MainLink to="/main">
            GO BACK
          </MainLink> }
    </HeaderWrapper>
  )
}
