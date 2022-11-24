import styled from 'styled-components/macro'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const TeamLabel = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 49px;
  color: #7B61FF;
`
export const TeamBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

export const TeamLogo = styled.img`
  width: 62px;
`

export const MembersList = styled.div`
  display: flex;
  gap: 100px;
`
