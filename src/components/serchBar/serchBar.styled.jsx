import styled from '@emotion/styled';

export const FormWrrap = styled.div`
  display: flex;
  gap: 18px;
`;
export const InputWrrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 14px;
  border: 0;

  /* background-color: rgba(247, 247, 251, 1); */
  background-color: #7070c2;
  color: white;
  outline: none;
`;

export const Label = styled.p`
  margin-bottom: 8px;
`;
export const ChevronBtn = styled.button`
  position: absolute;

  top: 25%;
  right: 14px;

  padding: 0;
  border: 0;
  color: white;
  background-color: inherit;

  cursor: pointer;
`;

export const RegestWrrap = styled.div`
  border-radius: 14px;
`;

export const InputLeft = styled.input`
  padding: 14px 18px;

  border-radius: 14px 0 0 14px;
  border-right: #01010f solid 1px;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;

  background-color: #7070c2;
  color: white;

  outline: none;
`;
export const InputRight = styled.input`
  padding: 14px 18px;
  border-radius: 0 14px 14px 0;
  border: 0;

  /* background-color: rgba(247, 247, 251, 1); */
  background-color: #7070c2;
  color: white;

  outline: none;
`;

export const SearchBtn = styled.button`
  margin-top: 42px;
  padding: 14px 44px;
  height: 43px;

  border: 0;
  border-radius: 12px;

  color: white;
  background-color: rgba(52, 112, 255, 1);

  cursor: pointer;
`;
