import { Labels, Quantity, SearchFormContainer, SearchInput, Subtitle } from "./styles";

interface SearchFormProps {
  total: number
}

export function SearchForm({ total }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <Labels>
        <Subtitle>Publicações</Subtitle>
        <Quantity>{`${total.toString()} ${total > 1 ? 'publicações' : 'publicação'}`}</Quantity>
      </Labels>
      <SearchInput 
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}