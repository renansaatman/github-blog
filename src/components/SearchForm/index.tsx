import { Labels, Quantity, SearchFormContainer, SearchInput, Subtitle } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <Labels>
        <Subtitle>Publicações</Subtitle>
        <Quantity>6 publicações</Quantity>
      </Labels>
      <SearchInput 
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}