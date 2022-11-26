import {
  TicketBlock,
  TicketTitle,
  TicketWrapper,
  TicketDescription,
  TicketLabel,
  TicketFooter,
  TicketFooterBlock,
  CommentLogo,
  CommentCounter,
  TicketProfilesBlock,
  TicketProfile
} from './styled'

type TColumn = {
  title: string,
  description: string,
  count: string,
}

export const BoardTicket = ({ title, description, count }: TColumn) => {
  return (
    <TicketWrapper>
      <TicketBlock>
        <TicketTitle contentEditable>{title}</TicketTitle>
        <TicketDescription>{description}</TicketDescription>
        <TicketLabel>Development</TicketLabel>
      </TicketBlock>
      <TicketFooter>
        <TicketFooterBlock>
          <CommentLogo src='/assets/icon_comment.svg'/>
          <CommentCounter>{count}</CommentCounter>
        </TicketFooterBlock>
        <TicketProfilesBlock>
          <TicketProfile>AK</TicketProfile>
          <TicketProfile>DF</TicketProfile>
        </TicketProfilesBlock>
      </TicketFooter>
    </TicketWrapper>
  )
}

