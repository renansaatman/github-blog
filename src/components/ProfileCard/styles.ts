import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6"
import { styled } from "styled-components"

export const Card = styled.div`
  border-radius: 10px;
  width: 54rem;
  height: 13.25rem;

  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Avatar = styled.img`
  width: 9.25rem;
  border-radius: 8px;
  margin-left: 2.5rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const TitleAndGithubLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 2rem;
`

export const GithubLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: .5rem;
  line-height: 1.6;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.blue};
  }
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

export const Title = styled.h1`
  line-height: 1.3;
  color: ${props => props.theme["base-title"]};
`

export const Text = styled.p`
  line-height: 1.6;
  color: ${props => props.theme["base-text"]};
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

  color: ${props => props.theme["base-subtitle"]}
`

export const Github = styled(FaGithub)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;
`

export const Building = styled(FaBuilding)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;
`

export const UserGroup = styled(FaUserGroup)`
  color: ${props => props.theme["base-label"]};
  font-size: 1.125rem;  
`