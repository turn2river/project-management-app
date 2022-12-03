import { db } from '../../firebase_config'
import { collection, deleteDoc } from '@firebase/firestore'

import { Button } from '../Button'

import { ConfirmationBlock } from './styled'

type Props = {
  id: string
}

export const ConfirmBlock = ({id}: Props) => {
  const handleClick = (currentId: string) => {
    const docRef = collection(db, 'boards', currentId)

    // @ts-expect-error type it
    deleteDoc(docRef)
  }

  return (
    <ConfirmationBlock>
      <Button
        handleClick={() => {}}
        text={'Yep'}
      />
      <Button
        handleClick={() => {}}
        text={'Nope'}
      />
    </ConfirmationBlock>
  )
}
