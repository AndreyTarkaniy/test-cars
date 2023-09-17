import { useState } from 'react';
import { useEffect } from 'react';

import * as CarsService from 'api/carsService';
import { CardList } from 'components/cardList/cardList';
import { Button } from './Cataloge.styled';

const Catalog = () => {
  const [page, setPage] = useState(1);

  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(error);
        const data = await CarsService.getDataCars(page);

        if (page === 1) {
          return setCars(data);
        } else setCars(prevState => [...prevState, ...data]);

        if (data.length < CarsService.limit) setTotalCars(true);
      } catch (error) {
        setError('Oops');
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [page, error]);

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <h1>Catalog</h1>

      <CardList data={cars} />
      {!totalCars && (
        <Button type="button" onClick={incrementPage}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default Catalog;
