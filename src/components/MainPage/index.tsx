import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { Modal } from '../Modal'

import { BoardComponent } from './BoardComponent'
import { dataBoards } from '../../config/dataBoards'

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

  return (
    <PageContainer>
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <span>сюда вставляем нужную форму...</span>
      </Modal>
      <MainTitle>
        <Logo />
        <Header>
        Hey,
        </Header>
        <HeaderColor>
        username
        </HeaderColor>
      </MainTitle>
      <DescriptionHead>SElect oR create a project</DescriptionHead>
      <ProjectsBlock>
        {dataBoards.map((board) =>
          <Link
            key={board.id}
            to={`board/${board.id}`}
          >
            <BoardComponent data={board} />
          </Link>

        )}
        <Button
          text='+ project'
          handleClick={() => {}}
        />
      </ProjectsBlock>
    </PageContainer>
  )
}
