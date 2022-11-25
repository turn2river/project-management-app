import { useParams } from 'react-router-dom'

import {
  PageContainer,
} from './styled'

import { dataBoards } from '../../config/dataBoards'
import { BoardComponent } from '../MainPage/BoardComponent'

export const BoardPage = () => {
  const { id } = useParams()

  return (
    <PageContainer>
      {id}
    </PageContainer>
  )
}