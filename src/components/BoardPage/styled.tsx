import styled from 'styled-components/macro'
import { customScrollbar } from '../../globalStyles'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  padding: 36px 0;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  overflow-x: auto;

  ${customScrollbar};
`
