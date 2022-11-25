import {
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
} from './styled'

type Props = {
  data: {
    name: string;
    description: string;
  };
}

export const BoardComponent = ({
  data: {
    name,
    description,
  },
}: Props) => (
  <ProjectCard>
    <CardHeader>
      <ProjectName>{name}</ProjectName>
      <ProjectOptions />
    </CardHeader>
    <ProjectDesc>
      {description}
    </ProjectDesc>
  </ProjectCard>
)
