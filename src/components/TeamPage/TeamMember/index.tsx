import {
  MemberBlock,
  MemberPhoto,
  MemberName,
  MemberDescription,
  MemberImage,
} from './styled'

type Props = {
  data: {
    photo_path: string;
    name: string;
    description: string;
    github: string;
    id: number
  };
}

export const TeamMember = ({
  data: {
    photo_path,
    name,
    description,
    github,
    id
  },
}: Props) => (
  <MemberBlock>
    <MemberPhoto>
      <MemberImage src={photo_path} />
    </MemberPhoto>
    <MemberName
      href={github}
      target='_blank'
    >
      {name}
    </MemberName>
    <MemberDescription>{description}</MemberDescription>
  </MemberBlock>
)
