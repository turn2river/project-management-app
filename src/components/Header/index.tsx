import {
  HeaderWrapper,
  HeaderButton,
  LangSelect,
  HeaderIcon
} from './styled'

export const Header = () => (
  <HeaderWrapper>
    <HeaderButton to='/temp'>
      <HeaderIcon isSignOut />
    </HeaderButton>
    <HeaderButton to='/temp'>
      <HeaderIcon isCreateBoard />
    </HeaderButton>
    <HeaderButton  to='/temp'>
      <HeaderIcon isProfileEdit />
    </HeaderButton>
    <LangSelect>
      <HeaderIcon isLangSelect />
    </LangSelect>
  </HeaderWrapper>
)
