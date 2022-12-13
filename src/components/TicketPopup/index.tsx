import {
  TicketWrapper,
  CommentsList,
  CommentItem,
  AuthorBlock,
  Avatar,
  Name,
  CommentText,
  TicketPopupTitle,
  TicketDesc,
  Footer,
  LabelContainer
} from './styled'

import {
  TicketLabel,
  CommentLogo,
  TicketFooter,
  TicketProfile,
  TicketProfilesBlock,
  CommentCounter
} from '../BoardPage/BoardColumn/BoardTicket/styled'

type TTicketPopup = {
  title: string,
  description?: string,
  count: number,
  user_name: string,
}

export const TicketPopup = ({
  title,
  description,
  count,
  user_name
}: TTicketPopup) => {

  return (
    <TicketWrapper>
      <TicketPopupTitle>{title}</TicketPopupTitle>
      <TicketDesc>{description}</TicketDesc>
      <LabelContainer>
        <TicketLabel isDevelopment>Development</TicketLabel>
        <TicketLabel isDesign>Design</TicketLabel>
        <TicketLabel>+ Add</TicketLabel>
      </LabelContainer>
      <TicketFooter>
        <Footer>
          <CommentLogo src='/assets/icon_comment.svg'/>
          <CommentCounter>{count}</CommentCounter>
        </Footer>
        <TicketProfilesBlock>
          <TicketProfile>AK</TicketProfile>
          <TicketProfile>DF</TicketProfile>
        </TicketProfilesBlock>
      </TicketFooter>
      <CommentsList>
        {/* map comment items later,
        if there's something to map.. */}
        <CommentItem>
          <AuthorBlock>
            <Avatar>PH</Avatar>
            <Name>{user_name}</Name>
          </AuthorBlock>
          <CommentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias, reiciendis!
          </CommentText>
        </CommentItem>
      </CommentsList>
    </TicketWrapper>
  )
}
