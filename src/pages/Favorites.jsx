import { AdvertsItem } from 'components/AdvertsList/AdvertsItem';
import { StyledList } from 'components/AdvertsList/AdvertsList.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { NoFavorites } from 'components/NoFavorites/NoFavorites';

import { useSelector } from 'react-redux';

import { selectFavorites } from 'redux/adverts/selectors';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <StyledContainer>
      {favorites.length === 0 && <NoFavorites />}
      <StyledList>
        {favorites.map(advert => {
          return <AdvertsItem key={advert.id} advert={advert} />;
        })}
      </StyledList>
    </StyledContainer>
  );
}
