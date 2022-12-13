import { useEffect, useState } from 'react'

import { auth, db } from '../../firebase_config'
import { collection, onSnapshot, addDoc } from '@firebase/firestore'

import { Button } from '../Button'
import { Modal } from '../Modal'
import { BoardForm } from '../Form'
import { BoardComponent } from './BoardComponent'

import {
  PageContainer,
  MainTitle,
  Header,
  HeaderColor,
  ProjectsBlock,
} from './styled'

import {
  Logo,
  DescriptionHead
} from '../WellcomePage/styled'

type TBoard = {
  description: string
  id: string
  title: string
}

export const MainPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const [boards, setBoards] = useState<TBoard[]>([])
  const boardsCollectionRef = collection(db, 'boards')

  useEffect(() => onSnapshot(collection(db, 'boards'), (snapshot) =>
  // @ts-expect-error type it
    setBoards(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  ),[])

  const submitForm = (data: {description: string, title: string}) => {
    addDoc(boardsCollectionRef, data)
  }

  return (
    <PageContainer>
      <MainTitle>
        <Logo />
        <Header>
        Hey,
        </Header>
        <HeaderColor>
          {auth.currentUser?.email}
        </HeaderColor>
      </MainTitle>
      <DescriptionHead>Select or create a project</DescriptionHead>
      <ProjectsBlock>
        {boards.length > 0 && boards.map((board) =>
          <BoardComponent key={board.id} data={board} />
        )}
        <Button
          text='+ project'
          handleClick={toggleModal}
        />
      </ProjectsBlock>
      <Modal
        title='create new board'
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm
          onClose={toggleModal}
          isColumn={false}
          submitData={submitForm}
        />
      </Modal>
    </PageContainer>
  )
}
