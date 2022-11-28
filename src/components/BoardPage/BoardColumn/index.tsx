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
  ColumnTaskList
} from './styled'

// type TBoardColumn = {
//   title: string,
// }

type TBoardColumn = {
  data: {
    id: string,
    title: string,
    taskIds: string[]
  };
}

export const BoardColumn = ({
  data: {
    id,
    column
    tasks,
  },
}: TBoardColumn) => {
  const count = 0
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <ColumnWrapper draggable={true}>
      <ColumnHeader>
        <ColumnBlock>
          <ColumnTitle contentEditable>{title}</ColumnTitle>
          <ColumnCounter>{count}</ColumnCounter>
        </ColumnBlock>
        <ColumnOptions />
      </ColumnHeader>
      <ColumnTaskList>
        {tasks.map(task => <BoardTicket key={task.id} task={task} /> )}
        {/* <BoardTicket
          title='test title'
          description='test text for ticket'
        /> */}
      </ColumnTaskList>
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
