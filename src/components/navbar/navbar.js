import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 40px;
`;

const NavBar = () => {
  return (
    <>
      <StyledNavbar color="light" light expand="md">
        <Container>
          <NavbarBrand>
            <Link to="/catsbook" className="nav-link">
              CatsBook
            </Link>
          </NavbarBrand>

          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/catsbook" className="nav-link">
                  Главная
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/catsbook/news" className="nav-link">
                  Новости
                </Link>
              </NavItem>
            </Nav>

            <NavbarText>
              <Link to="/catsbook/profile" className="nav-link">
                Профиль
              </Link>
            </NavbarText>
            <NavbarText>
              <Link to="/catsbook/authorization" className="nav-link">
                Авторизация
              </Link>
            </NavbarText>
          </Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default NavBar;
