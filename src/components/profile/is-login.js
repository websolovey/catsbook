import React from "react";
import { Col } from "reactstrap";
import styled from "styled-components";

const StyledCol = styled.div`
  margin: 0 auto;
  width: 600px;
`;
/*
Функция принимает  три параметра: статус авторизации, блок для рендера если пользователь авторизован
и блок если пользователь не авторизован. Проверяет статус и возвращает соответствующий блок.
 */
function userIsLogin(loginStatus, trueBlock, falseBlock) {
  if (loginStatus) {
    return <Col>{trueBlock}</Col>;
  } else {
    return <StyledCol>{falseBlock}</StyledCol>;
  }
}

export default userIsLogin;
