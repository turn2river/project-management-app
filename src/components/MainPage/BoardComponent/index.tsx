import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ConfirmBlock } from '../../DeleteConfirmation'
import { Modal } from '../../Modal'

import {
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
  LinkLabel,
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
        <ProjectOptions onClick={toggleModal} />
      </CardHeader>
      <ProjectDesc>
        {description}
      </ProjectDesc>
      <Link to={`board/${id}`}>
        <LinkLabel>
        Open Board
        </LinkLabel>
      </Link>

      <Modal
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <ConfirmBlock id={id} onClose={toggleModal} />
      </Modal>
    </ProjectCard>
  )
}
