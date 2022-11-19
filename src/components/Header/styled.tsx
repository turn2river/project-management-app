import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  height: 50px;
  border-bottom: 2px solid rgba(3, 3, 3, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`

export const HeaderButton = styled(NavLink)`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 0 10px;
  background-color: #0052CC;
  border: 1px solid #0052CC;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #0052CC;
    background-color: #fff;
    color: #0052CC;
  }
`

// временная херня
export const LangSelect = styled.div`
    box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 0 10px;
  background-color: #0052CC;
  border: 1px solid #0052CC;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #0052CC;
    background-color: #fff;
    color: #0052CC;
  }
`
