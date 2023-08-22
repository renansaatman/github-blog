import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

export const PostCardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;

  background: ${props => props.theme["base-post"]};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  cursor: pointer;

  transition: .3s border;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
  }
`

export const SuperiorArea = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme["base-title"]};
  line-height: 1.6;

  width: 100%;
  max-width: 17.68rem;
`

export const DateSpan = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme["base-span"]};
  line-height: 1.6;
`

export const Content = styled(ReactMarkdown)`
  line-height: 1.6;
  color: ${props => props.theme["base-text"]};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
    
`