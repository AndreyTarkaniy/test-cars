import { BackdropStyled, ModalWindow } from './modal.styled';
import { useEffect } from 'react';

export const Modal = ({ onClick }) => {
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
        <img
          src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg"
          alt=""
          width={461}
          height={248}
        />
        <h2>
          name <span>model</span>, year
        </h2>
        <ul>
          <li>Kiev</li>
          <li>Ukraine</li>
          <li>id:</li>
          <li>Year:</li>
          <li>Type:</li>
          <li>fuelConsumption:</li>
          <li>engineSize:</li>
        </ul>
        <h3>description</h3>
        <div>
          <h3>Accessories and functionalities:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Rental Conditions: </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </ModalWindow>
    </BackdropStyled>
  );
};
