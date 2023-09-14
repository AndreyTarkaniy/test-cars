export const CardCars = ({
  data: {
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
  },
  openModal,
}) => {
  return (
    <div>
      <div>
        <img src={img} alt={make} width={274} height={268} />
      </div>
      <div>
        <p>
          {make} <span>{model} ,</span> {year}
        </p>

        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li> {rentalCompany}</li>
        <li>Premium</li>
        <li>{type}</li>
        <li>{make}</li>
        <li>{mileage}</li>
        <li>{functionalities[0]}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          openModal(true);
        }}
      >
        Learn more
      </button>
    </div>
  );
};
