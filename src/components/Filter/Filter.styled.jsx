import styled from 'styled-components';
import Select from 'react-select';

export const StyledFilterWrap = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const StyledFilterFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFiltrTitle = styled.p`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  margin-bottom: 8px;
`;

export const StyledBrandSelect = styled(Select)`
  width: 224px;
  z-index: 2;
  height: 48px;
`;
export const StyledPriceSelect = styled(Select)`
  width: 125px;
  z-index: 2;
`;

export const StyledInputWrap = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  align-items: center;
  flex-shrink: 0;

  border: none;
  padding-left: 18px;
  background: #f7f7fb;
  height: 48px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;

  &:focus {
    outline: 1px solid #8a8a89;
  }
`;

export const StyledInputLeft = styled(StyledInput)`
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0px 0px 14px;
`;

export const StyledInputRight = styled(StyledInput)`
  border-radius: 0px 14px 14px 0px;
`;
