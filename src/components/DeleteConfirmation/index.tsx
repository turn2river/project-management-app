import { db } from '../../firebase_config'
import { collection, deleteDoc } from '@firebase/firestore'

import { Button } from '../Button'

import { ConfirmationBlock, ConfirmTItle } from './styled'

type Props = {
  id: string
}

export const ConfirmBlock = ({id}: Props) => {
  const confrimDelete = (currentId: string) => {
    const docRef = collection(db, 'boards', currentId)

    // @ts-expect-error type it
    deleteDoc(docRef)
  }

  return (
    <ConfirmationBlock>
      <ConfirmTItle>Are you sure?</ConfirmTItle>
      <Button
        handleClick={confrimDelete(id)}
        text={'Yep'}
      />
      <Button
        handleClick={() => {}}
        text={'Nope'}
      />
    </ConfirmationBlock>
  )
}
