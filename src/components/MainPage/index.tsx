import { useState } from 'react'

import { Button } from '../Button'
import { Modal } from '../Modal'

import {
  PageContainer,
  MainTitle,
  Header,
  HeaderColor,
  ProjectsBlock,
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
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
        <span>сюда вставляем нужную форму...
          короче все впизду меня все заебало.</span>
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
        <ProjectCard>
          <CardHeader>
            <ProjectName>this is project name</ProjectName>
            <ProjectOptions />
          </CardHeader>
          <ProjectDesc>
         this is project description
         Lorem, ipsum dolor sit amet
         consectetur adipisicing elit. Distinctio, totam?
          </ProjectDesc>
        </ProjectCard>
        <Button
          text='+ project'
          handleClick={toggleModal}
        />
      </ProjectsBlock>
    </PageContainer>
  )
}
