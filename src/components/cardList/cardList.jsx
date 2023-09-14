import { CardCars } from 'components/cardCar/cardCar';

export const CardList = ({ data, openModal }) => {
  return (
    <ul>
      {data.map(car => (
        <li key={`${car.description} `} data={car}>
          <CardCars data={car} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
