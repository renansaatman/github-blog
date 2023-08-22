import { useParams } from "react-router-dom";
import { PostInfo } from "../../components/PostInfo";
import { Content, PostContainer } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  html_url: string
  title: string
  comments: number
  createdAt: string
  body: string
  login: string
}

export function Post() {
  const [post, setPost] = useState({} as PostProps)
  const { issueNumber } = useParams()

  async function fetchPost() {
    const response = await api.get(`/repos/renansaatman/github-blog/issues/${issueNumber}`)
    const {
      html_url,
      title,
      comments,
      created_at,
      body,
      user: { login }
    } = response.data

    const createdAt = formatDistanceToNow(new Date(created_at), {
      addSuffix: true,
      locale: ptBR
    })

    setPost({
      html_url,
      title,
      comments,
      createdAt,
      body,
      login
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo 
        postUrl={post.html_url}
        title={post.title}
        comments={post.comments}
        createdAt={post.createdAt}
        user={post.login}
      />

      <Content>
        {post && <ReactMarkdown children={post.body}/>}
      </Content>
    </PostContainer>
  )
}