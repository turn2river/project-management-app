import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../Button'

import { FormsInput } from './FormsInput'
import { FormBlock } from './styled'

export interface IFormValues {
  title: string;
}

export const BoardForm = () => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify((data)))
    reset()
  }

  return (
    <FormBlock>
      <FormsInput
        id="title"
        register={register}
        required
      />
      <Button handleClick={handleSubmit(onSubmit)} text={'create new!'} />
    </FormBlock>
  )
}
