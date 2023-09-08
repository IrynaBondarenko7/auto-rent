import styled from 'styled-components';

export const StyledModalBackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  pointer-events: auto;
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
  z-index: 10;
`;
export const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 252px;
  max-width: 541px;
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
`;
