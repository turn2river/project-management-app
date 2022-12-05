import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../../firebase_config'
import { collection, getDocs, addDoc } from '@firebase/firestore'

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
  console.log(currentBoardId)
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)

  const [columns, setColumns] = useState<TColumn[]>([])
  const columnsCollectionRef = collection(db, 'columns')

  useEffect(() => {
    const getColumns = async () => {
      const data = await getDocs(columnsCollectionRef)
      // @ts-expect-error type it
      setColumns(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getColumns().catch(err => {
      console.log(err.message)
    })
  }, [])

  const currentColumns = columns.filter(column =>
    column.boardID === currentBoardId)
  // @ts-expect-error type it
  const submitForm = (data) => {
    addDoc(columnsCollectionRef, data)
    console.log(data)
  }

  return (
    <PageContainer>
      {currentColumns.length > 0 && currentColumns.map((column) =>
      // @ts-expect-error type it
        <BoardColumn key={column.id} data={column} />
      )}
      <Button
        text='Create new +'
        handleClick={toggleModal}
        isColumnButton
      />
      <Modal
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
