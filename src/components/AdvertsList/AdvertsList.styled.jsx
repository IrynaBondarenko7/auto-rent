import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
  margin-top: 50px;
`;

export const StyledItem = styled.li`
  width: calc((100% - 99px) / 4);
  display: flex;
  flex-direction: column;
`;

export const StyledFavoriteButton = styled.button`
  width: 30px;
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 1;
  top: 14px;
  right: 14px;
  svg {
    fill: ${props => (props.checked ? '#3470FF' : 'none')};
    stroke: ${props => (props.checked ? '#3470FF' : '#fff')};
  }
`;

export const StyledSvgWrapper = styled.div`
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 280px;
`;

export const StyledTextWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 3px;
`;

export const StyledModalTextWrap = styled(StyledTextWrap)`
  margin-top: 10px;
`;

export const StyledMakeDescription = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledModalMakeDescription = styled(StyledMakeDescription)`
  font-size: 18px;
`;

export const StyledModelDescription = styled(StyledMakeDescription)`
  color: #3470ff;
`;

export const StyledModalModelDescription = styled(StyledModelDescription)`
  font-size: 18px;
`;

export const StyledHeaderCardTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const StyledDetailsDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const StyledModalDetailsDescription = styled(StyledDetailsDescription)`
  margin-bottom: 4px;
`;

export const StyledBtnLink = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  justify-content: center;
  margin: 100px auto;
  background-color: transparent;
  border: none;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledBtnClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const StyledModalContentWrap = styled.div`
  padding: 40px;
  position: relative;
`;

export const StyledCarDescription = styled.div`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 24px;
`;

export const StyledAccessoriesTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 9px;
`;

export const StyledRentalTitle = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const StyledRentalConditionsWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledRentalDescription = styled.p`
  color: #363535;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  display: block;
  border-radius: 35px;
  background: #f9f9f9;
  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const StyledTelLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 24px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
