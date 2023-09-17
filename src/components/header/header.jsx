import { HeaderContainer, HeaderLink, Item, List } from './header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <List>
          <Item>
            <HeaderLink to="/">Home</HeaderLink>
          </Item>
          <Item>
            <HeaderLink to="/catalog">Catalog</HeaderLink>
          </Item>
          <Item>
            <HeaderLink to="/favorites">Favorites</HeaderLink>
          </Item>
        </List>
      </nav>
    </HeaderContainer>
  );
};
