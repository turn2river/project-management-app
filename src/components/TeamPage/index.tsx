import {
  PageContainer,
  TeamLabel,
  TeamLogo,
  TeamBlock,
  MembersList,
} from './styled'

import { TeamMember } from './TeamMember'

export const TeamPage = () => (
  <PageContainer>
    <TeamBlock>
      <TeamLogo src='assets/head_logo.svg' />
      <TeamLabel>
        MONKEY TEAM
      </TeamLabel>
    </TeamBlock>
    <MembersList>
      <TeamMember />
    </MembersList>
  </PageContainer>
)
