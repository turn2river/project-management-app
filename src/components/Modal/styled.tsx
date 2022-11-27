import styled from 'styled-components/macro'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(2px);
`

export const ModalWindow = styled.div`
  width: 340px;
  height: 240px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  padding: 10px;
  position: relative;
`

export const ModalCloseBtn = styled.div`
  background-image: url(assets/icon_close.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
