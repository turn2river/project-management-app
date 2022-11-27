import { useParams } from 'react-router-dom'

import { BoardColumn } from './BoardColumn'
import { Button } from '../Button'

import { PageContainer } from './styled'

export const BoardPage = () => {
  //for work with BE in future
  const { id } = useParams()

  return (
    <PageContainer>
      <BoardColumn title='TO DO' />
      <BoardColumn title='IN PROGRESS' />
      <Button
        text='Create new +'
        handleClick={() => {}}
        customButton
      />
    </PageContainer>
  )
}
