import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'

import { BoardColumn } from './BoardColumn'
import { Button } from '../Button'

import { PageContainer } from './styled'
import { Modal } from '../Modal'
import { BoardForm } from '../Form'
import { BoardData } from '../../config/dataBoardContent'

export const BoardPage = () => {
  //for work with BE in future
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)
  // const [columnList, setColumnList] = useState([
  //   {id: 1, title: 'TO DO'},
  //   {id: 2, title: 'IN PROGRESS'},
  // ])
  const [columnList, setColumnList] = useState(BoardData)

  return (
    <PageContainer>
      <div>
      {columnList.columnOrder.map((columnId) => {
        const column = columnList.columns[columnId]
        const tasks = column.taskIds.map(taskId => columnList.tasks[taskId])

        <BoardColumn
          key={column.id}
          column={column}
          tasks={tasks}
        />
      })}
      </div>
      <Button
        text='Create new +'
        handleClick={toggleModal}
        customButton
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm />
      </Modal>
    </PageContainer>
  )
}
