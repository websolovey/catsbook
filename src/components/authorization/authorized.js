import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 300px;
  height: 400px;
`;

const Authorized = () => {
  return (
    <>
      <h1>Привет, {localStorage.getItem("login")}</h1>
      <StyledImg src="https://pbs.twimg.com/media/DxF8NXiUYAAWRPk.jpg:large" />
      <h3>Можешь перейти в {<Link to="/profile">профиль</Link>}</h3>
    </>
  );
};

export default Authorized;
