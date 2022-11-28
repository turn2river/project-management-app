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
  ColumnWrapper
} from './styled'

type TBoardColumn = {
  title: string,
}

export const BoardColumn = ({ title }: TBoardColumn) => {
  const count = 0
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnBlock>
          <ColumnTitle contentEditable>{title}</ColumnTitle>
          <ColumnCounter>{count}</ColumnCounter>
        </ColumnBlock>
        <ColumnOptions />
      </ColumnHeader>
      <BoardTicket
        title='test title'
        description='test text for ticket'
      />
      <Button
        text='+ Card'
        handleClick={toggleModal}
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm />
      </Modal>
    </ColumnWrapper>
  )
}
