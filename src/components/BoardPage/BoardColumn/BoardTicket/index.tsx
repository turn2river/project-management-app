import { useState } from 'react'

import { Modal } from '../../../Modal'
import { TicketPopup } from '../../../TicketPopup'

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

type TBoardTicket = {
  title: string,
  description?: string,
}

export const BoardTicket = ({ title, description }: TBoardTicket) => {
  const count = 0
  const test_user = 'username'

  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (

    <TicketWrapper onClick={!openModal ? toggleModal : undefined}>
      <TicketBlock>
        <TicketTitle>{title}</TicketTitle>
        <TicketDescription>{description}</TicketDescription>
        <TicketLabel isDevelopment>Development</TicketLabel>
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
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <TicketPopup
          title={title}
          description={description}
          count={count}
          user_name={test_user}
        />
      </Modal>
    </TicketWrapper>
  )
}

