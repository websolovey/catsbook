import React from "react";
import Authorization from "../authorization/authorization";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import NewsBlock from "../news/news-block";
import ProfileBlock from "../profile/profile";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 80%;
`;

const MainBlock = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Row>
          <>
            <Col>
              <h1>Добро пожаловать в CatsBook</h1>
              <h3>Первая социальная сеть для котиков</h3>
              <StyledImg src="https://w-dog.ru/wallpapers/1/50/438770697847240/za-kot-noutbuk.jpg" />
            </Col>
          </>
        </Row>
      </Route>
      <Route exact path="/authorization">
        <Authorization />
      </Route>
      <Route exact path="/news">
        <NewsBlock />
      </Route>
      <Route exact path="/profile">
        <ProfileBlock />
      </Route>
      <Route>
        <h1>Страница не найдена</h1>
      </Route>
    </Switch>
  );
};

export default MainBlock;
