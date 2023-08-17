import { Avatar, 
        Building, 
        Card, 
        Github, 
        GithubLink, 
        Info, InfoArea, 
        LinkIcon, 
        LinkSpan, 
        ProfileContent, 
        TextArea, 
        Title, 
        TitleAndGithubLink, 
        Text, 
        UserGroup 
} from "./styles";

interface ProfileCardProps {
  avatar: string
  bio: string
  company: string | null
  user: string
  href: string
  name: string
  followers: number
}

export function ProfileCard({
  avatar,
  bio,
  company,
  user,
  href,
  name,
  followers
}: ProfileCardProps) {
  return (
    <Card>
        <Avatar src={avatar} alt="" />
        <ProfileContent>
          <TextArea>
            <TitleAndGithubLink>
              <Title>{name}</Title>
              <GithubLink href={href} target="_blank">
                <LinkSpan>github</LinkSpan>
                <LinkIcon />
              </GithubLink>
            </TitleAndGithubLink>
            <Text>
              {bio}
            </Text>
          </TextArea>

          <InfoArea>
            <Info>
              <Github />
              <span>{user}</span>
            </Info>
            {company && 
              <Info>
                <Building />
                <span>{company}</span>
              </Info>
            }
            <Info>
              <UserGroup />
              <span>{followers} seguidores</span>
            </Info>
          </InfoArea>
        </ProfileContent>
      </Card>
  )
}