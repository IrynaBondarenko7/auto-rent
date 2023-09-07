import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #2980b9;
  padding: 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 35%;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  background-color: #fff;
  padding: 5px 15px;
  color: #2980b9;
  border-radius: 8px;
`;

export const StyledLinkWrap = styled.div`
  display: flex;
  gap: 30px;
`;
