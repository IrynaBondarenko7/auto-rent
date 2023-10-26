import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from 'redux/adverts/selectors';
import {
  FiltrAdverts,
  fetchAdverts,
  loadMoreAdverts,
} from 'redux/adverts/operations';
import {
  StyledBtnLink,
  StyledErrorText,
  StyledList,
} from './AdvertsList.styled';
import { AdvertsItem } from './AdvertsItem';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export const AdvertsList = () => {
  const [page, setPage] = useState(1);

  const adverts = useSelector(selectAdverts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    const params = {
      page,
      signal: controller.signal,
    };
    if (page === 1) {
      dispatch(fetchAdverts(params));
    } else {
      dispatch(loadMoreAdverts(params));
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, page]);

  const loadMoreBtnClick = () => {
    setPage(page + 1);
  };

  const onSearchClick = (make, rentalPrice, minMileage, maxMileage) => {
    const params = {
      page,
      make,
      rentalPrice,
      minMileage,
      maxMileage,
    };
    dispatch(FiltrAdverts(params));
  };

  return (
    <>
      {isError && !isLoading && (
        <StyledErrorText>Something went wrong, try again!</StyledErrorText>
      )}
      {isLoading && <Loader />}
      <Filter onSearchClick={onSearchClick} />
      <StyledList>
        {adverts.map(advert => {
          return <AdvertsItem key={advert.id} advert={advert} />;
        })}
      </StyledList>
      <StyledBtnLink type="button" onClick={loadMoreBtnClick}>
        Load more
      </StyledBtnLink>
    </>
  );
};
