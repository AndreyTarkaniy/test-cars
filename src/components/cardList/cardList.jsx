import PropTypes from 'prop-types';

import { CardCars } from 'components/cardCar/cardCar';
import { List } from './cardList.styled';

export const CardList = ({ data, openModal }) => {
  return (
    <List>
      {data.map(car => (
        <li key={`${car.description} `} data={car}>
          <CardCars data={car} openModal={openModal} relode={false} />
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func,
};
