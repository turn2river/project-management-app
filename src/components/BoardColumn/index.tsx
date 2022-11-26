import {
  ColumnBlock,
  ColumnCounter,
  ColumnHeader,
  ColumnOptions,
  ColumnTitle,
  ColumnWrapper
} from './styled'
import { Button } from '../Button'

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
      <Button text='+ Card' handleClick={() => {}} />
    </ColumnWrapper>
  )
}

