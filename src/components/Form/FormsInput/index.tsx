import { Fragment } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'


import { IFormValues } from '../index'
import { InputBlock, InputField } from './styled'

type Props = {
  id: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

export const FormsInput = ({
  id,
  register,
  required
}: Props) => (
  <Fragment>
    <InputBlock>
      <InputField
        placeholder='type title'
        type="text"
        id={id}
        className="form-input"
        {...register(id, { required })}
      />
    </InputBlock>
  </Fragment>
)
