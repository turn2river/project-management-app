import styled from 'styled-components/macro'

export const MemberBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const MemberPhoto = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #667085;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export const MemberImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`

export const MemberName = styled.a`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #667085;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #667085;
  cursor: pointer;

  &:hover {
    color: #000;
  } 
`

export const MemberDescription = styled.div`
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  border: 1px solid #667085;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color: #667085;
`
