import { useState } from 'react'

import { Button } from '../../Button'
import { BoardForm } from '../../Form'
import { Modal } from '../../Modal'
import { BoardTicket } from './BoardTicket'

import {
  ColumnBlock,
  ColumnCounter,
  ColumnHeader,
  ColumnOptions,
  ColumnTitle,
  ColumnWrapper,
  ColumnBody,
} from './styled'

type TBoardColumn = {
  boardID: string
  title: string
  id: string
}

export const BoardColumn = ({ title, boardID, id }: TBoardColumn) => {
  const count = 0
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnBlock>
          <ColumnTitle>{title}</ColumnTitle>
          <ColumnCounter>{count}</ColumnCounter>
        </ColumnBlock>
        <ColumnOptions />
      </ColumnHeader>
      <ColumnBody>
      </ColumnBody>
      <Button
        text='+ Card'
        handleClick={toggleModal}
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm
          onClose={toggleModal}
          isColumn={false}
          submitData={() => {}}
        />
      </Modal>
    </ColumnWrapper>
  )
}
