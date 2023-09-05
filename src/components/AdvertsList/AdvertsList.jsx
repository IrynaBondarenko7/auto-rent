import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectAdverts } from 'redux/adverts/selectors';
import { fetchAdverts } from 'redux/adverts/operations';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  console.log(adverts);

  return (
    <ul>
      {adverts.map(advert => {
        return (
          <li key={advert.id}>
            <img src={advert.img || advert.photoLink} alt={advert.make} />
            <h3>{advert.make}</h3>
            <h3>{advert.model}</h3>
            <p>{advert.year}</p>
            <p>{advert.rentalPrice}</p>
            <p>{advert.address}</p>
            <p>{advert.rentalCompany}</p>
            <p>Premium {advert.type}</p>
            <p>{advert.model}</p>
            <p>{advert.id}</p>
            <p>{advert.functionalities}</p>
            <button type="button">Learn more</button>
          </li>
        );
      })}
    </ul>
  );
};
