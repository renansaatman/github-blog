import { FaChevronLeft, FaArrowUpRightFromSquare, FaGithub, FaCalendarDay, FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostInfoContainer = styled.div`
  width: 100%;

  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  padding: 2rem;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: .5rem;
  line-height: 1.6;
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.blue};
  }

  cursor: default;
`

export const LinkSpan = styled.span`
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: default;
`

export const LinkIcon = styled(FaArrowUpRightFromSquare)`
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
`

export const ChevronIcon = styled(FaChevronLeft)`
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.3;

  color: ${props => props.theme["base-title"]};

  margin: 1.25rem 0 .5rem;
`

export const InfoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  color: ${props => props.theme["base-span"]}
`

export const Github = styled(FaGithub)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;
`

export const Calendar = styled(FaCalendarDay)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;
`

export const Comment = styled(FaComment)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;  
`