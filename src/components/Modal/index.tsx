import { ReactNode } from 'react'

import {
  ModalContainer,
  ModalHeader,
  ModalWindow,
  ModalCloseBtn,
  ModalTitle,
} from './styled'

type TModal = {
  isOpen: boolean,
  children: ReactNode,
  toggleModal: () => void,
  title?: string,
}

// используем компонент Modal как обертку в нужном месте
// клик со стейтом открытия обрабатываем на кнопке в нужном компоненте
// внутрь ModalWindow вставляем нужную форму или что угодно по ситуации

export const Modal = ({ isOpen, children, toggleModal, title }: TModal) => {

  return isOpen ? (
    <ModalContainer>
      <ModalWindow>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseBtn onClick={toggleModal}/>
        </ModalHeader>
        {children}
      </ModalWindow>
    </ModalContainer>
  ) : null
}
