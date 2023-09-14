import { CardCars } from 'components/cardCar/cardCar';

export const CardList = ({ data }) => {
  return (
    <ul>
      {data.map(car => (
        <li key={`${car.description} `} data={car}>
          <CardCars data={car} />
        </li>
      ))}
    </ul>
  );
};
