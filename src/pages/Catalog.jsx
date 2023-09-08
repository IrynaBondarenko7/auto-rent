import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { StyledContainer } from 'components/Container/Container.styled';
import { Filter } from 'components/Filter/Filter';

export default function Catalog() {
  return (
    <StyledContainer>
      <Filter />
      <AdvertsList />
    </StyledContainer>
  );
}
