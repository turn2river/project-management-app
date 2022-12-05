import { SubmitHandler, useForm } from 'react-hook-form'

import { db } from '../../firebase_config'
import { collection, addDoc } from '@firebase/firestore'

import { Button } from '../Button'
import { FormsInput } from './FormsInput'
import { FormBlock } from './styled'

export interface IFormValues {
  title: string;
  description: string;
  user: string | null | undefined;
}
// @ts-expect-error type it
export const BoardForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>()

  const boardsCollectionRef = collection(db, 'boards')

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    addDoc(boardsCollectionRef, data)
    reset()
    onClose()
  }

  return (
    <FormBlock>
      <FormsInput
        id='title'
        register={register}
        required
      />
      <FormsInput
        id='description'
        register={register}
        required
      />
      <Button
        handleClick={handleSubmit(onSubmit)}
        text={'create new!'}
      />
    </FormBlock>
  )
}
