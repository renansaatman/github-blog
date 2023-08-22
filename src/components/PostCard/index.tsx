import { useNavigate } from "react-router-dom";
import { PostCardContainer, 
        SuperiorArea, 
        Title, 
        DateSpan, 
        Content 
} from "./styles";

interface PostCardProps {
  title: string
  body: string
  number: number
  createdAt: string
}

export function PostCard({ title, body, number, createdAt }: PostCardProps) {
  const navigate = useNavigate()
  function handleOnClick() {
    navigate(`/post/${number}`)
  }
  return (
    <PostCardContainer onClick={handleOnClick}>
      <SuperiorArea>
        <Title>{title}</Title>
        <DateSpan>{createdAt}</DateSpan>
      </SuperiorArea>
      <Content>
        {body}
      </Content>
    </PostCardContainer>
  )
}