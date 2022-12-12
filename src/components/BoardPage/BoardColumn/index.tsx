import { useState } from 'react'

import { db } from '../../../firebase_config'
import { doc, deleteDoc } from '@firebase/firestore'

import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { DeleteConfirmationBlock } from '../../DeleteConfirmation'

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
  title: string
  id: string
}

export const BoardColumn = ({ title, id }: TBoardColumn) => {
  const count = 0
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const handleDelete = () => {
    deleteDoc(doc(db, 'columns', id))
  }

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnBlock>
          <ColumnTitle>{title}</ColumnTitle>
          <ColumnCounter>{count}</ColumnCounter>
        </ColumnBlock>
        <ColumnOptions onClick={toggleModal} />
      </ColumnHeader>
      <ColumnBody>
      </ColumnBody>
      <Button
        text='+ Card'
        handleClick={() => {}}
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <DeleteConfirmationBlock
          onClose={toggleModal}
          onDelete={handleDelete}
        />
      </Modal>
    </ColumnWrapper>
  )
}
