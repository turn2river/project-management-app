import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '../Button'
import { FormsInput } from './FormsInput'
import { FormBlock } from './styled'

export interface IFormValues {
  title: string;
  description: string;
}
// @ts-expect-error type it
export const BoardForm = ({ onClose, isColumn, submitData }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    submitData(data)
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
      {!isColumn && <FormsInput
        id='description'
        register={register}
        required
      />}
      <Button
        handleClick={handleSubmit(onSubmit)}
        text={'create new!'}
      />
    </FormBlock>
  )
}
