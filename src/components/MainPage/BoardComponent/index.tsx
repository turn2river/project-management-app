import { useState } from 'react'
import { Link } from 'react-router-dom'

import { db } from '../../../firebase_config'
import { doc, deleteDoc } from '@firebase/firestore'

import { DeleteConfirmationBlock } from '../../DeleteConfirmation'
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

  const handleDelete = () => {
    deleteDoc(doc(db, 'boards', id))
  }

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
        title='delete board'
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <DeleteConfirmationBlock
          onClose={toggleModal}
          onDelete={handleDelete}
        />
      </Modal>
    </ProjectCard>
  )
}
