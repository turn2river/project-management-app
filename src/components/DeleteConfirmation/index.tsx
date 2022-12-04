import { db } from '../../firebase_config'
import { doc, deleteDoc } from '@firebase/firestore'

import { Button } from '../Button'

import { ConfirmationBlock, ConfirmTItle } from './styled'

type Props = {
  id: string
}

export const ConfirmBlock = ({id}: Props) => {
  const confirmDelete = (currentId: string) => {
    // const docRef = collection(db, 'boards', currentId)
    deleteDoc(doc(db, 'boards', currentId))

    console.log(currentId)
    console.log(typeof(currentId))
  }

  return (
    <ConfirmationBlock>
      <ConfirmTItle>Are you sure?</ConfirmTItle>
      <Button
        handleClick={() => confirmDelete(id)}
        text={'Yep'}
      />
      <Button
        handleClick={() => {}}
        text={'Nope'}
      />
    </ConfirmationBlock>
  )
}
