import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 10px;
  border-bottom: 1px solid rgba(52, 112, 255, 1);
`;

export const Navigation = styled.nav``;

export const Item = styled.li``;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;

  list-style: none;
`;

export const HeaderLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 600;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: rgba(52, 112, 255, 1);
  }
`;
