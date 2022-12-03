import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
import { BoardComponent } from './BoardComponent'
import { auth } from '../../firebase_config'
=======
import { auth, db } from '../../firebase_config'
import { collection, getDocs, addDoc } from '@firebase/firestore'

>>>>>>> cdbccc4 (feat: add parsing boards from BE)
import { Button } from '../Button'
import { Modal } from '../Modal'
import { BoardForm } from '../Form'

<<<<<<< HEAD
import { dataBoards } from '../../config/dataBoards'
=======
import { BoardComponent } from './BoardComponent'
>>>>>>> cdbccc4 (feat: add parsing boards from BE)

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

    if (boards.length === 0) {
      getBoards().catch(err => {
        console.log(err.message)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(boards)
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
        {boards.map((board, idx) =>
          <Link
            key={board + idx}
            to={`board/${idx}`}
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
