import styled, { css } from 'styled-components/macro'

export const ButtonWrapper = styled.button<{isColumnButton?: boolean}>`
  min-width: 320px;
  height: 49px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: rgba(102, 112, 133, 0.5);
  text-transform: capitalize;
  
  ${({ isColumnButton }) => (
    isColumnButton
      ? css`
        height: 25px;
        width: 320px;
        font-size: 20px;
        color: #667085;
      `
      : ''
  )};

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
`
