import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase_config'
import { getAuth, deleteUser } from 'firebase/auth'

import {
  ProfileBlock,
  PageContainer,
} from './styled'

import { Modal } from '../Modal'
import { DeleteConfirmationBlock } from '../DeleteConfirmation'
import { Button } from '../Button'

export const ProfilePage = () => {

  const navigate = useNavigate()

  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const onDeleteUser = () => {
    const auth = getAuth()
    const user = auth.currentUser

    //@ts-expect-error aaa
    deleteUser(user).then(() => {
      navigate('/main', { replace: true })
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <PageContainer>
      <ProfileBlock>
         account: {auth.currentUser?.email}
      </ProfileBlock>
      <ProfileBlock>
        {/* надо будет добавить ссылки на таски */}
          tasks: some tasks
      </ProfileBlock>
      <Button
        handleClick={toggleModal}
        text='delete user'
        isDeleteButton
      />
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <DeleteConfirmationBlock
          onClose={toggleModal}
          onDelete={onDeleteUser}
        />
      </Modal>
    </PageContainer>
  )
}
