import {
  StyledNavNoGoCatalogLink,
  StyledNoFavoritesText,
  StyledNoFavoritesWrap,
} from './NoFavorites.styled';

export const NoFavorites = () => {
  return (
    <StyledNoFavoritesWrap>
      <StyledNoFavoritesText>
        There are no favorite ads yet
      </StyledNoFavoritesText>
      <StyledNavNoGoCatalogLink to="/catalog">
        Go to the Catalog
      </StyledNavNoGoCatalogLink>
    </StyledNoFavoritesWrap>
  );
};
