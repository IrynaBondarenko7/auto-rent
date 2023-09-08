import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from 'redux/adverts/selectors';
import {
  StyledDetailsDescription,
  StyledFavoriteButton,
  StyledHeaderCardTextWrap,
  StyledImg,
  StyledItem,
  StyledMakeDescription,
  StyledModelDescription,
  StyledSvgWrapper,
  StyledTextWrap,
} from './AdvertsList.styled';
import {
  addToFavorites,
  removeFromFavorites,
  setCheckedFavorite,
} from 'redux/adverts/favoritesSlise';
import { Modal } from 'components/Modal/Modal';
import { Svg } from './Svg';
import { accessoriesMap } from './constants';
import { StyledBtn } from 'components/Buttons/Buttons.styled';
import { ModalContent } from './ModalContent';

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

  const adress = advert.address.split(',');

  let accessories = '';

  for (const keyword in accessoriesMap) {
    if (accessoriesMap[keyword].test(advert.accessories)) {
      accessories = keyword.charAt(0).toUpperCase() + keyword.slice(1);
      break;
    }
  }

  return (
    <>
      <StyledItem key={advert.id}>
        {isShowModal && selectedAdvert && (
          <Modal onClose={closeModal}>
            <ModalContent advert={advert} onClose={closeModal} />
          </Modal>
        )}

        <StyledSvgWrapper>
          <StyledFavoriteButton
            type="button"
            onClick={() => toggleFavoritesHandler(advert.id)}
            checked={checkedFavorite}
          >
            <Svg />
          </StyledFavoriteButton>
          <StyledImg
            src={advert.img || advert.photoLink}
            alt={advert.make}
            width="270"
          />
        </StyledSvgWrapper>
        <StyledHeaderCardTextWrap>
          <StyledTextWrap>
            <StyledMakeDescription>{advert.make}</StyledMakeDescription>
            <StyledModelDescription>{advert.model},</StyledModelDescription>
            <StyledMakeDescription>{advert.year}</StyledMakeDescription>
          </StyledTextWrap>
          <StyledMakeDescription>{advert.rentalPrice}</StyledMakeDescription>
        </StyledHeaderCardTextWrap>

        <StyledDetailsDescription>
          {adress[1]} | {adress[2]} | {advert.rentalCompany} | Premium{' '}
          {advert.type} | {advert.model} | {advert.id} | {accessories}
        </StyledDetailsDescription>

        <StyledBtn type="button" onClick={() => onLearnMoreBtnClick(advert)}>
          Learn more
        </StyledBtn>
      </StyledItem>
    </>
  );
};
