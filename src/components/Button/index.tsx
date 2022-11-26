import { ButtonWrapper } from './styled'

type TButton = {
  text: string,
  handleClick: () => void,
  customButton?: boolean
}

export const Button = ({ text, handleClick, customButton }: TButton) => {
  return (
    <ButtonWrapper onClick={handleClick} isColumnButton={customButton}>
      <span>{text}</span>
    </ButtonWrapper>
  )
}
