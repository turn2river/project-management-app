
import { Button } from '../Button'

import { auth } from '../../firebase_config'
import { getAuth, deleteUser } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import {
  ProfileBlock,
  PageContainer,
} from './styled'

export const ProfilePage = () => {

  const navigate = useNavigate()

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
        handleClick={() => {onDeleteUser()}}
        text='delete user'
        isDeleteButton
      />
    </PageContainer>
  )
}
