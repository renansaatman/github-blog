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

export function ProfileCard() {
  return (
    <Card>
        <Avatar src="https://avatars.githubusercontent.com/u/29419643?v=4" alt="" />
        <ProfileContent>
          <TextArea>
            <TitleAndGithubLink>
              <Title>Renan Saatman</Title>
              <GithubLink href="https://github.com/renansaatman" target="_blank">
                <LinkSpan>github</LinkSpan>
                <LinkIcon />
              </GithubLink>
            </TitleAndGithubLink>
            <Text>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </Text>
          </TextArea>

          <InfoArea>
            <Info>
              <Github />
              <span>renansaatman</span>
            </Info>
            <Info>
            <Building />
              <span>Rocketseat</span>
            </Info>
            <Info>
              <UserGroup />
              <span>32 seguidores</span>
            </Info>
          </InfoArea>
        </ProfileContent>
      </Card>
  )
}