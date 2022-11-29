import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BoardColumn } from './BoardColumn'
import { Button } from '../Button'

import { PageContainer } from './styled'
import { Modal } from '../Modal'
import { BoardForm } from '../Form'

export const BoardPage = () => {
  //for work with BE in future
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <PageContainer>
      <BoardColumn title='TO DO' />
      <BoardColumn title='IN PROGRESS' />
      <BoardColumn title='ON REVIEW' />
      <BoardColumn title='DONE' />
      <BoardColumn title='WONT DO' />
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
