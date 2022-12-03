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
    title: string;
    description: string;
  };
}

export const BoardComponent = ({
  data: {
    id,
    title,
    description,
  },
}: Props) => (
  <ProjectCard>
    <CardHeader>
      <ProjectName>{title}</ProjectName>
      <ProjectOptions />
    </CardHeader>
    <ProjectDesc>
      {description}
    </ProjectDesc>
  </ProjectCard>
)
