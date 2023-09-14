import { useState } from 'react';
import { useEffect } from 'react';

import * as CarsService from 'api/carsService';
import { CardList } from 'components/cardList/cardList';
import { Modal } from 'components/modal/modal';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [modalWindow, setModalWindow] = useState(false);

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

  const openModal = () => {
    setModalWindow(true);
  };
  const closeModal = () => {
    setModalWindow(null);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <h1>Catalog</h1>
      <CardList data={cars} openModal={openModal} />
      {!totalCars && (
        <button type="button" onClick={incrementPage}>
          Load more
        </button>
      )}
      {modalWindow && <Modal onClick={closeModal} />}
    </div>
  );
};

export default Catalog;
