import styled from 'styled-components/macro'

import {
  TicketTitle,
  TicketDescription,
  TicketFooterBlock,
} from '../BoardPage/BoardColumn/BoardTicket/styled'

export const TicketWrapper = styled.div`
  width: 560px;
  padding: 15px 10px;
`

export const CommentsList = styled.ul``

export const CommentItem = styled.li``

export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const TicketPopupTitle = styled(TicketTitle)`
  display: block;
  margin-bottom: 50px;
`

export const TicketDesc = styled(TicketDescription)`
  min-height: 140px;
  display: block;
  margin-bottom: 40px;
`

export const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 45px;
  align-items: center;  
`

// temp div. maybe img later?
export const Avatar = styled.div`
  width: 24px;
  height: 24px;
  background-color: pink;
  border-radius: 50%;
  margin-right: 10px;
  line-height: 24px;
  text-align: center;
`

export const Name = styled.span`
  font-weight: 500;
  line-height: 150%;
  font-size: 15px;
  color: #667085;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`

export const CommentText = styled.p`
  padding: 10px 20px;
  background: #FFFFFF;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 6px;
`

export const Footer = styled(TicketFooterBlock)`
  margin-bottom: 50px;
`
