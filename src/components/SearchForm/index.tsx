import { useContext } from "react";
import { Labels, Quantity, SearchFormContainer, SearchInput, Subtitle } from "./styles";
import { ApiContext } from "../../contexts/apiContext";

interface SearchFormProps {
  total: number
}

export function SearchForm({ total }: SearchFormProps) {
  const { fetchPosts } = useContext(ApiContext)

  return (
    <SearchFormContainer>
      <Labels>
        <Subtitle>Publicações</Subtitle>
        <Quantity>{`${total.toString()} ${total > 1 ? 'publicações' : 'publicação'}`}</Quantity>
      </Labels>
      <SearchInput 
        placeholder="Buscar conteúdo"
        onBlur={e => fetchPosts(e.target.value)}
      />
    </SearchFormContainer>
  )
}