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
  };
}

export const TeamMember = ({
  data: {
    photo_path,
    name,
    description,
  },
}: Props) => (
  <MemberBlock>
    <MemberPhoto>
      <MemberImage src={photo_path} />
    </MemberPhoto>
    <MemberName>{name}</MemberName>
    <MemberDescription>{description}</MemberDescription>
  </MemberBlock>
)
