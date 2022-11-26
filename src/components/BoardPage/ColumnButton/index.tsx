import { ButtonWrapper } from './styled'

type TButton = {
  text: string,
  handleClick: () => void
}

export const ColumnButton = ({ text, handleClick }: TButton) => {
  return (
    <ButtonWrapper onClick={handleClick}>
      <span>{text}</span>
    </ButtonWrapper>
  )
}
