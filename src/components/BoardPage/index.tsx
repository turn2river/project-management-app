import { useParams } from 'react-router-dom'

import { PageContainer } from './styled'

import { dataBoards } from '../../config/dataBoards'
import { BoardColumn } from '../BoardColumn'

export const BoardPage = () => {
  const { id: boardId } = useParams()
  const currentBoard = dataBoards.find((board) => (board.id).toString() === boardId)

  return (
    <PageContainer>
      <BoardColumn title='TO DO' count='0' />
      <BoardColumn title='IN PROGRESS' count='0' />
    </PageContainer>
  )
}
