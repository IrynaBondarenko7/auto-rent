import styled from 'styled-components';
import { StyledNavLink } from 'components/HomeDescription/HomeDescription.styled';

export const StyledNavNoGoCatalogLink = styled(StyledNavLink)`
  width: 220px;
`;

export const StyledNoFavoritesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  justify-content: center;
  gap: 100px;
`;

export const StyledNoFavoritesText = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;
