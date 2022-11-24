import styled, { css } from 'styled-components/macro'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const MainTitle = styled.div`
  display: grid;
  grid-template-areas: 
  'logo head head_color'
  'logo subheader subheader';
`

export const Logo = styled.div`
  width: 65px;
  height: 62px;
  grid-area: logo;
  align-self: center;
  margin-right: 10px;
  background-image: url(assets/head_logo.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export const Header = styled.div`
  grid-area: head;
  font-weight: 700;
  font-size: 42px;
  line-height: 100%;
`

export const HeaderColor = styled(Header)`
  grid-area: head_color;
  color: #7B61FF;
`

export const SubHeader = styled.h3`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  color: rgba(102, 112, 133, 0.5);
  grid-area: subheader;
  line-height: 100%;
`

export const DescriptionHead = styled.h3`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  line-height: 23px;
`

// переделать в форму когда понадобится
export const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputBlock = styled.div`
  position: relative;
  width: 320px;
  height: 43px;
  margin-bottom: 20px;
`

export const InputField = styled.input`
  width: 320px;
  height: 43px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px 20px;

  &::placeholder {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    color: rgba(102, 112, 133, 0.5);
    text-align: center;
    text-transform: capitalize;
    line-height: 20px;
  }
`

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  width: 320px;
  border-radius: 8px;
  background: #7B61FF;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 20px;

  &:hover {
    font-size: 16px;
  }
`

export const BreadCrumbs = styled.span`
  font-weight: 700;
  line-height: 12px;
  font-size: 10px;
  align-items: center;
  display: flex;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(102, 112, 133, 0.5);
  margin-bottom: 5px;
`
// переделать на ссылку наверно? хз
// пока висит как див
export const SignUpNow = styled(BreadCrumbs)`
  color: #7B61FF;
  cursor: pointer;
`
type TIconVisibility= {
  iconType: boolean,
  isVisible: boolean,
}

export const IconVisibility = styled.div<TIconVisibility>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  
  ${({ iconType }) => (
    iconType
      ? css`
        background-image: url(assets/icon_visible.svg);
        width: 20px;
        height: 20px;
        right: 10px;
      `
      : css`
        background-image: url(assets/icon_not_visible.svg);
        width: 22px;
        height: 22px;
        right: 9px;
      `
  )};
`
