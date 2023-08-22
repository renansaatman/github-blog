import { PostCardContainer, 
        SuperiorArea, 
        Title, 
        DateSpan, 
        Content 
} from "./styles";

interface PostCardProps {
  title: string
  body: string
}

export function PostCard({ title, body }: PostCardProps) {
  return (
    <PostCardContainer>
      <SuperiorArea>
        <Title>{title}</Title>
        <DateSpan>Há 1 dia</DateSpan>
      </SuperiorArea>
      <Content>
        {body}
      </Content>
    </PostCardContainer>
  )
}