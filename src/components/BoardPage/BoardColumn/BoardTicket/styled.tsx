import styled from 'styled-components/macro'

export const TicketWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
`

export const TicketBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TicketTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #1D2939;
`

export const TicketDescription = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #98A2B3;
`

export const TicketLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #12B76A;
  width: 109px;
  height: 28px;
  background: #D1FADF;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TicketFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TicketFooterBlock = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`

export const CommentLogo = styled.img`
  width: 18px;
  height: 16px;
`

export const CommentCounter = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #98A2B3;
  display: flex;
  justify-items: center;
  align-items: center;
`

export const TicketProfilesBlock = styled.div`
  display: flex;
  gap: 4px;
`

export const TicketProfile = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
`
