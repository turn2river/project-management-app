import { Button } from '../Button'

import {
  PageContainer,
  MainTitle,
  Header,
  HeaderColor,
  ProjectsBlock,
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
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
      <ProjectCard>
        <CardHeader>
          <ProjectName>this is project name</ProjectName>
          <ProjectOptions />
        </CardHeader>
        <ProjectDesc>
         this is project description
         Lorem, ipsum dolor sit amet
         consectetur adipisicing elit. Distinctio, totam?
        </ProjectDesc>
      </ProjectCard>
      <Button
        text='+ project'
        handleClick={() => {}}
      />
    </ProjectsBlock>
  </PageContainer>
)
