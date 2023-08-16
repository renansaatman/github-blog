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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Links>
        <CustomLink to='/'>
          <ChevronIcon />
          <LinkSpan>voltar</LinkSpan>
        </CustomLink>

        <CustomLink to='https://github.com/renansaatman'>
          <LinkSpan>ver no github</LinkSpan>
          <LinkIcon />
        </CustomLink>
      </Links>

      <Title>JavaScript data types and data structures</Title>

      <InfoArea>
        <Info>
          <Github />
          <span>renansaatman</span>
        </Info>
        <Info>
        <Calendar />
          <span>Há 1 dia</span>
        </Info>
        <Info>
          <Comment />
          <span>5 comentários</span>
        </Info>
      </InfoArea>
    </PostInfoContainer>
  )
}