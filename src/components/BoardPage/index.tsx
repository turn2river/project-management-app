import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../Button'
import { Modal } from '../Modal'
import { BoardForm } from '../Form'

import { PageContainer } from './styled'

export const BoardPage = () => {
  //for work with BE in future
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <PageContainer>
      <Button
        text='Create new +'
        handleClick={toggleModal}
        isColumnButton
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm onClose={toggleModal} />
      </Modal>
    </PageContainer>
  )
}
