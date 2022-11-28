import styled from 'styled-components/macro'

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
