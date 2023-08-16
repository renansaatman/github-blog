import { PostCard } from "../../components/PostCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer, Posts } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
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