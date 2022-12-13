import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgba(102, 112, 133, 0.5);
`

export const RSLink = styled.a`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`

export const Contacts = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
`

export const ContactsPopup = styled.div`
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  position: absolute;
  top: -110px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`

export const ContacLink = styled(Link)`
  margin: 5px 0;

  &:hover {
    color: #000;
  } 
`

