import {
  PageContainer,
  TeamLabel,
  TeamLogo,
  TeamBlock,
  MembersList,
} from './styled'

import { TeamMember } from './TeamMember'
import { dataMembers } from '../../config/dataMembers'

export const TeamPage = () => (
  <PageContainer>
    <TeamBlock>
      <TeamLogo src='assets/head_logo.svg' />
      <TeamLabel>
        MONKEY TEAM
      </TeamLabel>
    </TeamBlock>
    <MembersList>
      {dataMembers.map((member) =>
        <TeamMember key={member.id} data={member} />
      )}
    </MembersList>
  </PageContainer>
)
