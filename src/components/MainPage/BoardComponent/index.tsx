import {
  ProjectCard,
  ProjectOptions,
  CardHeader,
  ProjectDesc,
  ProjectName,
} from './styled'

type Props = {
  data: {
    id: number
    name: string;
    description: string;
  };
}

export const BoardComponent = ({
  data: {
    id,
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
