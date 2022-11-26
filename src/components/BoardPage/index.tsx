import { useParams } from 'react-router-dom'

import { BoardColumn } from './BoardColumn'
import { Button } from '../Button'

import { PageContainer } from './styled'

export const BoardPage = () => {
  //for work with BE in future
  const { id } = useParams()

  return (
    <PageContainer>
      <BoardColumn
        title='TO DO'
        count='0'
      />
      <BoardColumn
        title='IN PROGRESS'
        count='0'
      />
      <Button
        text='Create new +'
        handleClick={() => {}}
        customButton
      />
    </PageContainer>
  )
}
