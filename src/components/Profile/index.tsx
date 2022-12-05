import { useState } from 'react'

import { Button } from '../Button'

import {
  ProfileBlock,
  PageContainer,
} from './styled'

import { auth } from '../../firebase_config'

export const ProfilePage = () => {

  // const [user, setUser] = useState([])

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
        handleClick={() => {}}
        text='delete user'
        isDeleteButton
      />
    </PageContainer>
  )
}
