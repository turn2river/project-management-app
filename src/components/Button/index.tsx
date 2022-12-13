import { ButtonWrapper } from './styled'

type TButton = {
  text: string,
  handleClick: () => void,
  // customButton?: boolean
  isColumnButton?: boolean,
  isDeleteButton?: boolean,
}

export const Button = ({
  text,
  handleClick,
  isColumnButton,
  isDeleteButton
}: TButton) => {
  return (
    <ButtonWrapper
      onClick={handleClick}
      isColumnButton={isColumnButton}
      isDeleteButton={isDeleteButton}
    >
      <span>{text}</span>
    </ButtonWrapper>
  )
}
