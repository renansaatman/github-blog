import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  number: number
  body: string
  comments: number
  created_at: string
  title: string
}

interface ApiContextProps {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

export const ApiContext = createContext({} as ApiContextProps)

interface ApiContextProviderProps {
  children: ReactNode
}


export function ApiContextProvider({ children }: ApiContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:renansaatman/github-blog is:issue ${query ? query : ''}`
      }
    })

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <ApiContext.Provider
      value={{
        posts,
        fetchPosts,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}