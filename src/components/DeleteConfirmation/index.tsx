import { db } from '../../firebase_config'
import { doc, deleteDoc } from '@firebase/firestore'

import { Button } from '../Button'

import { ConfirmationBlock, ConfirmTItle } from './styled'

type Props = {
  id: string
  onClose: () => void,
}

export const ConfirmBlock = ({id, onClose}: Props) => {
  const confirmDelete = (currentId: string) => {
    deleteDoc(doc(db, 'boards', currentId))
    onClose()
  }

  return (
    <ConfirmationBlock>
      <ConfirmTItle>Are you sure?</ConfirmTItle>
      <Button
        handleClick={() => confirmDelete(id)}
        text={'Yep'}
      />
      <Button
        handleClick={() => onClose()}
        text={'Nope'}
      />
    </ConfirmationBlock>
  )
}
