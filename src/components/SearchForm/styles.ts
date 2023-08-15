import styled from "styled-components";

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;
  width: 100%;
  max-width: 54rem;
`

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Subtitle = styled.h2`
  font-size: 1.125rem;
  color: ${props => props.theme["base-subtitle"]};
  line-height: 1.6;
`

export const Quantity = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme["base-span"]};
  line-height: 1.6;
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;

  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme["base-text"]};

  border-radius: 6px;
  border: 1px solid ${props => props.theme["base-border"]};
  background: ${props => props.theme["base-input"]};

  cursor: pointer;

  &::placeholder {
    color: ${props => props.theme["base-label"]};
    line-height: 1.6;
  }
`