import { useContext } from "react"
import { PostCard } from "../../components/PostCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer, Posts } from "./styles"
import { ApiContext } from "../../contexts/apiContext"

export function Home() {
  const { posts } = useContext(ApiContext)
 
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm 
        total={posts.length}
      />
      <Posts>
        {posts && posts.map(post => {
          return (
            <PostCard 
              key={post.number}
              title={post.title}
              body={post.body}
            />
          )
        })}
      </Posts>
    </HomeContainer>
  )
}