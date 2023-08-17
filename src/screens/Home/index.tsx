import { useEffect, useState } from "react"
import { PostCard } from "../../components/PostCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchForm } from "../../components/SearchForm"
import { api } from "../../lib/axios"
import { HomeContainer, Posts } from "./styles"

interface userInfoProps {
  avatar_url: string
  bio: string
  company: string
  login: string
  html_url: string
  name: string
  followers: number
}

export function Home() {
  const [userInfo, setUserInfo] = useState({} as userInfoProps)

  async function fetchUserInfo() {
    const response = await api.get('/users/renansaatman')

    setUserInfo(response.data)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])
  
  return (
    <HomeContainer>
      {userInfo && 
        <ProfileCard 
          avatar={userInfo.avatar_url}
          bio={userInfo.bio}
          company={userInfo.company}
          user={userInfo.login}
          href={userInfo.html_url}
          name={userInfo.name}
          followers={userInfo.followers}
        />
      }
      <SearchForm />
      <Posts>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Posts>
    </HomeContainer>
  )
}