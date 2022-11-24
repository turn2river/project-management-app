import {
  PageContainer,
  MainTitle,
  Header,
  HeaderColor,
  ProjectsBlock,
  CreatedProject,
  AddNewProject
} from './styled'

import {
  Logo,
  DescriptionHead 
} from '../WellcomePage/styled'

export const MainPage = () => (
  <PageContainer>
    <MainTitle>
      <Logo />
      <Header>
        Hey,
      </Header>
      <HeaderColor>
        username
      </HeaderColor>
    </MainTitle>
    <DescriptionHead>SElect oR create a project</DescriptionHead>
    <ProjectsBlock>
      <CreatedProject />
      <CreatedProject />
      <AddNewProject>
        <span>+ Project</span>
      </AddNewProject>
    </ProjectsBlock>
  </PageContainer>
)
