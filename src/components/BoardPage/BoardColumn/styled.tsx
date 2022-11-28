import styled from 'styled-components/macro'

export const ColumnWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  background: #FCFCFD;
  gap: 15px;
`

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ColumnBlock = styled.div`
  display: flex;
  gap: 5px;
`

export const ColumnTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.0075em;
  color: #667085;
  text-transform: capitalize;
`

export const ColumnCounter = styled.div`
  width: 19px;
  height: 19px;
  background: #D9D9D9;
  color: #667085;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.0075em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColumnOptions = styled.div`
  min-width: 25px;
  height: 5px;
  background-image: url(assets/icon_dots.svg);
  background-size: contain;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

export const ColumnTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
