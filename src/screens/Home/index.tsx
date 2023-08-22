import { useContext } from "react"
import { PostCard } from "../../components/PostCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer, Posts } from "./styles"
import { ApiContext } from "../../contexts/apiContext"

import { formatDistanceToNow } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

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
          const createdAt = formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR
          })

          return (
            <PostCard 
              key={post.number}
              title={post.title}
              body={post.body}
              number={post.number}
              createdAt={createdAt}
            />
          )
        })}
      </Posts>
    </HomeContainer>
  )
}