import styled from '@emotion/styled';

export const CardWrrap = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const ImgWrapp = styled.div`
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;

  border-radius: 14px;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
`;

export const MakeText = styled.p`
  color: #121417;
  font-size: 16px;
  line-height: calc(24 / 16);
  margin: 0;
`;

export const ModelText = styled.p`
  color: #3470ff;
  font-size: 16px;
  line-height: calc(24 / 16);
  margin: 0;
`;

export const YearText = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
  margin: 0;
`;

export const PriceText = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-bottom: 28px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border-right: 2px solid rgba(18, 20, 23, 0.2);
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;
  &:last-child {
    border-right: none;
  }
`;
export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);

  :hover,
  :focus {
    background: #0b44cd;
  }
`;
