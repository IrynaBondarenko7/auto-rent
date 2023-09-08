import {
  StyledAccessoriesTitle,
  StyledBtnClose,
  StyledCarDescription,
  StyledImg,
  StyledModalContentWrap,
  StyledModalDetailsDescription,
  StyledModalMakeDescription,
  StyledModalModelDescription,
  StyledModalTextWrap,
  StyledRentalConditionsWrap,
  StyledRentalDescription,
  StyledRentalTitle,
  StyledTelLink,
} from './AdvertsList.styled';
import { CloseSvg } from './Svg';
import { accessoriesMap } from './constants';

export const ModalContent = ({ advert, onClose }) => {
  const adress = advert.address.split(',');

  let accessories = '';

  for (const keyword in accessoriesMap) {
    if (accessoriesMap[keyword].test(advert.accessories)) {
      accessories = keyword.charAt(0).toUpperCase() + keyword.slice(1);
      break;
    }
  }

  const rentalConditions = advert.rentalConditions.split('\n');
  const age = rentalConditions[0].split(':');
  const minAge = age[1];

  const mileage = advert.mileage
    .toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })
    .replace(/\.000$/, '');

  return (
    <StyledModalContentWrap>
      <StyledBtnClose type="button" onClick={onClose}>
        <CloseSvg size={24} />
      </StyledBtnClose>
      <StyledImg
        src={advert.img || advert.photoLink}
        alt={advert.make}
        width="270"
      />
      <StyledModalTextWrap>
        <StyledModalMakeDescription>{advert.make}</StyledModalMakeDescription>
        <StyledModalModelDescription>
          {advert.model},
        </StyledModalModelDescription>
        <StyledModalMakeDescription>{advert.year}</StyledModalMakeDescription>
      </StyledModalTextWrap>
      <StyledModalDetailsDescription>
        {adress[1]} | {adress[2]} | {advert.rentalCompany} | {advert.type}
      </StyledModalDetailsDescription>
      <StyledModalDetailsDescription>
        {advert.model} | {advert.id} | {accessories}
      </StyledModalDetailsDescription>
      <StyledCarDescription>{advert.description}</StyledCarDescription>
      <StyledAccessoriesTitle>
        Accessories and functionalities:
      </StyledAccessoriesTitle>
      <StyledModalDetailsDescription>
        {advert.accessories[0]} | {advert.accessories[1]} |{' '}
        {advert.accessories[2]}
      </StyledModalDetailsDescription>
      <StyledModalDetailsDescription>
        {advert.functionalities[0]} | {advert.functionalities[1]} |{' '}
        {advert.functionalities[2]}
      </StyledModalDetailsDescription>
      <StyledRentalTitle>Rental Conditions:</StyledRentalTitle>
      <StyledRentalConditionsWrap>
        <StyledRentalDescription>
          Minimum age : <span>{minAge}</span>
        </StyledRentalDescription>
        <StyledRentalDescription>{rentalConditions[1]}</StyledRentalDescription>
      </StyledRentalConditionsWrap>
      <StyledRentalConditionsWrap>
        <StyledRentalDescription>{rentalConditions[2]}</StyledRentalDescription>
        <StyledRentalDescription>
          Mileage: <span>{mileage}</span>
        </StyledRentalDescription>
        <StyledRentalDescription>
          Price: <span>{advert.rentalPrice}</span>
        </StyledRentalDescription>
      </StyledRentalConditionsWrap>
      <StyledTelLink href="tel:+380730000000">Rental car</StyledTelLink>
    </StyledModalContentWrap>
  );
};
