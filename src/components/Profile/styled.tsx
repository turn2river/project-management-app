import styled from 'styled-components/macro'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const DeleteButton = styled.button`
  background-color: red;
  color: antiquewhite;
`
