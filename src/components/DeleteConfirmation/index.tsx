import { Button } from '../Button'

import { ConfirmationBlock, ConfirmTItle } from './styled'

type Props = {
  onClose: () => void,
  onDelete: () => void,
}

export const DeleteConfirmationBlock = ({onClose, onDelete}: Props) => {
  const confirmDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <ConfirmationBlock>
      <ConfirmTItle>Are you sure?</ConfirmTItle>
      <Button
        handleClick={() => confirmDelete()}
        text={'Yep'}
      />
      <Button
        handleClick={() => onClose()}
        text={'Nope'}
      />
    </ConfirmationBlock>
  )
}
