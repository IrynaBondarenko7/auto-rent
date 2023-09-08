import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectAdverts } from 'redux/adverts/selectors';
import { fetchAdverts, loadMoreAdverts } from 'redux/adverts/operations';
import { StyledBtnLink, StyledList } from './AdvertsList.styled';
import { AdvertsItem } from './AdvertsItem';

export const AdvertsList = () => {
  const [page, setPage] = useState(1);

  const adverts = useSelector(selectAdverts);
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

  return (
    <>
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
