import { useParams } from 'react-router-dom'

import { PageContainer } from './styled'

import { dataBoards } from '../../config/dataBoards'
import { BoardComponent } from '../MainPage/BoardComponent'

export const BoardPage = () => {
  const { id: boardId } = useParams()
  const currentBoard = dataBoards.find((board) => (board.id).toString() === boardId)

  return (
    <PageContainer>
      <h1>{currentBoard?.description}</h1>
    </PageContainer>
  )
}
