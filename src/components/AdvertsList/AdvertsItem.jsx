import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from 'redux/adverts/selectors';
import { StyledFavoriteButton, StyledItem } from './AdvertsList.styled';
import {
  addToFavorites,
  removeFromFavorites,
  setCheckedFavorite,
} from 'redux/adverts/favoritesSlise';
import { Modal } from 'components/Modal/Modal';
import { Svg } from './Svg';

export const AdvertsItem = ({ advert }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const favorites = useSelector(selectFavorites);

  const checkedFavorite = useSelector(
    state => state.favorites.checkedFavorite[advert.id] || false
  );
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  const closeModal = () => {
    toggleModal();
    setSelectedAdvert(null);
  };
  const onLearnMoreBtnClick = advert => {
    toggleModal();
    setSelectedAdvert(advert);
  };

  const toggleFavoritesHandler = advertId => {
    const isFavorite = favorites.includes(advertId);
    const isChecked = !isFavorite;

    if (isFavorite) {
      dispatch(removeFromFavorites(advertId));
    } else {
      dispatch(addToFavorites(advertId));
    }
    dispatch(setCheckedFavorite({ advertId, isChecked }));
  };

  return (
    <>
      <StyledItem key={advert.id}>
        {isShowModal && selectedAdvert && (
          <Modal onClose={closeModal}>
            <div>Modal {selectedAdvert.make}</div>
          </Modal>
        )}
        <StyledFavoriteButton
          type="button"
          onClick={() => toggleFavoritesHandler(advert.id)}
          checked={checkedFavorite}
        >
          <Svg />
        </StyledFavoriteButton>

        <img
          src={advert.img || advert.photoLink}
          alt={advert.make}
          width="300"
        />

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
        <button type="button" onClick={() => onLearnMoreBtnClick(advert)}>
          Learn more
        </button>
      </StyledItem>
    </>
  );
};
