import { useState } from 'react'

import { ConfirmBlock } from '../../DeleteConfirmation'
import { Modal } from '../../Modal'

import {
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
} from './styled'

type Props = {
  data: {
    id: string
    title: string;
    description: string;
  };
}

export const BoardComponent = ({
  data: {
    id,
    title,
    description,
  },
}: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  return (
    <ProjectCard>
      <CardHeader>
        <ProjectName>{title}</ProjectName>
        <ProjectOptions />
      </CardHeader>
      <ProjectDesc>
        {description}
      </ProjectDesc>
      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <ConfirmBlock id={id} />
      </Modal>
    </ProjectCard>
  )
}
