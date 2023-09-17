import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from 'components/modal/modal';
import {
  Button,
  CardWrrap,
  Img,
  ImgWrapp,
  Item,
  List,
  MakeText,
  ModelText,
  PriceText,
  TitleBox,
  TitleWrapp,
  YearText,
} from './cardCar.styled';

export const CardCars = ({ data }) => {
  const [modalWindow, setModalWindow] = useState(false);

  const {
    img,
    year,
    make,
    model,
    type,
    rentalPrice,
    rentalCompany,
    functionalities,
    address,
    mileage,
  } = data;

  const openModal = () => {
    setModalWindow(prev => !prev);
  };
  const closeModal = () => {
    setModalWindow(null);
  };

  return (
    <CardWrrap>
      <ImgWrapp>
        <Img src={img} alt={make} width={274} height={268} />
      </ImgWrapp>

      <TitleWrapp>
        <TitleBox>
          <MakeText>{make}</MakeText>
          <ModelText>{model},</ModelText>
          <YearText>{year}</YearText>
        </TitleBox>

        <PriceText>{rentalPrice}</PriceText>
      </TitleWrapp>

      <List>
        <Item>{address.split(',')[1]}</Item>
        <Item>{address.split(',')[2]}</Item>
        <Item> {rentalCompany}</Item>
        <Item>Premium</Item>
        <Item>{type}</Item>
        <Item>{make}</Item>
        <Item>{mileage}</Item>
        <Item>{functionalities[0]}</Item>
      </List>

      <Button type="button" onClick={openModal}>
        Learn more
      </Button>
      {modalWindow && <Modal data={data} onClick={closeModal} />}
    </CardWrrap>
  );
};

CardCars.propTypes = {
  data: PropTypes.object.isRequired,
};
