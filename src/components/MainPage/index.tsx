import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { auth, db } from '../../firebase_config'
import { collection, getDocs } from '@firebase/firestore'

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
  user: string
}

export const MainPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const [boards, setBoards] = useState([])
  const boardsCollectionRef = collection(db, 'boards')

  useEffect(() => {
    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef)
      // @ts-expect-error type it
      setBoards(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getBoards().catch(err => {
      console.log(err.message)
    })
  }, [])

  const currentUserBoards = boards.filter(
    (board: TBoard) => board.user === auth.currentUser?.email)

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
        {/* {dataBoards.map((board) =>
          <Link
            key={board.id}
            to={`board/${board.id}`}
          >
            <BoardComponent data={board} />
          </Link>

        )} */}
        {currentUserBoards.map((board, idx) =>
          <Link
            key={board + idx}
            to={`board/${idx + 1}`}
          >
            <BoardComponent data={board} />
          </Link>
        )}
        <Button
          text='+ project'
          handleClick={toggleModal}
        />
      </ProjectsBlock>
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <BoardForm />
      </Modal>
    </PageContainer>
  )
}
