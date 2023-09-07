import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledItem = styled.li`
  width: calc((100% - 20px) / 3);
  outline: 1px solid #212121;
`;

export const StyledFavoriteButton = styled.button`
  svg {
    fill: ${props => (props.checked ? '#3470FF' : 'none')};
    stroke: ${props => (props.checked ? '#3470FF' : '#fff')};
  }
`;
