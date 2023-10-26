import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAllAdverts, selectIsLoading } from 'redux/adverts/selectors';
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
import { useEffect } from 'react';
import { fetchAllAdverts } from 'redux/adverts/operations';

export const Filter = ({ onSearchClick }) => {
  const adverts = useSelector(selectAllAdverts);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const price = searchParams.get('price');
  const minMileage = searchParams.get('minMileage');
  const maxMileage = searchParams.get('maxMileage');

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  //get makes without repetitions
  const arrMakes = adverts.map(el => el.make);
  const uniqueMakes = [...new Set(arrMakes)];

  let makeOptions = uniqueMakes.map(advert => ({
    value: advert,
    label: advert,
  }));

  //get rentalPrices without repetitions
  const arrPrices = adverts.map(el => el.rentalPrice);
  const uniquePrices = [...new Set(arrPrices)];

  let rentalPriceOptions = uniquePrices.map(advert => ({
    value: advert.slice(1),
    label: advert.slice(1),
  }));

  const handleOptionsParamsChange = (option, category) => {
    const currentSearchParams = Object.fromEntries(searchParams.entries());
    currentSearchParams[category] = option.value;
    setSearchParams(currentSearchParams);
  };

  const handleIputsParamsChange = (e, category) => {
    const currentSearchParams = Object.fromEntries(searchParams.entries());
    currentSearchParams[category] = e.target.value;
    setSearchParams(currentSearchParams);
  };

  const onSearchBtnClick = (make, rentalPrice, minMileage, maxMileage) => {
    onSearchClick(make, rentalPrice, minMileage, maxMileage);
  };

  return (
    <StyledFilterWrap>
      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Car brand</StyledFiltrTitle>
        <StyledBrandSelect
          options={makeOptions}
          placeholder="Enter the text"
          isLoading={isLoading}
          onChange={option => {
            handleOptionsParamsChange(option, 'brand');
          }}
        />
      </StyledFilterFieldWrap>

      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Price/ 1 hour</StyledFiltrTitle>
        <StyledPriceSelect
          options={rentalPriceOptions}
          placeholder="To $"
          isLoading={isLoading}
          onChange={option => {
            handleOptionsParamsChange(option, 'price');
          }}
        />
      </StyledFilterFieldWrap>

      <StyledFilterFieldWrap>
        <StyledFiltrTitle>Сar mileage / km</StyledFiltrTitle>
        <StyledInputWrap>
          <StyledInputLeft
            type="text"
            placeholder="From"
            onChange={e => {
              handleIputsParamsChange(e, 'minMileage');
            }}
          />
          <StyledInputRight
            type="text"
            placeholder="To"
            onChange={e => {
              handleIputsParamsChange(e, 'maxMileage');
            }}
          />
        </StyledInputWrap>
      </StyledFilterFieldWrap>

      <StyledSearchBtn
        type="button"
        onClick={() => onSearchBtnClick(brand, price, minMileage, maxMileage)}
      >
        Search
      </StyledSearchBtn>
    </StyledFilterWrap>
  );
};
