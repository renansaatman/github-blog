import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
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

interface userInfoProps {
  avatar_url: string
  bio: string
  company: string
  login: string
  html_url: string
  name: string
  followers: number
}

export function ProfileCard() {
  const [userInfo, setUserInfo] = useState({} as userInfoProps)

  async function fetchUserInfo() {
    const response = await api.get('/users/renansaatman')

    setUserInfo(response.data)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <Card>
        <Avatar src={userInfo.avatar_url} alt="" />
        <ProfileContent>
          <TextArea>
            <TitleAndGithubLink>
              <Title>{userInfo.name}</Title>
              <GithubLink href={userInfo.html_url} target="_blank">
                <LinkSpan>github</LinkSpan>
                <LinkIcon />
              </GithubLink>
            </TitleAndGithubLink>
            <Text>
              {userInfo.bio}
            </Text>
          </TextArea>

          <InfoArea>
            <Info>
              <Github />
              <span>{userInfo.login}</span>
            </Info>
            {userInfo.company && 
              <Info>
                <Building />
                <span>{userInfo.company}</span>
              </Info>
            }
            <Info>
              <UserGroup />
              <span>{userInfo.followers} seguidores</span>
            </Info>
          </InfoArea>
        </ProfileContent>
      </Card>
  )
}