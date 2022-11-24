import styled from 'styled-components/macro'
import { NavLink, Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  height: 85px;
  border-bottom: 2px solid rgba(102, 112, 133, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 50px;
`

export const HeaderLogoTitle = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  color: #7B61FF;
  margin-left: 15px;
`

export const HeaderButton = styled(NavLink)``

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`

// временная херня
export const LangSelect = styled.div``

export type THeaderIcon = {
  isSignIn?: boolean,
  isSignOut?: boolean,
  isProfileEdit?: boolean,
  isLangSelect?: boolean,
  isCreateBoard?: boolean,
}

export const HeaderIcon = styled.div<THeaderIcon>`
  width: 25px;
  height: 25px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 15px;
  cursor: pointer;
  background-image: ${({
    isSignIn,
    isSignOut,
    isProfileEdit,
    isLangSelect,
    isCreateBoard}) => {
    switch (true) {
      case isSignIn:
        // вероятно нам вобще нахер не нужна
        // иконка sign in
        return 'url(assets/icon_signin.svg);'
      case isSignOut:
        return 'url(assets/icon_signout.svg);'
      case isProfileEdit:
        return 'url(assets/icon_edit_profile.svg);'
      case isCreateBoard:
        return 'url(assets/icon_create_board.svg);'
      case isLangSelect:
        return 'url(assets/icon_language.svg);'
      default:
        return ''
    }
  }};

  &:hover {
    transform: scale(1.1);
  }
`
