import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 54rem;

  margin: -5.5rem auto 0;
`

export const Content = styled.div`
  padding: 2.5rem 2rem;
`

export const Markdown = styled(ReactMarkdown)`
  white-space: "pre-wrap";
  line-height: 1.6;
  hyphens: "auto";

  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
    text-decoration-line: underline;
  }

  code {
    background-color: ${props => props.theme["base-post"]};
    padding: .2rem .4rem;
    border-radius: 6px;
  }

  pre {
    margin: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme["base-post"]};

    border-radius: 6px;

    code {
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }
  }

  h2 {
    margin: 1rem auto;
  }

  ul {
    margin-top: 1rem;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  ol {
    margin-top: 1rem;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`