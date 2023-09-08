import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  font-family: Manrope;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  border: none;
  margin: 0 auto;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
