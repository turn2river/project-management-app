import {
  HeaderWrapper,
  HeaderButton,
  LangSelect
} from './styled'

export const Header = () => (
  <HeaderWrapper>
    <HeaderButton to='/temp'>
      Edit profile
    </HeaderButton>
    <HeaderButton to='/temp'>
      Sign out
    </HeaderButton>
    <HeaderButton  to='/temp'>
      Create new board
    </HeaderButton>
    <LangSelect>
      Lang ph
    </LangSelect>
  </HeaderWrapper>
)
