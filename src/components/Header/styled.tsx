import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  height: 50px;
  border-bottom: 2px solid rgba(3, 3, 3, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`

export const HeaderButton = styled(NavLink)``

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
  width: 30px;
  height: 30px;
  margin: 0 10px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${({
    isSignIn,
    isSignOut,
    isProfileEdit,
    isLangSelect,
    isCreateBoard}) => {
    switch (true) {
      case isSignIn:
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
