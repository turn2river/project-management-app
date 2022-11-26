import {
  ColumnBlock,
  ColumnCounter,
  ColumnHeader,
  ColumnOptions,
  ColumnTitle,
  ColumnWrapper
} from './styled'
import { Button } from '../../Button'
import { BoardTicket } from './BoardTicket'

type TColumn = {
  title: string,
  count: string,
}

export const BoardColumn = ({ title, count }: TColumn) => {
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnBlock>
          <ColumnTitle>{title}</ColumnTitle>
          <ColumnCounter>{count}</ColumnCounter>
        </ColumnBlock>
        <ColumnOptions />
      </ColumnHeader>
      <BoardTicket
        title='test title'
        description='test text for ticket'
        count='1'
      />
      <Button text='+ Card' handleClick={() => {}} />
    </ColumnWrapper>
  )
}
