import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '../Button'
import { FormsInput } from './FormsInput'
import { FormBlock } from './styled'

export interface IFormValues {
  title: string;
  description: string;
  boardID: string;
}

type TForm = {
  onClose: () => void
  isColumn: boolean
  submitData: SubmitHandler<IFormValues>
  id?: string
}

export const ColumnForm = ({ onClose, isColumn, submitData, id }: TForm) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (id) {
      data.boardID = id
    }
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
        text='create new!'
      />
    </FormBlock>
  )
}
