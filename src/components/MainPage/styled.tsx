import styled from 'styled-components/macro'

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const Header = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 100%;
`

export const HeaderColor = styled(Header)`
  color: #7B61FF;
  margin-left: 5px;
`

export const ProjectsBlock = styled.div`
  display: flex;
  gap: 40px;
`

export const ProjectCard = styled.div`
  width: 320px;
  height: 176px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  padding: 20px;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 5px;
  letter-spacing: -0.02em;
  color: #1D2939;
  text-transform: uppercase;
`

export const ProjectOptions = styled.div`
  min-width: 25px;
  height: 5px;
  background-image: url(assets/icon_dots.svg);
  background-size: contain;
  margin-left: auto;
  cursor: pointer;

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
`

export const AddNewProject = styled.button`
  width: 320px;
  height: 49px;
  background: #FCFCFD;
  border: 1px solid rgba(102, 112, 133, 0.5);
  border-radius: 8px;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: rgba(102, 112, 133, 0.5);

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
`
