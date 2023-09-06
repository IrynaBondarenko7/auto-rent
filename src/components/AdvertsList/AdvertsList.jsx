import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectAdverts } from 'redux/adverts/selectors';
import { fetchAdverts } from 'redux/adverts/operations';
import { StyledItem, StyledList } from './AdvertsList.styled';
import { Modal } from 'components/Modal/Modal';

export const AdvertsList = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  const openModal = advert => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    toggleModal();
    setSelectedAdvert(null);
  };
  const onLearnMoreBtnClick = advert => {
    toggleModal();
    openModal(advert);
  };

  return (
    <>
      <StyledList>
        {adverts.map(advert => {
          return (
            <StyledItem key={advert.id}>
              {isShowModal && selectedAdvert && (
                <Modal onClose={closeModal}>
                  <div>Modal {selectedAdvert.make}</div>
                </Modal>
              )}
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
          );
        })}
      </StyledList>
    </>
  );
};
