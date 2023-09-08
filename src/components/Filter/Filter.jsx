import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import {
  StyledBrandSelect,
  StyledFilterFieldWrap,
  StyledFilterWrap,
  StyledFiltrTitle,
  StyledInputLeft,
  StyledInputRight,
  StyledInputWrap,
  StyledPriceSelect,
} from './Filter.styled';
import { StyledSearchBtn } from 'components/Buttons/Buttons.styled';

export const Filter = () => {
  const adverts = useSelector(selectAdverts);

  let makeOptions = adverts.map(advert => ({
    value: advert.make,
    label: advert.make,
  }));

  let rentalPriceOptions = adverts.map(advert => ({
    value: advert.rentalPrice.slice(1),
    label: advert.rentalPrice.slice(1),
  }));

  return (
    <StyledFilterWrap>
      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Car brand</StyledFiltrTitle>
        <StyledBrandSelect options={makeOptions} placeholder="Enter the text" />
      </StyledFilterFieldWrap>

      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Price/ 1 hour</StyledFiltrTitle>
        <StyledPriceSelect options={rentalPriceOptions} placeholder="To $" />
      </StyledFilterFieldWrap>

      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Сar mileage / km</StyledFiltrTitle>
        <StyledInputWrap>
          <StyledInputLeft type="text" placeholder="From" />
          <StyledInputRight type="text" placeholder="To" />
        </StyledInputWrap>
      </StyledFilterFieldWrap>

      <StyledSearchBtn type="button">Search</StyledSearchBtn>
    </StyledFilterWrap>
  );
};
