import { SubmitHandler, useForm } from 'react-hook-form'
import { auth } from '../../firebase_config'

import { Button } from '../Button'
import { FormsInput } from './FormsInput'
import { FormBlock } from './styled'

export interface IFormValues {
  title: string;
  description: string;
  user: string | null | undefined;
}

export const BoardForm = () => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    data.user = auth.currentUser?.email
    alert(JSON.stringify((data)))
    reset()
  }

  return (
    <FormBlock>
      <FormsInput
        id='title'
        register={register}
        required
      />
      <FormsInput
        id="description"
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
