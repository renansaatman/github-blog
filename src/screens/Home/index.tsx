import { useEffect, useState } from "react"
import { PostCard } from "../../components/PostCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchForm } from "../../components/SearchForm"
import { api } from "../../lib/axios"
import { HomeContainer, Posts } from "./styles"

interface Post {
  number: number
  body: string
  comments: number
  created_at: string
  title: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts() {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:renansaatman/github-blog is:issue `
      }
    })

    setPosts(response.data.items)
  }
  
  useEffect(() => {
    fetchPosts()
  }, [])

  
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