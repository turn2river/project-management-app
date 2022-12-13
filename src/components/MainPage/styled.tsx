import styled from 'styled-components/macro'
import { customScrollbar } from '../../globalStyles'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const Header = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 100%;
`

export const HeaderColor = styled(Header)`
  color: #7B61FF;
  margin-left: 5px;
`

export const ProjectsBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;

  ${customScrollbar};
`
