import styled from 'styled-components/macro'

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
