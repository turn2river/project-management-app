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
  };
}

export const TeamMember = ({
  data: {
    photo_path,
    name,
    description,
    github,
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
