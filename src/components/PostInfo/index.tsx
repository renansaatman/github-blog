import { Calendar, 
        ChevronIcon, 
        CustomLink, 
        Github, 
        Info, 
        InfoArea, 
        LinkIcon, 
        LinkSpan, 
        Links, 
        PostInfoContainer, 
        Title,
        Comment
} from "./styles";

interface PostInfoProps {
  postUrl: string
  title: string
  comments: number
  createdAt: string
  user: string
}

export function PostInfo({postUrl, title, comments, createdAt, user}: PostInfoProps) {
  
  return (
    <PostInfoContainer>
      <Links>
        <CustomLink to='/'>
          <ChevronIcon />
          <LinkSpan>voltar</LinkSpan>
        </CustomLink>

        <CustomLink to={postUrl} target="_blank">
          <LinkSpan>ver no github</LinkSpan>
          <LinkIcon />
        </CustomLink>
      </Links>

      <Title>{title}</Title>

      <InfoArea>
        <Info>
          <Github />
          <span>{user}</span>
        </Info>
        <Info>
        <Calendar />
          <span>{createdAt}</span>
        </Info>
        <Info>
          <Comment />
          <span>{comments} comentários</span>
        </Info>
      </InfoArea>
    </PostInfoContainer>
  )
}