import styled from 'styled-components/macro'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgba(3, 3, 3, 0.1);
  position: absolute;
  bottom: 0;
`

export const Logo = styled.img`
  display: block;
  width: 50px;
`

export const Contacts = styled.div`
  display: flex;
  margin-left: auto;
`

export const FooterLink = styled.a`
  color: #000;
  margin: 0 5px;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Year = styled.div`
  font-weight: 700;
  margin-left: 10px;
`

