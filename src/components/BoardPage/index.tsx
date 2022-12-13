import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../../firebase_config'
import { collection, addDoc, onSnapshot } from '@firebase/firestore'

import { Button } from '../Button'
import { Modal } from '../Modal'
import { ColumnForm } from '../ColumnForm'

import { PageContainer } from './styled'
import { BoardColumn } from './BoardColumn'

type TColumn = {
  boardID: string
  title: string
  id: string
}

export const BoardPage = () => {
  const { id: currentBoardId } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const [columns, setColumns] = useState<TColumn[]>([])
  const columnsCollectionRef = collection(db, 'columns')

  console.log(columns)
  useEffect(() => onSnapshot(collection(db, 'columns'), (snapshot) =>
  // @ts-expect-error type it
    setColumns(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  ),[])

  const currentColumns = columns.filter(column =>
    column.boardID === currentBoardId)

  const submitForm = (data: {boardID: string
    title: string}) => {
    addDoc(columnsCollectionRef, data)
  }

  return (
    <PageContainer>
      {currentColumns.length > 0 && currentColumns.map((column) =>
        <BoardColumn
          key={column.id}
          title={column.title}
          id={column.id}
        />
      )}
      <Button
        text='Create new +'
        handleClick={toggleModal}
        isColumnButton
      />
      <Modal
        title='create column'
        isOpen={openModal}
        toggleModal={toggleModal}
      >
        <ColumnForm
          onClose={toggleModal}
          isColumn={true}
          submitData={submitForm}
          id={currentBoardId}
        />
      </Modal>
    </PageContainer>
  )
}
