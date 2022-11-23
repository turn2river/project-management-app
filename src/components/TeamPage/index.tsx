import {
  PageContainer,
  TeamLabel,
  TeamLogo,
  TeamBlock,
} from './styled'

export const TeamPage = () => (
  <PageContainer>
    <TeamBlock>
      <TeamLogo src='assets/head_logo.svg' />
      <TeamLabel>
        MONKEY TEAM
      </TeamLabel>
    </TeamBlock>
  </PageContainer>
)
