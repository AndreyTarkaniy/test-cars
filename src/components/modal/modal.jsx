import PropTypes from 'prop-types';

import {
  BackdropStyled,
  Button,
  Close,
  DescriptText,
  DescriptWrrap,
  FuncBox,
  FuncLi,
  FuncList,
  FuncTitle,
  Img,
  ImgWrrap,
  InfoBox,
  InfoLi,
  InfoList,
  ModalWindow,
  RentalBox,
  RentalLi,
  RentalList,
  RentalTitle,
  Span,
  Title,
} from './modal.styled';
import { useEffect } from 'react';

export const Modal = ({
  data: {
    img,
    year,
    make,
    model,
    type,
    rentalPrice,
    functionalities,
    address,
    mileage,
    id,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  },
  onClick,
}) => {
  useEffect(() => {
    const handleClickEscape = e => {
      if (e.code === 'Escape') onClick();
    };

    document.addEventListener('keydown', handleClickEscape);
    return () => {
      document.removeEventListener('keydown', handleClickEscape);
    };
  }, [onClick]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  return (
    <BackdropStyled onClick={handleOverlay}>
      <ModalWindow>
        <Close onClick={onClick} />
        <ImgWrrap>
          <Img src={img} alt={make} />
        </ImgWrrap>

        <Title>
          {make} <Span>{model}</Span>, {year}
        </Title>
        <InfoBox>
          <InfoList>
            <InfoLi>{address.split(',')[1]}</InfoLi>
            <InfoLi>{address.split(',')[2]}</InfoLi>
            <InfoLi>id:{id}</InfoLi>
            <InfoLi>Year: {year}</InfoLi>
            <InfoLi>Type: {type}</InfoLi>
            <InfoLi>fuelConsumption: {fuelConsumption}</InfoLi>
            <InfoLi>engineSize: {engineSize}</InfoLi>
          </InfoList>
        </InfoBox>

        <DescriptWrrap>
          <DescriptText>{description}</DescriptText>
        </DescriptWrrap>

        <FuncBox>
          <FuncTitle>Accessories and functionalities:</FuncTitle>
          <FuncList>
            <FuncLi>{accessories[0]}</FuncLi>
            <FuncLi>{accessories[1]}</FuncLi>
            <FuncLi>{accessories[2]}</FuncLi>
            <FuncLi>{functionalities[0]}</FuncLi>
            <FuncLi>{functionalities[1]}</FuncLi>
            <FuncLi>{functionalities[2]}</FuncLi>
          </FuncList>
        </FuncBox>

        <RentalBox>
          <RentalTitle>Rental Conditions: </RentalTitle>
          <RentalList>
            <RentalLi>{rentalConditions.split('/n')[0]}</RentalLi>
            <RentalLi>{rentalConditions.split('/n')[1]}</RentalLi>
            <RentalLi>{rentalConditions.split('/n')[2]}</RentalLi>
            <RentalLi>
              Mileage: <Span>{mileage / 1000}</Span>
            </RentalLi>
            <RentalLi>
              Price: <Span>{rentalPrice}</Span>
            </RentalLi>
          </RentalList>
        </RentalBox>
        <Button href="tel:+380730000000">Rental car</Button>
      </ModalWindow>
    </BackdropStyled>
  );
};

Modal.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
