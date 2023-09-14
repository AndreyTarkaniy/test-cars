import { getDataCars } from 'api/carsService';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [cars, setCars] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [, setError] = useState(null);

  useEffect(() => {
    const asyncWrapper = async () => {
      //   try {
      // setIsLoading(true);
      const data = await getDataCars();
      setCars(data);
      //   } catch (error) {
      // setError('Oops');
      //   } finally {
      // setIsLoading(false);
    };
    // };
    asyncWrapper();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
