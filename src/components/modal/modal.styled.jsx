import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
  pointer-events: auto;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-top: 218px;
  padding-bottom: 40px; */

  width: 541px;
  height: 752px;
  border-radius: 30px;

  background-color: rgba(255, 255, 255, 1);
`;
