import styled from 'styled-components/macro'

export const ProjectCard = styled.div`
  min-width: 300px;
  height: 176px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  padding: 20px;
  position: relative;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
`

export const ProjectName = styled.span`
  font-weight: 700;
  font-size: 20px;
  max-width: 250px;
  padding-right: 20px;
  letter-spacing: -0.02em;
  color: #1D2939;
  text-transform: uppercase;
`

export const ProjectOptions = styled.div`
  min-width: 25px;
  height: 5px;
  background-image: url(/assets/icon_dots.svg);
  background-size: contain;
  margin-left: auto;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 9px;

  &:hover {
    transform: scale(1.1);
  }
`

export const ProjectDesc = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #98A2B3;
  padding-bottom: 20px;
`

// reaname to openBoard if there will be no options
export const LinkLabel = styled.div`
  background: #FCFCFD;
  border: 1px solid rgba(102,112,133,0.5);
  border-radius: 8px;
  padding: 5px;
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 20px;

  &:hover {
    border-color: #000;
  }
`
