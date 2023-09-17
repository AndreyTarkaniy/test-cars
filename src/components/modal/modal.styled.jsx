import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const BackdropStyled = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const Close = styled(AiOutlineClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px;

  max-width: 541px;

  border-radius: 30px;

  background-color: rgba(255, 255, 255, 1);
`;

export const ImgWrrap = styled.div`
  max-width: 461px;
  height: auto;
  margin-bottom: 14px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 461px;
`;

export const Title = styled.h2`
  display: inline-flex;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;

  font-size: 18px;
  line-height: calc(24 / 18);
`;
export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const InfoBox = styled.div`
  width: 380px;
  margin-bottom: 14px;
`;
export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
  padding: 0;
`;

export const InfoLi = styled.div`
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);

  color: rgba(18, 20, 23, 0.5);
  &:last-child {
    border-right: none;
  }
`;

export const DescriptWrrap = styled.div`
  width: 455px;
`;
export const DescriptText = styled.p`
  color: #121417;

  font-weight: 400;
  line-height: calc(20 / 14);
  margin: 0;
`;

export const FuncBox = styled.div`
  width: 455px;
  margin-bottom: 24px;
`;
export const FuncTitle = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  line-height: calc(20 / 14);
`;

export const FuncList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
  padding: 0;
`;

export const FuncLi = styled.li`
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);

  color: rgba(18, 20, 23, 0.5);
  &:last-child {
    border-right: none;
  }
`;

export const RentalBox = styled.div`
  margin-bottom: 24px;
  width: 455px;
`;

export const RentalTitle = styled.h4`
  color: #121417;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  padding: 0;

  list-style: none;
`;
export const RentalLi = styled.li`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`;

export const Button = styled.a`
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;

  width: 65px;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);

  text-decoration: none;

  :hover,
  :focus {
    background: rgba(11, 68, 205, 1);
    transition: filter 0.5s ease-out;
  }
`;
