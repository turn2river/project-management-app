import styled from 'styled-components/macro'

export const  ConfirmationBlock = styled.div`
  width: 320px;
  height: 240px;
  display: flex;
  flex-direction: column;
  gap: 20px;  
  justify-content: center;
  align-items: center;
`

export const ConfirmTItle = styled.span`
  font-weight: 700;
  font-size: 20px;
  max-width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 5px;
  letter-spacing: -0.02em;
  color: #1D2939;
  text-transform: uppercase;
`
