import { ReactNode } from 'react'

import {
  ModalContainer,
  ModalWindow,
  ModalCloseBtn,
} from './styled'

type TModal = {
  isOpen: boolean,
  children: ReactNode,
  toggleModal: () => void,
}

// используем компонент Modal как обертку в нужном месте
// клик со стейтом открытия обрабатываем на кнопке в нужном компоненте
// внутрь ModalWindow вставляем нужную форму или что угодно по ситуации

export const Modal = ({ isOpen, children, toggleModal }: TModal) => {

  return isOpen ? (
    <ModalContainer>
      <ModalWindow>
        <ModalCloseBtn onClick={toggleModal}/>
        {children}
      </ModalWindow>
    </ModalContainer>
  ) : null
}
